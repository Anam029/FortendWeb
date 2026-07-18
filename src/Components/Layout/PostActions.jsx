import {
  ArrowBigUp,
  ArrowBigDown,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function PostActions({
  upvotes,
  comments,
}) {
  return (
    <div className="flex items-center gap-4">

      <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition">
        <ArrowBigUp size={20} />
        <span>{upvotes}</span>
      </button>

      <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition">
        <ArrowBigDown size={20} />
      </button>

      <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition">
        <MessageCircle size={18} />
        <span>{comments}</span>
      </button>

      <button className="flex items-center gap-2 px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition">
        <Share2 size={18} />
        <span>Share</span>
      </button>

    </div>
  );
}