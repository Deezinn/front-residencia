import Image from "next/image";
import logo from "../assets/img/err2log.png";
import Invertocat from "../app/components/Invertocat"; 
export default function Main() {
  return (
    <div className="p-20">
      <Image src={logo} alt="Err2Log Logo" className="w-80" />
      <h2 className="pl-2 text-4xl font-bold text-black">
        Registros de erro da API ExtrAI Dados
      </h2>
      <p className="pl-2 mt-10 text-lg text-gray-700 dark:text-gray-300 w-200">
        Um sistema com o objetivo de gerar relatorios de erros dos serviços da API ExtrAI Dados. Os erros são
        registrados em um banco de dados e podem ser visualizados aqui para facilitar a identificação e resolução de problemas.
      </p>
      <h3 className="text-black font-semibold text-2xl pl-2 mt-10">Repositórios:</h3>
      <div className="flex gap-4 pl-2 mt-4">
        <a href="https://github.com/Deezinn/front-residencia" target="_blank" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-3 rounded-sm transition-colors duration-200 flex items-center gap-1">
          <Invertocat/> Nossa API
        </a>
        <a href="https://github.com/Deezinn/front-residencia" target="_blank" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-3 rounded-sm transition-colors duration-200 flex items-center gap-1">
          <Invertocat/> Nossa Página
        </a>
      </div>
    </div>
  );
}
