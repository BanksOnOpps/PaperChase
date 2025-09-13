"use client";
import { FormProvider, useForm } from "react-hook-form";
import { MdBrowserUpdated } from "react-icons/md";

function ProfileUpdateForm() {
  const formMethods = useForm({
    defaultValues: {
      username: "",
      email: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    shouldUnregister: true,
  });

  function update(data) {
    // UPDATE LOGIC
    console.log("Update data:", data);
  }

  function onSubmit(data) {
    update(data);
  }

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="w-full max-w-md bg-brand-primary rounded-lg space-y-4 p-4 sm:p-6 mx-2"
      >
        {/* USERNAME SECTION */}
        <div>
          <label className="block mb-1 font-medium text-base sm:text-lg">
            Username
          </label>
          <input
            disabled
            type="text"
            placeholder="e.g. chinedu_91"
            {...formMethods.register("username", {
              required: "Username is required",
            })}
            className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
          />
        </div>

        {/* EMAIL SECTION */}
        <div>
          <label className="block mb-1 font-medium text-base sm:text-lg">
            Email
          </label>
          <input
            disabled
            type="email"
            placeholder="e.g. chinedu.okafor@gmail.com"
            {...formMethods.register("email", {
              required: "Email address is required",
            })}
            className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
          />
        </div>

        {/* NEW PASSWORD SECTION */}
        <div>
          <label className="block mb-1 font-medium text-base sm:text-lg">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password (min. 8 characters)"
            {...formMethods.register("newPassword", {
              required: "New Password is required",
              minLength: {
                value: 8,
                message: "New Password must be at least 8 characters long",
              },
            })}
            className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
          />
          {formMethods.formState.errors.newPassword && (
            <p className="text-error-primary text-sm mt-1">
              {formMethods.formState.errors.newPassword.message}
            </p>
          )}
        </div>

        {/* CONFIRM NEW PASSWORD SECTION */}
        <div>
          <label className="block mb-1 font-medium text-base sm:text-lg">
            Confirm new password
          </label>
          <input
            type="password"
            placeholder="Confirm password (min. 8 characters)
"
            {...formMethods.register("confirmNewPassword", {
              required: "Confirm new password is required",
              validate: (value) =>
                value === formMethods.getValues("newPassword") ||
                "Passwords do not match",
            })}
            className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
          />
          {formMethods.formState.errors.confirmNewPassword && (
            <p className="text-error-primary text-sm mt-1">
              {formMethods.formState.errors.confirmNewPassword.message}
            </p>
          )}
        </div>

        {/* BUTTON SECTION */}
        <button
          type="submit"
          className="w-full bg-button-primary font-semibold py-2 sm:py-3 
             text-base sm:text-lg rounded-lg hover:bg-button-secondary transition"
        >
          <span className="flex items-center justify-center gap-1">
            Update <MdBrowserUpdated />
          </span>
        </button>
      </form>
    </FormProvider>
  );
}

export default ProfileUpdateForm;
