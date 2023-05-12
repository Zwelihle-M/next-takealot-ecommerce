import { useRouter } from "next/router";
import React from "react";

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;
  return (
    <div className="sm:px-16 px-6 flex justify-center items-center pt-12">
      <div role="alert" className="xl:max-w-[1280px] w-full">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Access Denied
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          {message && <div className="mb-4 text-red-600">{message}</div>}
        </div>
      </div>
    </div>
  );
}
