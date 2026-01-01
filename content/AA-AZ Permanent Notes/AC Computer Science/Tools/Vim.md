---
tags: [productivity, vim-concept, ]
publish: true
---

# 2025-12-23

---
#### Find and replace all the instances of a string in multiple lines
(Source - [Stack exchange](https://stackoverflow.com/a/19995072))


Replace All:

```
:%s/foo/bar/g
```

Find each occurrence of 'foo' (in all lines), and replace it with 'bar'.

For specific lines:

```
:6,10s/foo/bar/g
```

Change each 'foo' to 'bar' for all lines from line 6 to line 10 inclusive.

---

# 2025-02-03
## neovim intro doc:
Clipping of [neovim intro doc](https://neovim.io/doc/user/intro.html#ref) from neovim website. Goes over the very basic definitions, notations etc.


# 2024-09-03
- https://www.vimgolf.com/
- Vim Cheat sheet: https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim/cheatsheet

## Basics
### movement in a line

#### Basic Movement

1. **`0`** - Jump to the start of the line.
2. **`^`** - Move to the first non-blank character in the line.
3. **`$`** - Move to the end of the line.
4. **`g_`** - Move to the last non-blank character in the line.

#### Word Movements

5. **`w`** - Jump forward to the beginning of the next word.
6. **`e`** - Jump forward to the end of the current/next word.
7. **`b`** - Jump backward to the beginning of the previous word.
8. **`ge`** - Jump backward to the end of the previous word.

#### Inner Word Movements (CamelCase/underscores)

9. **`W` / `B`** - Move by "big words" (words separated by spaces).
10. **`iw`** - Select the word under the cursor.
11. **`ciw`** - Change the word under the cursor.
12. **`diw`** - Delete the word under the cursor.

#### Character Movements

13. **`f<char>`** - Jump forward to a specific character in the line.
14. **`t<char>`** - Jump forward to just before a specific character.
15. **`F<char>`** - Jump backward to a specific character.
16. **`T<char>`** - Jump backward to just after a specific character.
17. **`;`** and **`,`** - Repeat the last `f`, `t`, `F`, or `T` search forward or backward, respectively.

#### Quick Jumps and Editing

18. **`0f<char>`** - Combine `0` with `f<char>` to jump to the first occurrence of a character in a line.
19. **`A`** - Jump to the end of the line in insert mode.
20. **`I`** - Jump to the first non-blank character and enter insert mode.

#### Undo and Redo

21. **`u`** - Undo the last change.
22. **`Ctrl + r`** - Redo the last undone change.

#### Miscellaneous Tips

23. **`g;` and `g,`** - Move between recent change positions in the file (useful for navigating recent edits).
24. **`*` and `#`** - Jump to the next or previous occurrence of the word under the cursor within the file.
