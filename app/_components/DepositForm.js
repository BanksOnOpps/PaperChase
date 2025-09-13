"use client";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { LuWallet } from "react-icons/lu";

function DepositForm() {
  const formMethods = useForm({
    defaultValues: {
      amount: "",
    },
    shouldUnregister: true,
  });

  const [presetAmount, setPresetAmount] = useState(null);
  const presetAmounts = [500, 1000, 2000, 5000, 10000, 20000];

  function onSubmit(data) {
    if (!data.amount || data.amount < 500) {
      formMethods.setError("amount", {
        type: "manual",
        message: "Minimum deposit is ₦500",
      });
      return;
    }

    console.log("Deposit request:", data);
    // PAYSTACK API HERE
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)]">
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="w-full max-w-md bg-brand-primary rounded-lg space-y-4 p-4 sm:p-6 mx-2"
        >
          {/* HEADER */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Deposit</h2>
            <p className="text-sm sm:text-base text-brand-secondary">
              Boost your wallet and join the fun! <br />
              Deposit a minimum of{" "}
              <span className="font-semibold text-accent-primary">
                ₦500
              </span>{" "}
              and get ready to play.
            </p>
          </div>

          {/* AMOUNT INPUT */}
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg">
              Amount (₦)
            </label>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Enter amount (min ₦500)"
              {...formMethods.register("amount", {
                required: "Amount is required",
                valueAsNumber: true,
                validate: (val) =>
                  (val && val >= 500) || "Minimum deposit is ₦500",
                onChange: () => setPresetAmount(null),
              })}
              className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-accent-primary appearance-none"
            />
            {formMethods.formState.errors.amount && (
              <p className="text-error-primary text-sm mt-1">
                {formMethods.formState.errors.amount.message}
              </p>
            )}
          </div>

          {/* PRESET AMOUNTS */}
          <div className="grid grid-cols-3 gap-2">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  formMethods.setValue("amount", amt, { shouldValidate: true });
                  setPresetAmount(amt);
                }}
                className={`px-4 py-2 rounded-lg font-semibold border transition ${
                  presetAmount === amt
                    ? "bg-accent-primary text-brand-secondary"
                    : "bg-brand-secondary text-brand-primary hover:bg-brand-secondary/80"
                }`}
              >
                ₦{amt.toLocaleString()}
              </button>
            ))}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-button-primary font-semibold py-2 sm:py-3 
              text-base sm:text-lg rounded-lg hover:bg-button-secondary transition"
          >
            <span className="flex items-center justify-center gap-1">
              Deposit <LuWallet />
            </span>
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default DepositForm;
