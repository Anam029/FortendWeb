import FeedCard from "../Components/Layout/FeedCard";

const posts = [
  {
    id: 1,
    community: "reactjs",
    username: "maaz",
    time: "2h",
    title: "Built my Reddit Clone UI",
    description:
      "This is my first Reddit Clone built using React, Tailwind and Express.",
    upvotes: 214,
    comments: 38,
  },
  {
    id: 2,
    community: "javascript",
    username: "anam",
    time: "5h",
    title: "Learning React Router",
    description:
      "React Router Outlet makes layouts really clean.",
    upvotes: 152,
    comments: 16,
  },
];

export default function Feed() {
  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
}