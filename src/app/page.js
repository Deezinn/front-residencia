export default function Main() {
  return (
    <div className="p-20">
      <img src="../assets/img/err2log.png" alt="Err2Log Logo" className="w-70"/>
      <h2 className="pl-2 text-4xl font-bold text-black">
        Registros de erro da API ExtrAI Dados
      </h2>
      <p className="pl-2 mt-10 text-lg text-gray-700 dark:text-gray-300">
        Um sistema com o objetivo de gerar relatorios de erros dos serviços da API ExtrAI Dados. Os erros são
        registrados em um banco de dados e podem ser visualizados aqui para facilitar a identificação e resolução de problemas.
      </p>
    </div>
  );
}
