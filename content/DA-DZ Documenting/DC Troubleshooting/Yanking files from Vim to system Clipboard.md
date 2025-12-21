---
date: 2024-08-11
tags:
  - troubleshooting
  - resolved
  - vim-concept
publish: true
---

## Problem
When yanking text from Vim, the text gets copied to vim buffer and not to the system clipboard buffer.

## Solution

##### To yank text to system buffer
- Select the text you want to copy using visual mode.
- Type `"*y` to yank the selected text to system buffer.
##### To paste text in Vim from system buffer
- Type `"*p` to paste the text from system clipboard at the cursor. 
