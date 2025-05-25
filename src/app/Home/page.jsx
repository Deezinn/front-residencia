import Image from "next/image";
import Sidebar from "../components/sidebar";
import Lista from "../components/Lista";

export default function Home() {
  return (
    <div className="bg-zinc-300 p-5 rounded-sm dark:bg-gray-600">
      <Lista />
    </div>
  );
}
