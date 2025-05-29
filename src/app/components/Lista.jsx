"use client";

import erros from "../const/index";

export default function Lista() {
  const listErrors = erros.map((erro, index) => (
    <tr
      key={erro.id || index}
      className="odd:bg-pink-100 even:bg-pink-200 dark:odd:bg-pink-200 dark:even:bg-pink-300 text-zinc-800 border-b-2 border-black"
    >
      <td className="p-1 text-center select-none">{erro.id}</td>
      <td className="p-1 text-center select-none">
        {erro.codigo}
      </td>
      <td className="p-1 text-center select-none">{erro.guid}</td>
      <td className="p-1 text-center select-none">
        {erro.dataHora}
      </td>
      <td className="p-1 text-center select-none">
        {erro.modelo}
      </td>
      <td className="p-1 text-center select-none">
        {erro.mensagem}
      </td>
    </tr>
  ));

  return (
    <table className="w-4xl border-2 border-black border-separate border-spacing-0 rounded-md overflow-hidden">
      <thead className="bg-pink-500 dark:bg-pink-600">
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
  );
}
