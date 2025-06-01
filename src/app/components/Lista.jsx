"use client";

import { erros } from "../const/index";

function ListEmpty() {
  return (
    <div className="w-full bg-zinc-300">
      <h1 className="text-3xl text-black font-bold">Não foi possível encontrar nenhum registro.</h1>
    </div>
  );
}

export default function Lista({ search, data, status }) {
  const listagem = erros.filter(erro => {
    const porPesquisa = search ? erro.modelo.toLowerCase().includes(search.toLowerCase()) : true;
    const porStatus = status ? erro.codigo.toString().includes(status) : true;
    const porData = data ? erro.dataHora.split(" ")[0].split("/").reverse().join("-") === data : true;

    return porPesquisa && porStatus && porData;
  });

  const listErrors = listagem.map((erro, index) => (
    <tr
      key={erro.id || index}
      className="odd:bg-pink-100 even:bg-pink-200 dark:odd:bg-pink-200 dark:even:bg-pink-300 text-zinc-800 border-b-2 border-black"
    >
      <td className="p-1 text-center">{erro.id}</td>
      <td className="p-1 text-center">{erro.codigo}</td>
      <td className="p-1 text-center">{erro.guid}</td>
      <td className="p-1 text-center">{erro.dataHora}</td>
      <td className="p-1 text-center">{erro.modelo}</td>
      <td className="p-1 text-center">{erro.mensagem}</td>
    </tr>
  ));

  return (
    <div>
      {listErrors.length < 1 ? (<ListEmpty />) :
        (
          <table
            className="block border-2 border-black border-separate border-spacing-0 rounded-md overflow-auto w-full min-h-fit max-h-[470px]">
            <thead className="sticky top-0 bg-pink-500 dark:bg-pink-600 shadow-sm/20">
            <tr className="border-b-2 text-gray-100 dark:text-gray-900 border-black">
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Código</th>
              <th className="px-3 py-2">GUID</th>
              <th className="px-3 py-2">Data e Hora</th>
              <th className="px-3 py-2">Modelo</th>
              <th className="px-3 py-2">Mensagem</th>
            </tr>
            </thead>
            <tbody>{listErrors}</tbody>
          </table>
        )}
    </div>
  );
}
