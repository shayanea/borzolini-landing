import * as motion from "framer-motion/client";

import type { ReactElement } from "react";
import { MockHeader } from "../mock-header/mock-header";
import { MockResult } from "../mock-result/mock-result";

export function PhoneMock(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative order-2 lg:order-1"
    >
      <div className="relative mx-auto max-w-[300px]">
        <div className="relative rounded-[2.5rem] border border-slate-800 bg-[#1f1f26] p-2.5 shadow-2xl shadow-black/50">
          <div className="relative aspect-9/19 w-full overflow-hidden rounded-4xl bg-[#17171c]">
            <div className="absolute top-0 left-1/2 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />

            <div className="flex h-full flex-col px-4 pt-12">
              <MockHeader />
              <MockResult />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
