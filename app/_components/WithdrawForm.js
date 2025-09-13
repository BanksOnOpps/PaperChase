"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RiCashLine } from "react-icons/ri";

function WithdrawForm() {
  const formMethods = useForm({
    defaultValues: {
      amount: "",
      accountNumber: "",
      bank: "",
    },
    shouldUnregister: true,
  });

  const [presetAmount, setPresetAmount] = useState(null);

  const presetAmounts = [500, 1000, 2000, 5000, 10000, 20000];
  const MIN_WITHDRAW = 500;
  const balance = 100000;

  const banks = [
    "Access Bank",
    "GTBank",
    "Zenith Bank",
    "UBA",
    "First Bank",
    "Fidelity Bank",
    "Opay",
    "Palmpay",
    // add more as needed
  ];

  function onSubmit(data) {
    if (!data.amount || data.amount < MIN_WITHDRAW) {
      formMethods.setError("amount", {
        type: "manual",
        message: `Minimum withdrawal is ₦${MIN_WITHDRAW}`,
      });
      return;
    }
    if (data.amount > balance) {
      formMethods.setError("amount", {
        type: "manual",
        message: "Insufficient balance",
      });
      return;
    }
    if (!data.accountNumber) {
      formMethods.setError("accountNumber", {
        type: "manual",
        message: "Account number is required",
      });
      return;
    }
    if (!data.bank) {
      formMethods.setError("bank", {
        type: "manual",
        message: "Please select a bank",
      });
      return;
    }

    console.log("Withdrawal request:", data);
    // PAYSTACK API HERE
    formMethods.reset();
    setPresetAmount(null);
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Withdraw</h2>
            <p className="text-sm sm:text-base text-brand-secondary">
              Withdraw funds from your wallet. <br />
              Minimum withdrawal amount is{" "}
              <span className="font-semibold text-accent-primary">
                ₦{MIN_WITHDRAW}
              </span>
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
              placeholder={`Enter amount (min ₦${MIN_WITHDRAW})`}
              {...formMethods.register("amount", {
                required: "Amount is required",
                valueAsNumber: true,
                validate: (val) =>
                  (val && val >= MIN_WITHDRAW) ||
                  `Minimum withdrawal is ₦${MIN_WITHDRAW}`,
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

          {/* ACCOUNT NUMBER */}
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg">
              Account Number
            </label>
            <input
              type="number"
              inputMode="numeric"
              placeholder="Enter account number"
              {...formMethods.register("accountNumber", {
                required: "Account number is required",
                valueAsNumber: true,
                pattern: {
                  value: /^\d{10}$/,
                  message: "Account number must be 10 digits",
                },
              })}
              className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-accent-primary appearance-none"
            />
            {formMethods.formState.errors.accountNumber && (
              <p className="text-error-primary text-sm mt-1">
                {formMethods.formState.errors.accountNumber.message}
              </p>
            )}
          </div>

          {/* BANK SELECT */}
          <div>
            <label className="block mb-1 font-medium text-base sm:text-lg">
              Select Bank
            </label>
            <select
              {...formMethods.register("bank", {
                required: "Please select a bank",
              })}
              className="w-full p-3 border rounded-lg ring-2 text-sm sm:text-base
                focus:outline-none focus:ring-2 focus:ring-accent-primary appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Choose a bank
              </option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
            {formMethods.formState.errors.bank && (
              <p className="text-error-primary text-sm mt-1">
                {formMethods.formState.errors.bank.message}
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-button-primary font-semibold py-2 sm:py-3 
              text-base sm:text-lg rounded-lg hover:bg-button-secondary transition"
          >
            <span className="flex items-center justify-center gap-1">
              Withdraw <RiCashLine />
            </span>
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default WithdrawForm;
