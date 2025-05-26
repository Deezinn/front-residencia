'use client'
import { useState } from "react";

export default function Button() {
  const [activeButton, setActiveButton] = useState('painel');

  return (
    <div className="space-y-4">
      <button onClick={()=> setActiveButton("painel")}
        className={`w-55 h-14 flex items-center justify-items-start rounded-sm ${
          activeButton === "painel"? "bg-fuchsia-200 text-fuchsia-500" : "bg-gray-200 text-zinc-500"
        }`}>
        <span className="ml-5 font-sans flex items-center justify-items-start"> Painel Principal</span>
      </button>
      <button onClick={()=> setActiveButton("arquivo")}
        className={`w-55 h-14 flex items-center justify-items-start rounded-sm ${
          activeButton === "arquivo"? "bg-fuchsia-200 text-fuchsia-500" : "bg-gray-200 text-zinc-500"
        }`}>
        <span className="ml-5 font-sans flex items-center justify-items-start"> Enviar Arquivo</span>
      </button>
    </div>
  );
}
