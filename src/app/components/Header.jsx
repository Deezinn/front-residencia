import { UserRound } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative w-full p-3 flex justify-between items-center shadow-md/20 bg-white dark:bg-header-dark z-40">
      <img
        src="https://di2win-site.b-cdn.net/wp-content/uploads/2024/05/cropped-logo-completa-preto.png"
        alt="di2win-logo"
        className="w-40"
      />
      <Link
        href="/equipe"
        className="flex justify-center items-center bg-pink-500 p-2 rounded-sm gap-2 pr-4 pl-4 cursor-pointer active:translate-y-0.5 ease-in-out duration-300 hover:bg-pink-600 color-transition"
      >
        <UserRound color="white" />
        <h3 className="text-white select-none">Equipe 1</h3>
      </Link>
    </header>
  );
}
