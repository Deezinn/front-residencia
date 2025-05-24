"use client";

const erros = [
  { id: 1, dataHora: "10-03-2025/20:53pm", modelo: "extrai", cliente: "Mario" },
  { id: 2, dataHora: "10-03-2025/08:32am", modelo: "extrai", cliente: "Clara" },
  {
    id: 3,
    dataHora: "10-03-2025/10:11am",
    modelo: "extrai",
    cliente: "Fernanda",
  },
  {
    id: 4,
    dataHora: "10-03-2025/15:24pm",
    modelo: "extrai",
    cliente: "Rodrigo",
  },
  {
    id: 5,
    dataHora: "10-03-2025/15:24pm",
    modelo: "extrai",
    cliente: "Carol",
  },
  {
    id: 6,
    dataHora: "10-03-2025/15:24pm",
    modelo: "extrai",
    cliente: "Laura",
  },
  {
    id: 7,
    dataHora: "10-03-2025/15:24pm",
    modelo: "extrai",
    cliente: "Marcelo",
  },
];

export default function Lista() {
  const listErrors = erros.map((erro, index) => (
    <tr
      key={erro.id || index}
      className="odd:bg-zinc-100 even:bg-zinc-300 border-b-2 border-black"
    >
      <td className="p-1 text-center text-zinc-800 select-none">{erro.id}</td>
      <td className="p-1 text-center text-zinc-800 select-none">
        {erro.dataHora}
      </td>
      <td className="p-1 text-center text-zinc-800 select-none">
        {erro.modelo}
      </td>
      <td className="p-1 text-center text-zinc-800 select-none">
        {erro.cliente}
      </td>
    </tr>
  ));

  return (
    <table className="w-3xl border-2 border-black border-separate border-spacing-0 rounded-md overflow-hidden">
      <thead className="bg-pink-fraco dark:bg-pink-800">
        <tr className="border-b-2 border-black">
          <th className="p-1 text-gray-800">ID</th>
          <th className="p-1 text-gray-800">Data e Hora</th>
          <th className="p-1 text-gray-800">Modelo</th>
          <th className="p-1 text-gray-800">Cliente</th>
        </tr>
      </thead>
      <tbody>{listErrors}</tbody>
    </table>
  );
}
