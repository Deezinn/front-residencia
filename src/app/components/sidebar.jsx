import Button from "./button";

export default function Sidebar() {
  return (
   <>
    <div className="ml-10 shadow-2xl w-[250px] h-[100vh] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40" >
      <div className="p-2 flex">
        <link rel="stylesheet" href="/" />
        <img className="w-70 h-auto mt-10" src="https://di2win-site.b-cdn.net/wp-content/uploads/2024/05/cropped-logo-completa-preto.png" alt="di2win-logo" />
      </div>
      <div className="flex flex-col">
      <Button/>
      </div>
    </div>
   </>
  );
}
