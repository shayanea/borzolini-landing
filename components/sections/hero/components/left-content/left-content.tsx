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
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm"
        variants={itemVariants}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
        </span>
        <span className="text-sm font-medium text-purple-200">
          AI-Powered Health Insights
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants}>
        <h1 className="mb-6 text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-6xl">
          Proactive AI Pet Health <br />
          <span className="text-primary-400">Monitoring & Analysis</span>
        </h1>
        <h2 className="from-primary-300 to-primary-600 mb-6 bg-linear-to-r bg-clip-text text-3xl text-transparent">
          Is your pet okay right now? <br />
          <span className="text-2xl text-gray-300">
            Get instant health insights in seconds.
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
