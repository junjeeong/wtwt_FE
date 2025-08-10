import TagButton from "@/components/common/button/TagButton"

function TagList({ list }: { list: string[] }) {
  return (
    <ul className="mx-auto flex max-w-[600px] flex-wrap gap-2">
      {list.map((tag, idx) => (
        <li key={idx}>
          <TagButton>{tag}</TagButton>
        </li>
      ))}
    </ul>
  )
}

export default TagList
