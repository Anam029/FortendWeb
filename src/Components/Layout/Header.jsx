import {
  Search,
  Bell,
  Mail,
  ChevronDown,
} from "lucide-react";
import Avatar from "../../assets/Avatar.png";


export default function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-[#181818] px-8 flex items-center justify-between">

      
      <div className="flex items-center gap-10">

        
        <h1 className="text-2xl font-bold text-white">
          Web
        </h1>

        
        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-[450px] rounded-full bg-[#242424] border border-zinc-700 pl-11 pr-4 py-2 text-white outline-none focus:border-white-400"
          />

        </div>

      </div>

      
      <div className="flex items-center gap-5">

        
        <Mail
          size={20}
          className="text-zinc-300 cursor-pointer"
        />

        
        <Bell
          size={20}
          className="text-zinc-300 cursor-pointer"
        />

        
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src={Avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full"
          />
         
          

          

        </div>

      </div>

    </header>
  );
}