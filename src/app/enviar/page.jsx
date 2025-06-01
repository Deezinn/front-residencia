"use client";

import Dropdown from "../components/Dropdown";
import {
  CloudUpload,
  RotateCcw,
  History,
  ZoomIn,
  ZoomOut,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useEffect, useState } from "react";

const option = ["CPF", "CNH"];

export default function Enviar() {
  const [fileName, setFileName] = useState("");
  const [docValue, setDocValue] = useState("");
  const [image, setImage] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    setFileName(file.name);

    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  function onImageChange(e) {

  }

  return (
    <>
      <Dropdown
        styles={`w-full`}
        disabled="Selecione o tipo de arquivo"
        options={option}
        setValue={setDocValue}
        value={docValue}
      />
      <div
        className="flex items-center justify-center p-4 border-2 border-dashed border-pink-300 my-3 rounded-sm flex-col gap-3">
        <CloudUpload className="h-1/4 w-1/12" />
        <h1 className="text-3xl font-bold">Envie um arquivo</h1>
        <span>PNG, PDF, JPG. Tamanho máximo 50MB</span>
        <div className="gap-2 flex items-center">
          <input
            type="file"
            name="file"
            id="img"
            className="hidden"
            onChange={handleFile}
            disabled={docValue === ""}
          />
          <label
            htmlFor="img"
            className={`px-2 py-1 rounded-sm text-zinc-100 ${fileName ? "bg-pink-500" : "bg-zinc-400"} ${docValue === "" ? "cursor-not-allowed opacity-70" : "cursor-pointer hover:bg-zinc-500"}`}
          >
            {fileName ? "Trocar arquivo" : "Enviar arquivo"}
          </label>
          <label htmlFor="file">
            {fileName ? fileName : "Nenhum arquivo selecionado"}
          </label>
        </div>
      </div>
      <div className="flex gap-2 h-96">
        <div className="flex flex-col bg-indigo-200 relative flex-1 rounded-sm justify-end items-end h-full">
          <img src={image} alt="" className="w-5/6 mx-auto" />
          <div className="flex w-full justify-center items-baseline py-3 gap-1">
            <div
              className="flex items-center justify-center p-1 bg-zinc-500 w-fit h-fit rounded-full cursor-pointer active:bg-zinc-600">
              <RotateCcw color="white" size="20" />
            </div>
            <div
              className="flex items-center justify-center p-1 bg-zinc-500 w-fit h-fit rounded-full cursor-pointer active:bg-zinc-600">
              <ZoomOut size="25" color="white" />
            </div>
            <div
              className="flex items-center justify-center gap-1 p-1 bg-zinc-500 w-fit h-fit rounded-full select-none">
              <ArrowLeft color="white" className="cursor-pointer" />
              <span className="text-white">1/0</span>
              <ArrowRight color="white" className="cursor-pointer" />
            </div>
            <div
              className="flex items-center justify-center p-1 bg-zinc-500 w-fit h-fit rounded-full cursor-pointer active:bg-zinc-600">
              <ZoomIn size="25" color="white" />
            </div>
            <div
              className="flex items-center justify-center p-1 bg-zinc-500 w-fit h-fit rounded-full cursor-pointer active:bg-zinc-600">
              <History color="white" size="20" />
            </div>
          </div>

        </div>
        <div className="flex flex-col bg-gray-100 flex-1 rounded-sm h-full">
          <div className="w-full bg-zinc-50 h-8 rounded-tl-sm rounded-tr-sm border-1 border-zinc-400"></div>
        </div>
      </div>
    </>
  );
}
