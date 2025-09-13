import Link from "next/link";
import { GrCircleQuestion } from "react-icons/gr";
import { TbLogout, TbUsers } from "react-icons/tb";

function ProfileDropdown({ onCloseMenu }) {
  return (
    <div className="flex flex-col text-lg gap-2">
      <Link
        href="/dashboard/update-profile"
        onClick={onCloseMenu}
        className="flex items-center justify-center gap-1 py-1 rounded-lg hover:bg-button-secondary transition"
      >
        Profile <TbUsers />
      </Link>
      <Link
        href="/dashboard/faq"
        onClick={onCloseMenu}
        className="flex items-center justify-center gap-1 py-1 rounded-lg hover:bg-button-secondary transition"
      >
        Faq <GrCircleQuestion />
      </Link>
      <button
        onClick={onCloseMenu}
        className="flex items-center justify-center gap-1 py-1 rounded-lg hover:bg-button-secondary transition"
      >
        Logout <TbLogout />
      </button>
    </div>
  );
}

export default ProfileDropdown;
