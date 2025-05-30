import { membros } from "@/app/const/index"

export default function Equipe() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 p-8 min-h-[75vh]">
            {membros.map((membro, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg hover:shadow-none transition-shadow delay-50 p-10 w-80"
                >
                    <img
                        src={membro.imagem}
                        alt={`Foto de ${membro.nome}`}
                        className="w-24 h-24 rounded-full mb-5"
                    />
                    <h2 className="text-xl font-semibold text-black">{membro.nome}</h2>
                    <p className="">{membro.funcao}</p>
                </div>
            ))}
        </div>
    );
}
