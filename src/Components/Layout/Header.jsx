import {
  Search,
  Bell,
  Mail,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-[#181818] px-8 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-10">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400">
          Convo
        </h1>

        {/* Search */}
        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-[450px] rounded-full bg-[#242424] border border-zinc-700 pl-11 pr-4 py-2 text-white outline-none focus:border-yellow-400"
          />

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* AI Button */}
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:bg-yellow-300">
          Convo AI
        </button>

        {/* Mail */}
        <Mail
          size={20}
          className="text-zinc-300 cursor-pointer"
        />

        {/* Notification */}
        <Bell
          size={20}
          className="text-zinc-300 cursor-pointer"
        />

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <span className="text-white">
            Eugene
          </span>

          <ChevronDown
            size={18}
            className="text-zinc-400"
          />

        </div>

      </div>

    </header>
  );
}