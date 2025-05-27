import Lista from "../../app/components/Lista";
import Dropdown from "../../app/components/Dropdown";
import { Calendar } from "lucide-react";
import { Bug } from "lucide-react";
import Pesquisa from "../../app/components/Pesquisa";

const datas = ["10-04-2025", "04-10-2024", "29-01-2025"];
const erros = ["500", "200", "403"];

export default function Home() {
  return (
    <div className="">
      <div className="my-2 flex gap-1">
        <Dropdown
          options={datas}
          nome="data"
          icon={<Calendar color="#f6339a" />}
        />
        <Dropdown options={erros} nome="erro" icon={<Bug color="#f6339a" />} />
        <Pesquisa />
      </div>
      <Lista />
    </div>
  );
}
