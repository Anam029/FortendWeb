import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-[420px]">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search users, posts, communities..."
        className="w-full rounded-xl border border-gray-300 bg-gray-100 py-2.5 pl-10 pr-4 outline-none focus:border-blue-500 focus:bg-white"
      />
    </div>
  );
};

export default SearchBar;