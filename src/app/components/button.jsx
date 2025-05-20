import dashboard from '@/assets/img/dashboard.png';

export default function Button() {
  return (
    <div className="flex flex-col items-center mt-20 space-y-1">
      <div>
         <button
        style={{ backgroundColor: '#c10075' }}
        className="shadow-md active:shadow-inner active:translate-y-2 duration-200 rounded-sm w-52 h-14 flex items-center justify-items-start"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/7781/7781587.png"
          alt="dashboard-icon"
          className="w-6 h-auto opacity-90 ml-4"
        />
        <span className="ml-5 text-black font-sans">Dashboard</span>
      </button>
      </div>
      <div className='mt-3'>
         <button
        style={{ backgroundColor: '#c10075' }}
        className="shadow-md active:shadow-inner active:translate-y-2 duration-200 rounded-sm w-52 h-14 flex items-center justify-items-start"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/1038/1038247.png"
          alt="dashboard-icon"
          className="w-7 h-auto opacity-90 ml-4"
        />
        <span className="ml-5 text-black font-sans">Relatórios</span>
      </button>
      </div>
    </div>
  );
}
