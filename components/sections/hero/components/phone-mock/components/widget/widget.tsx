import { motion } from "framer-motion";

const rightSlideVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

export const HealthCheckWidget = () => {
  return (
    <motion.div
      className="absolute top-40 left-20 z-20"
      variants={rightSlideVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#1f1f26] p-4 shadow-xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div>
          <p className="text-sm text-white">Health Check</p>
          <p className="text-sm font-semibold text-green-500">All clear</p>
        </div>
      </div>
    </motion.div>
  );
};

const leftSlideVariants = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};

export const ClinicWidget = () => {
  return (
    <motion.div
      className="absolute right-0 bottom-40 z-10"
      variants={leftSlideVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#1f1f26] p-4 shadow-xl">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9c5cf6]/20">
          <div className="h-3 w-3 rounded-full bg-[#9c5cf6]" />
        </div>
        <div>
          <p className="text-sm text-white">3 clinics nearby</p>
          <p className="text-sm font-semibold text-gray-200">Open now</p>
        </div>
      </div>
    </motion.div>
  );
};
