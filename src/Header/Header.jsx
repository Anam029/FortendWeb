import { Plus } from "lucide-react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MessageButton from "./MessageButton";
import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">

      <Logo />

      <SearchBar />

      <div className="flex items-center gap-5">

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">

          <Plus size={18} />

          Create

        </button>

        <MessageButton />

        <NotificationBell />

        <UserMenu />

      </div>

    </header>
  );
};

export default Header;