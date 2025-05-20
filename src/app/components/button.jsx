import dashboard from '@/assets/img/dashboard.png';

export default function Button() {
  return (
    <div className="flex flex-col items-center mt-20 space-y-1">
      <button
        style={{ backgroundColor: '#c10075' }}
        className="shadow-md active:shadow-inner active:translate-y-2 duration-200 rounded-sm w-52 h-14 flex items-center justify-items-start"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/7781/7781587.png"
          alt="dashboard-icon"
          className="w-5 h-auto opacity-90 ml-4"
        />
        <span className="ml-5 text-black font-sans">Dashboard</span>
      </button>
    </div>
  );
}
