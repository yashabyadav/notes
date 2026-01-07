/**
 * Sync script for Digital Garden
 * Copies notes with 'publish: true' from Obsidian vault to Quartz content folder
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIGURATION
const OBSIDIAN_VAULT_PATH = 'C:/Users/yasha/Documents/Primary-Vault';
const CONTENT_PATH = path.join(__dirname, 'content');
const ATTACHMENTS_PATH = path.join(CONTENT_PATH, 'attachments');

// Folders to ignore (private by default)
const IGNORE_FOLDERS = [
  '.obsidian',
  '.trash',
  'Templates',
  'Daily Notes',
  'CA-CZ People',
  'Receipts',
  'Contracts',
  'private'
];

// Ensure output directories exist
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Check if a note has publish: true in frontmatter
function shouldPublish(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return false;
  
  const frontmatter = frontmatterMatch[1];
  // Check for publish: true (with various formats)
  return /publish:\s*(true|yes|"true"|'true')/i.test(frontmatter);
}

// Extract all image/attachment references from content
function extractAttachments(content) {
  const attachments = [];
  
  // Match ![[filename]] pattern
  const wikiImageRegex = /!\[\[([^\]]+)\]\]/g;
  let match;
  while ((match = wikiImageRegex.exec(content)) !== null) {
    // Handle aliases like ![[image.png|alt text]]
    const filename = match[1].split('|')[0].trim();
    attachments.push(filename);
  }
  
  // Match ![alt](filename) pattern  
  const mdImageRegex = /!\[[^\]]*\]\(([^)]+)\)/g;
  while ((match = mdImageRegex.exec(content)) !== null) {
    const filename = match[1].trim();
    if (!filename.startsWith('http')) {
      attachments.push(filename);
    }
  }
  
  // Match embedded PDFs [[file.pdf]]
  const pdfRegex = /\[\[([^\]]+\.pdf)\]\]/gi;
  while ((match = pdfRegex.exec(content)) !== null) {
    attachments.push(match[1].trim());
  }
  
  return [...new Set(attachments)]; // Remove duplicates
}

// Find attachment in vault (could be in Media folder or elsewhere)
function findAttachment(filename, vaultPath) {
  // Use ZZ0 Media instead of Media
  const searchPaths = [
    path.join(vaultPath, 'ZZ0 Media', filename),
    path.join(vaultPath, 'ZZ0 Media', 'Academic Papers', filename),
    path.join(vaultPath, 'ZZ0 Media', 'Academic Papers 2', filename),
    path.join(vaultPath, filename),
    path.join(vaultPath, 'EA-EZ Courses', filename),
  ];

  for (const searchPath of searchPaths) {
    if (fs.existsSync(searchPath)) {
      return searchPath;
    }
  }

  // Recursive search in ZZ0 Media folder
  const mediaPath = path.join(vaultPath, 'ZZ0 Media');
  if (fs.existsSync(mediaPath)) {
    const found = findFileRecursive(mediaPath, filename);
    if (found) return found;
  }

  // Recursive search in EA-EZ Courses folder
  const coursesPath = path.join(vaultPath, 'EA-EZ Courses');
  if (fs.existsSync(coursesPath)) {
    const found = findFileRecursive(coursesPath, filename);
    if (found) return found;
  }

  return null;
}

function findFileRecursive(dir, filename) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      const found = findFileRecursive(filePath, filename);
      if (found) return found;
    } else if (file === filename) {
      return filePath;
    }
  }
  return null;
}

// Get all markdown files recursively
function getAllMarkdownFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip ignored folders
      if (IGNORE_FOLDERS.some(ignore => file.toLowerCase().includes(ignore.toLowerCase()))) {
        continue;
      }
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Copy note preserving folder structure relative to vault
function copyNote(sourcePath, vaultPath, contentPath) {
  const relativePath = path.relative(vaultPath, sourcePath);
  const destPath = path.join(contentPath, relativePath);
  
  ensureDir(path.dirname(destPath));
  
  let content = fs.readFileSync(sourcePath, 'utf-8');
  
  // Extract and copy attachments
  const attachments = extractAttachments(content);
  for (const attachment of attachments) {
    const attachmentSource = findAttachment(attachment, vaultPath);
    if (attachmentSource) {
      const attachmentDest = path.join(ATTACHMENTS_PATH, attachment);
      ensureDir(path.dirname(attachmentDest));
      try {
        fs.copyFileSync(attachmentSource, attachmentDest);
        console.log('  📎 Copied attachment:', attachment);
      } catch (err) {
        console.log('  ⚠️ Failed to copy:', attachment);
      }
    } else {
      console.log('  ⚠️ Attachment not found:', attachment);
    }
  }
  
  fs.writeFileSync(destPath, content);
  return relativePath;
}

// Main sync function
function syncNotes() {
  console.log('🌱 Starting Digital Garden sync...\n');
  
  // Clean content folder (except index.md if exists)
  if (fs.existsSync(CONTENT_PATH)) {
    const files = fs.readdirSync(CONTENT_PATH);
    for (const file of files) {
      if (file === 'index.md') continue;
      const filePath = path.join(CONTENT_PATH, file);
      fs.rmSync(filePath, { recursive: true, force: true });
    }
  }
  
  ensureDir(CONTENT_PATH);
  ensureDir(ATTACHMENTS_PATH);
  
  // Get all markdown files
  const allFiles = getAllMarkdownFiles(OBSIDIAN_VAULT_PATH);
  console.log('📂 Found', allFiles.length, 'total markdown files in vault\n');
  
  let publishedCount = 0;
  let skippedCount = 0;
  
  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const filename = path.basename(filePath);
    
    if (shouldPublish(content)) {
      const relativePath = copyNote(filePath, OBSIDIAN_VAULT_PATH, CONTENT_PATH);
      console.log('✅ Published:', relativePath);
      publishedCount++;
    } else {
      skippedCount++;
    }
  }
  
  console.log('\n✨ Sync complete!');
  console.log('📊 Summary:');
  console.log('   ✅ Published:', publishedCount, 'notes');
  console.log('   ⊘ Skipped:', skippedCount, 'notes (no publish: true)');
  console.log('   📁 Output:', CONTENT_PATH);
}

syncNotes();
