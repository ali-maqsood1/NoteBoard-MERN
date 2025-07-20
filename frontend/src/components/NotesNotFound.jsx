import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-[#00f0ff1a] rounded-full p-8 shadow-[0_0_12px_#00f0ff40]">
        <NotebookIcon className="size-10 text-[#00f0ff] drop-shadow-[0_0_4px_#00f0ff]" />
      </div>
      <h3 className="text-2xl font-bold text-[#00f0ff] drop-shadow-[0_0_4px_#00f0ff]">
        No notes yet
      </h3>
      <p className="text-white/70">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link
        to="/create"
        className="btn text-black font-bold bg-[#00f0ff] hover:bg-[#00d5ff] shadow-[0_0_10px_#00f0ff] border-none transition"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
