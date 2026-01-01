import { FullSlug, getAllSegmentPrefixes, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const AllTagsList: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  const tags = [
    ...new Set(
      allFiles.flatMap((data) => data.frontmatter?.tags ?? []).flatMap(getAllSegmentPrefixes),
    ),
  ].sort((a, b) => a.localeCompare(b))

  if (tags.length === 0) {
    return null
  }

  return (
    <div class="all-tags-list">
      <ul>
        {tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

AllTagsList.css = `
.all-tags-list {
  margin: 2rem 0;
}

.all-tags-list ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
}

.all-tags-list li {
  display: inline-block;
  margin: 0;
}

.all-tags-list a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.3rem 0.6rem;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.all-tags-list a.internal.tag-link:hover {
  background-color: var(--tertiary);
  opacity: 0.8;
}
`

export default (() => AllTagsList) satisfies QuartzComponentConstructor
