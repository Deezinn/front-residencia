"use client";

import Lista from "../../app/components/Lista";
import Dropdown from "../../app/components/Dropdown";
import { Calendar } from "lucide-react";
import { Bug } from "lucide-react";
import Pesquisa from "../../app/components/Pesquisa";
import { useState, useEffect } from "react";
import { errosDrop, erros, erroData } from "@/app/const";

const datas = ["10-04-2025", "04-10-2024", "29-01-2025", "14/04/2025"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState();
  const [data, setData] = useState("");
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getErrors();
        setDados(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  });

  return (
    <div className="">
      <div className="my-2 flex gap-1">
        <input
          type="date"
          name="input-data"
          id="input-data"
          className="bg-zinc-100 rounded-md px-1 border-2 border-zinc-500 text-zinc-800 outline-none"
          value={search}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="bg-zinc-100 rounded-md cursor-pointer hover:shadow-sm/20 active:translate-y-0.5 transition-all text-black px-2 border-2 border-zinc-500"
          onClick={() => setData("")}
        >
          Limpar data
        </button>
        <Dropdown
          disabled="Status code"
          options={errosDrop}
          nome="erro"
          icon={<Bug color="#f6339a" />}
          setValue={setStatus}
          value={status}
        />
        <Pesquisa setSearch={setSearch} searchValue={search} />
      </div>
      <Lista search={search} status={status} data={data} />
    </div>
  );
}
