import { Suspense } from "react";
import { Posts, PostsSkeleton } from "./_containers/posts";

export default function Page() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </div>
  );
}
