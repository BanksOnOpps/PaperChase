"use client";
import { RiContactsLine } from "react-icons/ri";
import Modal from "./modal/context/ModalContext";
import ProfileDropdown from "./ProfileDropdown";
import Menu from "./modal/context/MenuContext";

function ProfileMenu() {
  return (
    <Menu>
      {/* CLICK TO TRIGGER */}
      <Menu.Open opens="profile-menu">
        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
          <RiContactsLine className="h-6 w-6 text-brand-secondary" />
        </button>
      </Menu.Open>

      {/* DROP DOWN WINDOW */}
      <Menu.Window name="profile-menu">
        <ProfileDropdown />
      </Menu.Window>
    </Menu>
  );
}

export default ProfileMenu;
