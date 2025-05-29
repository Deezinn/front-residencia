"use client";
import { useState } from "react";
import Link from "next/link";

export default function Button() {
  const [activeButton, setActiveButton] = useState("painel");

  return (
    <div className="space-y-4">
      <Link
        href="/"
        onClick={() => setActiveButton("painel")}
        className={`w-55 h-14 flex items-center justify-items-start rounded-sm cursor-pointer ${
          activeButton === "painel"
            ? "bg-fuchsia-200 text-fuchsia-500 hover:bg-[#f3bffc]"
            : "dark:bg-side-cont-dark dark:text-zinc-100 text-zinc-500"
        }`}
      >
        <span className="ml-5 font-sans flex items-center justify-items-start">
          {" "}
          Página Inicial
        </span>
      </Link>
      <Link
        href="/enviar"
        onClick={() => setActiveButton("enviar")}
        className={`w-55 h-14 flex items-center justify-items-start rounded-sm cursor-pointer ${
          activeButton === "enviar"
            ? "bg-fuchsia-200 text-fuchsia-500 hover:bg-[#f3bffc]"
            : "dark:bg-side-cont-dark dark:text-zinc-100 text-zinc-500"
        }`}
      >
        <span className="ml-5 font-sans flex items-center justify-items-start">
          {" "}
          Enviar Arquivo
        </span>
      </Link>
      <Link
        href="/relatorios"
        onClick={() => setActiveButton("relatorio")}
        className={`w-55 h-14 flex items-center justify-items-start rounded-sm cursor-pointer ${
          activeButton === "relatorio"
            ? "bg-fuchsia-200 text-fuchsia-500 hover:bg-[#f3bffc]"
            : "dark:bg-side-cont-dark dark:text-zinc-100 text-zinc-500"
        }`}
      >
        <span className="ml-5 font-sans flex items-center justify-items-start">
          {" "}
          Relatórios
        </span>
      </Link>
    </div>
  );
}
