import { Android, iOS } from "@/assets/icons";

import { Button } from "@/components/ui/button/button";
import { motion } from "framer-motion";
import Image from "next/image";

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
      {/* Urgency Badge */}
      <motion.div
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 backdrop-blur-sm"
        variants={itemVariants}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        <span className="text-sm font-medium text-red-200">
          Emergency vet access 24/7
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants}>
        <h1 className="mb-6 text-5xl leading-tight font-bold text-white sm:text-6xl lg:text-6xl">
          &quot;Is your pet okay right now?&quot;{" "}
        </h1>
        <h2 className="from-primary-300 to-primary-600 mb-6 bg-linear-to-r bg-clip-text text-3xl text-transparent">
          Get AI-powered answers in 30 seconds — <br />
          before symptoms become emergencies.
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mb-8 max-w-lg text-base text-gray-400"
        variants={itemVariants}
      >
        British Shorthair owners trust Borzolini to detect kidney issues, dental
        problems, and respiratory concerns months before their vet visit.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
        variants={itemVariants}
      >
        <Button
          size="lg"
          variant="primary"
          className="flex items-center justify-center gap-2"
        >
          <Image src={iOS} alt="iOS" width={24} height={24} />
          Download for iOS
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="flex items-center justify-center gap-2"
        >
          <Image src={Android} alt="Android" width={24} height={24} />
          Download for Android
        </Button>
      </motion.div>
    </motion.div>
  );
};

export { LeftContent };
