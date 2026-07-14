const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="h-9 w-9 rounded-xl bg-black text-white flex items-center justify-center font-bold">
        D
      </div>

      <div>
        <h1 className="text-lg font-bold">DevHub</h1>
        <p className="text-xs text-gray-500">Developer Workspace</p>
      </div>
    </div>
  );
};

export default Logo;