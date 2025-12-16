import { Android, iOS } from "@/assets/icons";

import Image from "next/image";

export const DownloadButtons = () => {
  return (
    <>
      {/* iOS Button */}
      <button className="hidden items-center gap-2 rounded-lg border border-white px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-gray-900 sm:flex">
        <Image src={iOS} alt="iOS" width={20} height={20} />
        iOS
      </button>

      {/* Android Button */}
      <button className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-100 sm:flex">
        <Image
          src={Android}
          alt="Android"
          width={20}
          height={20}
          className="invert"
        />
        Android
      </button>
    </>
  );
};
