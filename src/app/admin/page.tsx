"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    window.location.href = "https://www.sanity.io/manage/personal/project/ooOAlnt5I";
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white font-montserrat">
      <div className="text-center">
        <h1 className="font-playfair text-4xl mb-4">ELAPACK CMS</h1>
        <p className="text-brand-grey text-sm mb-8 uppercase tracking-widest">Redirecting to content management...</p>
        <div className="w-8 h-8 border-2 border-brand-sage border-t-transparent rounded-full animate-spin mx-auto mb-8" />
        <p className="text-brand-grey-mid text-xs">
          Not redirected?{" "}
          <a
            href="https://www.sanity.io/manage/personal/project/ooOAlnt5I"
            className="text-brand-sage underline"
          >
            Click here
          </a>
        </p>
      </div>
    </div>
  );
}
