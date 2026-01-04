import { WaitlistForm } from "@/components/ui";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const LeftContent = () => {
  return (
    <motion.div
      className="flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* AI Badge */}
      <motion.div
        className="border-primary-500/30 bg-primary-500/10 mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
        variants={itemVariants}
      >
        <span className="relative flex h-2 w-2">
          <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
          <span className="bg-primary-500 relative inline-flex h-2 w-2 rounded-full" />
        </span>
        <span className="text-primary-200 text-sm font-medium">
          Early Access Now Available
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants}>
        <h1 className="mb-6 text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-6xl">
          Vet-Grade Health <br />
          <span className="text-primary-400">Insights in Your Pocket</span>
        </h1>
        <h2 className="from-primary-300 to-primary-600 mb-6 bg-linear-to-r bg-clip-text text-3xl text-transparent">
          Is your pet okay? <br />
          <span className="text-2xl text-gray-300">
            Get instant answers and peace of mind.
          </span>
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mb-8 max-w-lg text-base text-gray-400"
        variants={itemVariants}
      >
        Track your pet&apos;s weight, spot symptoms early, and stay on top of
        their health — all in one app.
      </motion.p>

      {/* Waitlist Form */}
      <motion.div variants={itemVariants} className="w-full">
        <WaitlistForm />
      </motion.div>
    </motion.div>
  );
};

export { LeftContent };
