import Button from "./button";

export default function Sidebar() {
  return (
    <>
      <div className="bg-zinc-200 dark:bg-side-cont-dark shadow-md/10 w-[250px] h-full transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40">
        <div className="p-2 flex">
          <link rel="stylesheet" href="/" />
        </div>
        <div className="flex flex-col items-center">
          <Button />
        </div>
      </div>
    </>
  );
}
