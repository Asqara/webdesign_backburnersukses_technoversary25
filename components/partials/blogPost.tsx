"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { ArticleData } from "@/types/blog";
import { DUMMY_ARTICLES } from "@/data/dummyBlog";
import dynamic from "next/dynamic";
import StackedCards from "../ui/StackedCard";
import BlogCard from "../ui/BlogCard";

/* ---------- Skeleton ---------- */
const BlogCardSkeleton = () => (
  <motion.div
    layout
    initial={{ opacity: 0.85, scale: 0.995 }}
    animate={{ opacity: [0.85, 1, 0.85], scale: [0.995, 1.01, 0.995] }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    className="bg-white rounded-[22px] shadow-[0_6px_28px_rgba(17,24,39,0.04)] overflow-hidden border border-white"
    style={{ minHeight: 320 }}
  >
    <div className="h-[200px] w-full bg-gray-100" />
    <div className="p-5">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-6" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <div className="h-4 bg-gray-200 rounded w-20" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-20" />
      </div>
    </div>
  </motion.div>
);

/* ---------- Card ---------- */

/* ---------- Main Component ---------- */
const StackedCardsNoSSR = dynamic(() => import("../ui/StackedCard"), {
  ssr: false,
});
export default function BlogKreatif() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<ArticleData[]>([]);

  useEffect(() => {
    // simulate loading
    const t = setTimeout(() => {
      setPosts(DUMMY_ARTICLES);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-b-4xl">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Blog Kreatif
        </h1>

        {/* ===== Mobile: StackedCards (visible on small screens only) ===== */}
        <div className="block md:hidden">
          {loading ? (
            // tampilkan skeleton mobile (bisa 1 atau beberapa)
            <div className="max-w-xs mx-auto">
              <BlogCardSkeleton />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Belum ada artikel.
            </div>
          ) : (
            <StackedCardsNoSSR posts={posts} />
          )}
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))
          ) : posts.length === 0 ? (
            <div className="col-span-full text-center py-20 text-gray-500">
              Belum ada artikel.
            </div>
          ) : (
            posts.map((post) => <BlogCard key={post.slug} post={post} />)
          )}
        </div>
      </div>
    </section>
  );
}
