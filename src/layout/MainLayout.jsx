import { Outlet } from "react-router-dom";
import Header from "../Components/Layout/Header";
import LeftSidebar from "../Components/Layout/Leftsidebar";
import RightSidebar from "../Components/Layout/Rightsidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <Header />

      <div className="flex">
        <LeftSidebar />

        <main className="flex-1 p-5">
          <Outlet />
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}