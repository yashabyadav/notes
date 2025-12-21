import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration - Yash's Digital Garden
 * Theme: Monochrome with Blue Topaz accents
 * Matches yashabyadav.github.io aesthetic
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Yashab's Notes",
    pageTitleSuffix: " | Digital Garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "yashabyadav.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f8f8",        // Clean white background
          lightgray: "#e8e8e8",    // Subtle borders
          gray: "#7f7f7f",         // Muted text
          darkgray: "#2a2a2a",     // Body text
          dark: "#1a1a1a",         // Headlines
          secondary: "#2d82cc",    // Blue Topaz accent (links)
          tertiary: "#52c7b2",     // Blue Topaz green (hover)
          highlight: "rgba(45, 130, 204, 0.12)",
          textHighlight: "#ffd35188", // Blue Topaz yellow highlight
        },
        darkMode: {
          light: "#151515",        // Dark background (matches your website)
          lightgray: "#222222",    // Subtle card/border color
          gray: "#4a4a4a",         // Muted elements
          darkgray: "#c6c6c6",     // Body text (matches your site)
          dark: "#e4e4e4",         // Headlines/bright text
          secondary: "#88C0D0",    // Blue Topaz frost cyan (links)
          tertiary: "#a4ca8e",     // Blue Topaz green (hover)
          highlight: "rgba(136, 192, 208, 0.12)",
          textHighlight: "#ebcb8b55", // Blue Topaz yellow highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
