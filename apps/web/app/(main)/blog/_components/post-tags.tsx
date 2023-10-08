export default function PostTags({ tags }: { tags: string[] }) {
  const tagColor = (tagIndex: number) => {
    return tagIndex % 2 === 0
      ? 'bg-brand text-white'
      : 'bg-alternate text-white';
  };

  return (
    <ul className="-m-1 flex flex-wrap text-xs font-medium">
      {tags.map((tag, tagIndex) => (
        <li key={tagIndex} className="m-1">
          <div
            className={`inline-flex rounded-full px-3 py-1 text-center transition duration-150 ease-in-out ${tagColor(
              tagIndex,
            )}`}
          >
            {tag}
          </div>
        </li>
      ))}
    </ul>
  );
}
