import { Plus } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="w-80 h-[calc(100vh-64px)] bg-[#181818] border-l border-zinc-800 p-5">

      {/* Trending Topics */}
      <div className="bg-[#222222] rounded-xl p-5 border border-zinc-700">

        <h2 className="text-lg font-semibold text-white mb-5">
          Trending Topics
        </h2>

        <TrendingItem number="01" title="Technology" posts="20K Posts" />
        <TrendingItem number="02" title="Gaming" posts="9,989 Posts" />
        <TrendingItem number="03" title="Memes" posts="7,968 Posts" />
        <TrendingItem number="04" title="Politics" posts="1,968 Posts" />

      </div>

      {/* Suggested Communities */}

      <div className="bg-[#222222] rounded-xl p-5 border border-zinc-700 mt-6">

        <h2 className="text-lg font-semibold text-white mb-5">
          Suggested Community
        </h2>

        <CommunityItem
          name="AI Automation"
          members="2.8M Members"
        />

        <CommunityItem
          name="Startups"
          members="1.2M Members"
        />

        <CommunityItem
          name="Cyber Security"
          members="890K Members"
        />

        <CommunityItem
          name="Linux Community"
          members="650K Members"
        />

      </div>

    </aside>
  );
}

function TrendingItem({ number, title, posts }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-zinc-700 last:border-none">

      <div>

        <p className="text-sm text-zinc-400">
          {number}
        </p>

        <h3 className="text-white font-medium">
          {title}
        </h3>

        <p className="text-xs text-zinc-500">
          {posts}
        </p>

      </div>

      <span className="text-sm text-zinc-400">
        8.5%
      </span>

    </div>
  );
}

function CommunityItem({ name, members }) {
  return (
    <div className="flex justify-between items-center py-3">

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
          {name.charAt(0)}
        </div>

        <div>

          <h3 className="text-white text-sm font-medium">
            {name}
          </h3>

          <p className="text-xs text-zinc-500">
            {members}
          </p>

        </div>

      </div>

      <button className="px-4 py-1 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200">
        Join
      </button>

    </div>
  );
}