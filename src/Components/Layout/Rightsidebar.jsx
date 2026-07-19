import {  ArrowBigUp, MessageCircle} from "lucide-react";

const recentPosts = [
  {
    id: 1,
    image: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",
    community: "r/SoftwareEngineering",
    time: "3mo ago",
    title:
      "How do you avoid workflow tasks with small complexity estimates booming in...",
    upvotes: 8,
    comments: 21,
  },
  {
    id: 2,
    image: "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",
    community: "r/startup",
    time: "3mo ago",
    title:
      "Is anyone actually converting LinkedIn engagement into pipeline, or is it just a...",
    upvotes: 7,
    comments: 16,
  },
];

export default function RecentPosts() {
  return (
    <div className="w-96 rounded-2xl overflow-hidden border border-zinc-800 bg-black">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">

        <h2 className="uppercase text-xs tracking-wider text-zinc-400">
          Recent Posts
        </h2>

        <button className="text-blue-500 hover:text-blue-400 font-medium">
          Clear
        </button>

      </div>

      {/* Posts */}

      {recentPosts.map((post) => (
        <div
          key={post.id}
          className="px-5 py-5 border-b border-zinc-800 hover:bg-zinc-900 transition cursor-pointer"
        >
          <div className="flex gap-3">

            <img
              src={post.image}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />

            <div className="flex-1">

              <div className="flex items-center gap-2 text-sm">

                <span className="font-semibold text-white">
                  {post.community}
                </span>

                <span className="text-zinc-500">
                   {post.time}
                </span>

              </div>

              <h3 className="mt-2 text-lg leading-7 text-zinc-200 font-medium">
                {post.title}
              </h3>

              <div className="mt-3 flex items-center gap-4 text-sm text-zinc-500">
  <div className="flex items-center gap-1">
    <ArrowBigUp size={16} />
    <span>{post.upvotes}</span>
  </div>

  <div className="flex items-center gap-1">
    <MessageCircle size={16} />
    <span>{post.comments}</span>
  </div>
</div>

            </div>

          </div>
        </div>
      ))}

    </div>
  );
}