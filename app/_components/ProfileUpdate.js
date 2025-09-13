import ProfileUpdateForm from "./auth/ProfileUpdateForm";

function ProfileUpdate() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto text-center mb-8 p-6 rounded-lg bg-update-profile text-white shadow-lg">
        <div className="flex flex-col items-center space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold text-center">
            Level Up Your Identity 🔐
          </h1>
          <p className="text-base opacity-80 max-w-md">
            Update your password, protect your access, and keep playing safe.{" "}
            <span className="font-semibold">Secure your jackpot identity</span>
          </p>
        </div>
      </div>
      <ProfileUpdateForm />
    </div>
  );
}

export default ProfileUpdate;
