"use client";

export default function Dropdown({ nome, options, icon, disabled, styles }) {
  const optionsDrop = options.map((option, index) => {
    const data = option.replace(/-/g, "/");
    return <option key={index} value={option}>{data}</option>;
  });

  return (
    <div className={`p-3 py-2 border-2 border-zinc-500 bg-zinc-100 w-52 rounded-md flex justify-center items-center gap-2 ${styles}`}>
      {icon}
      <select name={`dropdown-${nome}`} className="text-zinc-900 w-full">
        {disabled && <option value="" disabled defaultValue selected>{disabled}</option>}
        {optionsDrop}
      </select>
    </div>
  );
}
