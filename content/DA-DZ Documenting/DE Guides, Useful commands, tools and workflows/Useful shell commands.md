---
date: 2025-11-22
cssclasses:
  - full-view
publish: true
---
# Table of content:

1. [[#1. Preview files before deleting|1. Preview files before deleting]]
2. [[#2. Delete only the matched files (after preview)|2. Delete only the matched files (after preview)]]
3. [[#3. Ultra-safe dry run (prints what *would* be deleted)|3. Ultra-safe dry run (prints what *would* be deleted)]]
4. [[#4. Preview directories before deleting|4. Preview directories before deleting]]
5. [[#5. Delete matched directories (after preview)|5. Delete matched directories (after preview)]]
6. [[#6. Notes|6. Notes]]

# Safe File & Directory Deletion with `find`



Short guide for safely previewing and deleting files or directories using `find`.

---

## 1. Preview files before deleting

Always preview matches first:

~~~bash
find . -maxdepth 2 -type f -wholename '*x*e10b0.50um64nc/out-*Run1*' -printf '%f\n'
~~~

Alternative preview:

~~~bash
find . -maxdepth 2 -type f -wholename '*x*e10b0.50um64nc/out-*Run1*' -exec echo {} \;
~~~

---

## 2. Delete only the matched files (after preview)

~~~bash
find . -maxdepth 2 -type f -wholename '*x*e10b0.50um64nc/out-*Run1*' -exec rm -- {} +
~~~

Notes:
- `rm --` prevents filenames from being interpreted as flags.
- Only the files matched by `find` are deleted.

---

## 3. Ultra-safe dry run (prints what *would* be deleted)

~~~bash
find . -maxdepth 2 -type f -wholename '*x*e10b0.50um64nc/out-*Run1*' -exec echo rm -- {} +
~~~

If this looks correct → remove `echo`, run the real command.

---

## 4. Preview directories before deleting

~~~bash
find . -maxdepth 1 -type d -name '*pattern*' -printf '%f\n'
~~~

---

## 5. Delete matched directories (after preview)

~~~bash
find . -maxdepth 1 -type d -name '*pattern*' -exec rm -rf -- {} +
~~~

---

## 6. Notes

- Always preview first.
- `-type f` → only files.
- `-type d` → only directories.
- `-maxdepth` limits search depth.
- `-wholename` matches full path patterns.

