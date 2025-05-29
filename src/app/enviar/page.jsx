"use client";

import Dropdown from "../components/Dropdown";
import { CloudUpload } from "lucide-react";
import { useEffect, useState } from "react";

const option = ["CPF", "CNH"];

export default function Enviar() {
  const [fileName, setFileName] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    setFileName(file.name);
  }

  return (
    <div className="">
      <Dropdown
        styles={`w-full `}
        disabled="Selecione o tipo de arquivo"
        options={option}
      />
      <div className="flex items-center justify-center p-4 border-2 border-dashed border-pink-300 my-3 rounded-sm flex-col gap-3">
        <CloudUpload size="120" />
        <h1 className="text-3xl font-bold">Envie um arquivo</h1>
        <span>PNG, PDF, JPG. Tamanho máximo 50MB</span>
        <div className="gap-2 flex items-center">
          <input
            type="file"
            name="file"
            id="img"
            className="hidden"
            onChange={handleFile}
          />
          <label
            htmlFor="img"
            className={`px-2 py-1 rounded-sm text-zinc-100 cursor-pointer ${
              fileName ? "bg-pink-500" : "bg-zinc-400"
            }`}
          >
            {fileName ? "Trocar arquivo" : "Enviar arquivo"}
          </label>
          <label htmlFor="file">
            {fileName ? fileName : "Nenhum arquivo selecionado"}
          </label>
        </div>
      </div>
    </div>
  );
}
