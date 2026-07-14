import { ChevronDown } from "lucide-react";

const UserMenu = () => {
  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-100">

      <img
        src="https://i.pravatar.cc/150?img=8"
        alt="profile"
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>

        <h3 className="font-semibold">
          anam
        </h3>

        <p className="text-xs text-gray-500">
          Full Stack Developer
        </p>

      </div>

      <ChevronDown size={18} />

    </div>
  );
};

export default UserMenu;