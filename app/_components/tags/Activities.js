import { FaUserPlus } from "react-icons/fa6"; // Referral joined
import { MdManageAccounts } from "react-icons/md"; // Profile updated
import { RiLockPasswordLine } from "react-icons/ri"; // Changed password

function Activities() {
  const activities = [
    {
      id: "1",
      action: "Referral joined",
      date: "Aug 30, 2025, 10:45 AM",
      icon: <FaUserPlus className="text-deposit text-lg" />,
    },
    {
      id: "2",
      action: "Profile updated",
      date: "Aug 29, 2025, 5:22 PM",
      icon: <MdManageAccounts className="text-pending text-lg" />,
    },
    {
      id: "3",
      action: "Changed password",
      date: "Aug 28, 2025, 8:15 PM",
      icon: <RiLockPasswordLine className="text-withdrawal text-lg" />,
    },
  ];

  return (
    <div className="bg-white/10 p-4 rounded-lg shadow-lg">
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                {activity.icon}
                <p className="text-base font-semibold">{activity.action}</p>
              </div>
              <p className="text-xs text-white/50">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
