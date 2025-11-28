import { motion } from "framer-motion";

const BlogCardSkeleton = () => (
  <motion.div
    layout
    initial={{ opacity: 0.85, scale: 0.995 }}
    animate={{ opacity: [0.85, 1, 0.85], scale: [0.995, 1.01, 0.995] }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-white"
    style={{ minHeight: 320 }}
  >
    {/* Image placeholder */}
    <div className="h-[200px] w-full bg-gray-100" />

    {/* Content placeholder */}
    <div className="p-5">
      {/* Title */}
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
      {/* Subtitle */}
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-6 animate-pulse" />

      {/* Author + Read time */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
      </div>
    </div>
  </motion.div>
);

export default BlogCardSkeleton;
