import Image from "next/image";
import logo from "./../public/icons/logo.svg";

export function Logo() {
  return (
    <div className="flex align-items-center">
      <Image src={logo} alt="logo" className="logo" />
    </div>
  );
}
