import { motion, Variants } from "framer-motion";
import Image from "next/image";
const treeVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.7, rotate: -15 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15,
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  }),
  animateLoop: {
    y: [0, -15, 0],
    rotate: [0, 12, -12, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 15,
      delay: 0.2,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.8,
    },
  },
};

const leafVariants: Variants = {
  initial: (i: number) => ({
    x: Math.random() * 200 - 100,
    y: -50,
    rotate: Math.random() * 360,
    opacity: 0.6,
  }),
  fall: (i: number) => ({
    y: 800,
    x: Math.random() * 150 - 75,
    rotate: Math.random() * 720,
    opacity: 0,
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "linear",
    },
  }),
};

const dummyTrees = Array.from({ length: 7 }, (_, i) => i);
const leaves = Array.from({ length: 8 }, (_, i) => i);

export default function RunningTreeLoaderComplex() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 overflow-hidden relative px-4">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-green-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 md:w-80 md:h-80 bg-emerald-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Falling Leaves */}
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={leafVariants}
          initial="initial"
          animate="fall"
          className="absolute text-2xl md:text-3xl pointer-events-none"
          style={{ left: `${10 + i * 12}%` }}
        >
          {i % 3 === 0 ? "🍃" : i % 3 === 1 ? "🌿" : "🍀"}
        </motion.div>
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center space-y-8 md:space-y-12">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate={["visible", "pulse"]}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 bg-green-400/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <div className="relative bg-transparent rounded-full shadow-2xl">
            <Image src="/logo.svg" alt="main-logo" width={100} height={100} />
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-2 md:space-y-3 px-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 bg-clip-text text-transparent leading-tight">
            Welcome to Website
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
            Rimba Kembali
          </h2>
        </motion.div>

        {/* Animated Trees */}
        <div className="flex items-end space-x-2 md:space-x-4">
          {dummyTrees.map((tree, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={treeVariants}
              initial="hidden"
              animate={["visible", "animateLoop"]}
              className="relative"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-green-400/40 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />

              {/* Tree */}
              <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-xl flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                🌳
              </div>

              {/* Ground Line */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-green-500 to-transparent"
                initial={{ height: 0 }}
                animate={{ height: 32 }}
                transition={{
                  delay: i * 0.15 + 0.5,
                  duration: 0.6,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1.2,
          }}
          className="text-green-700 font-semibold text-base md:text-lg"
        >
          Loading...
        </motion.div>
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-green-400 rounded-full opacity-40"
          animate={{
            x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}
