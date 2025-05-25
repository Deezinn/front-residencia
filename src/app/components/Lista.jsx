"use client";

const erros = [
  {
    id: 1,
    codigo: 500,
    guid: "334-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca51",
    dataHora: "14/04/2025 20:23:30",
    modelo: "ExtrAI Dados",
    mensagem: "Bad Request",
  },
  {
    id: 2,
    codigo: 400,
    guid: "335-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca52",
    dataHora: "14/04/2025 20:32:30",
    modelo: "ExtrAI Dados",
    mensagem: "Bad Request",
  },
  {
    id: 3,
    codigo: 404,
    guid: "336-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca53",
    dataHora: "14/04/2025 20:42:30",
    modelo: "ExtrAI Dados",
    mensagem: "Not Found",
  },
  {
    id: 4,
    codigo: 500,
    guid: "337-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca54",
    dataHora: "14/04/2025 20:52:30",
    modelo: "ExtrAI Dados",
    mensagem: "Internal Server Error",
  },
  {
    id: 5,
    codigo: 400,
    guid: "338-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca55",
    dataHora: "14/04/2025 21:02:30",
    modelo: "ExtrAI Dados",
    mensagem: "Bad Request",
  },
  {
    id: 6,
    codigo: 404,
    guid: "339-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca56",
    dataHora: "14/04/2025 21:12:30",
    modelo: "ExtrAI Dados",
    mensagem: "Not Found",
  },
  {
    id: 7,
    codigo: 500,
    guid: "340-22052025-18257-83686fef-b1e9-44ac-b1e6-6dafe5cbca57",
    dataHora: "14/04/2025 21:22:30",
    modelo: "ExtrAI Dados",
    mensagem: "Internal Server Error",
  },
];

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
    <table className="w-3xl border-2 border-black border-separate border-spacing-0 rounded-md overflow-hidden">
      <thead className="bg-pink-500 dark:bg-pink-600">
        <tr className="border-b-2 text-gray-200 dark:text-gray-900 border-black">
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
