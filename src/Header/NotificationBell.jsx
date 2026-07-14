import { Bell } from "lucide-react";

const NotificationBell = () => {
  return (
    <button className="relative rounded-xl p-3 hover:bg-gray-100 transition">

      <Bell size={22} />

      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        5
      </span>

    </button>
  );
};

export default NotificationBell;