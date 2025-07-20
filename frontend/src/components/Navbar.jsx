import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-mono tracking-tight text-[#00f0ff] drop-shadow-[0_0_6px_#00f0ff]">
            NoteBoard
            </h1>
          <div className="flex items-center gap-4">
            <Link
            to={"/create"}
            className="btn text-black bg-[#00f0ff] hover:bg-[#00bfff] shadow-[0_0_10px_#00f0ff] border-none"
            >
            <PlusIcon className="size-5" />
            <span>New Note</span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;