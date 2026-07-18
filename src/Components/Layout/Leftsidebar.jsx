import {
  House,
  Users,
  Compass,
  TrendingUp,
  Bookmark,
  CircleHelp,
  Settings,
  Plus,
} from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] bg-[#181818] border-r border-zinc-800 flex flex-col justify-between p-5">

      
      <div>

       

        <div className="space-y-2">

          <SidebarItem icon={<House size={18} />} title="Home" active />

          <SidebarItem icon={<Users size={18} />} title="Communities" />

          <SidebarItem icon={<Compass size={18} />} title="Explore" />

          <SidebarItem icon={<TrendingUp size={18} />} title="Trending" />

          <SidebarItem icon={<Bookmark size={18} />} title="Saved" />

        </div>

        

        <div className="mt-10">

          <div className="flex justify-between items-center mb-4">

            <p className="text-sm text-white">
              Your Community
            </p>

            <Plus
              size={16}
              className="text-zinc-400 cursor-pointer"
            />

          </div>

          <Community name="Machine Learning" />

          <Community name="Programming" />

          <Community name="Webdev" />

          <Community name="ReactJs" />

        </div>

      </div>

      

      <div className="space-y-3">

        <SidebarItem
          icon={<CircleHelp size={18} />}
          title="Help Center"
        />

        <SidebarItem
          icon={<Settings size={18} />}
          title="Settings"
        />

      </div>

    </aside>
  );
}

function SidebarItem({ icon, title, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
      ${
        active
          ? "bg-yellow-400 text-black font-semibold"
          : "text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
}

function Community({ name }) {
  return (
    <div className="flex items-center gap-3 py-2 cursor-pointer hover:text-yellow-400">

      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
        {name.charAt(0)}
      </div>

      <div>

        <p className="text-white text-sm">
          {name}
        </p>

        <p className="text-xs text-zinc-500">
          2.8M Members
        </p>

      </div>

    </div>
  );
}