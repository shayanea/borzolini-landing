import { Android, iOS } from "@/assets/icons";

import { Button } from "@/components/ui/button/button";
import Image from "next/image";
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
      {/* Badge */}
      <motion.div
        className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-4 py-2 backdrop-blur-sm"
        variants={itemVariants}
      >
        <span className="h-2 w-2 rounded-full bg-purple-500" />
        <span className="text-sm font-medium text-purple-300">
          Now available on iOS & Android
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div variants={itemVariants}>
        <h1 className="mb-6 text-6xl leading-tight font-bold text-white sm:text-6xl lg:text-6xl">
          Everything you need for your pet.{" "}
          <span className="bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            In one place.
          </span>
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        className="mb-8 max-w-lg text-xl text-gray-400"
        variants={itemVariants}
      >
        From finding your new companion to daily care, health tracking, and
        emergency support — we&apos;re with you every step.
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
