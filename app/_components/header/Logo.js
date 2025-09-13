import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <div>
      <Image src={logo} width={125} height={50} alt="Paper stake logo" />
    </div>
  );
}

export default Logo;
