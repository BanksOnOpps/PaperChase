import { MdOutlineNotifications } from "react-icons/md";
import ProfileMenu from "../ProfileMenu";
import Balance from "../Balance";

function TopBar({ showNotifications }) {
  return (
    <div className="flex justify-between items-center bg-accent-primary p-3">
      <div title="Profile" className="flex items-center gap-3">
        <ProfileMenu />
        <span className="font-bold text-2xl">Dashboard</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-white/10 px-4 py-2 rounded-full flex items-center">
          <span className="text-lg font-semibold">₦</span>
          <Balance />
        </div>
        <button onClick={showNotifications} title="Notifications">
          <MdOutlineNotifications className="h-7 w-7 text-brand-secondary flex-shrink-0" />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
