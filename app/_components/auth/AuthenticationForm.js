"use client";
import { FormProvider, useForm } from "react-hook-form";
import Logo from "../header/Logo";
import { useAuth } from "./context/AuthContext";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si";
import Link from "next/link";

function AuthenticationForm({ mode }) {
  const { signin, signup } = useAuth();

  const formMethods = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    shouldUnregister: true,
  });

  function onSubmit(data) {
    if (mode === "signin") {
      signin(data);
    } else {
      signup(data);
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 py-8 sm:py-12 overflow-y-auto">
      {/* FORM HEADER SECTION */}

      <div className="flex flex-col gap-2 items-center mb-2">
        <Logo />
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">
          {mode === "signin" ? "Welcome back" : "Create account"}
        </h1>
      </div>

      {/* FORM SECTION */}
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
              type="text"
              placeholder="e.g. chinedu_91"
              {...formMethods.register("username", {
                required: "Username is required",
              })}
              className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
            {formMethods.formState.errors.username && (
              <p className="text-error-primary text-sm mt-1">
                {formMethods.formState.errors.username.message}
              </p>
            )}
          </div>

          {/* EMAIL SECTION */}
          {mode === "signup" && (
            <div>
              <label className="block mb-1 font-medium text-base sm:text-lg">
                Email
              </label>
              <input
                type="email"
                placeholder="e.g. chinedu.okafor@gmail.com"
                {...formMethods.register("email", {
                  required: "Email address is required",
                })}
                className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
              {formMethods.formState.errors.email && (
                <p className="text-error-primary text-sm mt-1">
                  {formMethods.formState.errors.email.message}
                </p>
              )}
            </div>
          )}

          {/* PASSWORD SECTION */}
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password (min. 8 characters)"
              {...formMethods.register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
            />
            {formMethods.formState.errors.password && (
              <p className="text-error-primary text-sm mt-1">
                {formMethods.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD SECTION */}
          {mode === "signup" && (
            <div>
              <label className="block mb-1 font-medium text-base sm:text-lg">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="Confirm password (min. 8 characters)
"
                {...formMethods.register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === formMethods.getValues("password") ||
                    "Passwords do not match",
                })}
                className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
             focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
              {formMethods.formState.errors.confirmPassword && (
                <p className="text-error-primary text-sm mt-1">
                  {formMethods.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          {/* CHECKBOX SECTION */}
          {mode === "signup" && (
            <div className="flex flex-col gap-1 mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  {...formMethods.register("agree", {
                    required: "You must accept the terms",
                  })}
                  className="h-5 w-5 cursor-pointer accent-accent-primary focus:ring-accent-primary"
                />
                <label
                  htmlFor="agree"
                  className="text-sm cursor-pointer select-none"
                >
                  I accept the Terms and Conditions
                </label>
              </div>

              {formMethods.formState.errors.agree && (
                <p className="text-error-primary text-sm">
                  {formMethods.formState.errors.agree.message}
                </p>
              )}
            </div>
          )}

          {/* BUTTON SECTION */}
          <button
            type="submit"
            className="w-full bg-button-primary font-semibold py-2 sm:py-3 
             text-base sm:text-lg rounded-lg hover:bg-button-secondary transition"
          >
            {mode === "signin" ? (
              <span className="flex items-center justify-center gap-1">
                Login <BsArrowRightCircleFill />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1">
                Signup <SiGnuprivacyguard />
              </span>
            )}
          </button>

          <div className="text-center">
            {mode === "signin" ? (
              <>
                <span className="text-brand-secondary text-sm">
                  {" "}
                  Don&apos;t have an account?{" "}
                </span>
                <Link
                  href="/account/signup"
                  className="text-accent-primary underline"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <span className="text-brand-secondary text-sm">
                  Already have an account?{" "}
                </span>
                <Link
                  href="/account/signin"
                  className="text-accent-primary underline"
                >
                  Login here
                </Link>
              </>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AuthenticationForm;
