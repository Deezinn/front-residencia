import UserIcon from "../../assets/icons/user.svg";

export default function Header() {
  return (
    <header className="w-full p-5 flex justify-evenly">
      <img
        src="https://di2win-site.b-cdn.net/wp-content/uploads/2024/05/cropped-logo-completa-preto.png"
        alt="di2win-logo"
        className="w-40"
      />
      <div className="w-full">
        <img src={UserIcon} alt="user-icon" />
      </div>
    </header>
  );
}
