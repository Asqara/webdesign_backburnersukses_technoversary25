"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { ArticleData } from "@/types/blog";
import { DUMMY_ARTICLES } from "@/data/dummyBlog";
import dynamic from "next/dynamic";
import StackedCards from "../ui/StackedCard";

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
const BlogCard = ({ post }: { post: ArticleData }) => {
  const imageExists = !!post.heroImage;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 rounded-2xl"
      aria-label={`Buka artikel ${post.title}`}
      prefetch={false}
    >
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer h-full flex flex-col">
        <div className="h-80 mx-auto overflow-hidden p-4">
          <div className="w-full h-full rounded-xl overflow-hidden">
            {imageExists ? (
              <Image
                src={post.heroImage as string}
                alt={post.title} // only show alt when there is an image
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-xl"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority={false}
              />
            ) : (
              // gradient placeholder (no visible alt text)
              <div
                role="img"
                aria-hidden="true"
                className="w-full h-full rounded-xl bg-gradient-to-br from-primary-500 to-primary-200"
              />
            )}
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {post.title}
          </h3>

          <div className="mt-auto flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
                {/* small avatar fallback */}
                <img
                  src={
                    post.author.avatar ?? "/images/authors/default-avatar.png"
                  }
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
              </div>
              <span className="font-medium">{post.author.name}</span>
            </div>

            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

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
