import { Search } from "lucide-react";

export default function Pesquisa() {
  return (
    <div className="flex w-71 justify-start items-center bg-zinc-100 border-2 border-zinc-500 rounded-md px-2 py-2 gap-1 flex-1">
      <Search color="black" />
      <input
        type="text"
        name="search-bar"
        className="outline-none bg-zinc-100 text-zinc-900 flex-1"
      />
    </div>
  );
}
