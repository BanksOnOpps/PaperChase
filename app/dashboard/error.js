"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error);
  // }, [error]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-brand-primary text-brand-secondary p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
        <p className="text-sm mb-4">{error.message}</p>
        <button
          className="px-4 py-2 bg-button-primary rounded-lg hover:bg-button-secondary transition"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
