import PostActions from "./PostActions";

export default function FeedCard({ post }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition">

      <p className="text-sm text-zinc-400">
        r/{post.community} • u/{post.username} • {post.time}
      </p>

      <h2 className="text-xl font-semibold text-white mt-2">
        {post.title}
      </h2>

      <p className="text-zinc-300 mt-2">
        {post.description}
      </p>

      <div className="mt-5">
        <PostActions
          upvotes={post.upvotes}
          comments={post.comments}
        />
      </div>

    </div>
  );
}