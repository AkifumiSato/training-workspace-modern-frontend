const POSTS_SKELETON_KEYS = [
  "posts-skeleton-0",
  "posts-skeleton-1",
  "posts-skeleton-2",
  "posts-skeleton-3",
  "posts-skeleton-4",
  "posts-skeleton-5",
  "posts-skeleton-6",
  "posts-skeleton-7",
  "posts-skeleton-8",
  "posts-skeleton-9",
] as const;

export function PostsSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {POSTS_SKELETON_KEYS.map((key) => (
          <li
            key={key}
            className="animate-pulse p-4 border-b border-gray-200 grid grid-rows-[auto_1fr_auto] gap-3"
          >
            <div className="h-6 bg-gray-300 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
            <div className="h-10 bg-gray-200 rounded w-full mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
