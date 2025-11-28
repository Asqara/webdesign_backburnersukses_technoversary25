// app/blog/page.tsx
"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import MainContainer from "@/components/ui/MainContainer";
import BlogCard from "@/components/ui/BlogCard";
import BlogCardSkeleton from "@/components/ui/BlogCardSkeleton";
import { DUMMY_ARTICLES } from "@/data/dummyBlog";
import { ArticleData } from "@/types/blog";

const StackedCardsNoSSR = dynamic(() => import("@/components/ui/StackedCard"), {
  ssr: false,
});

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // filter artikel berdasarkan search query
  const posts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    return DUMMY_ARTICLES.filter(
      (article) =>
        article.title.toLowerCase().includes(lowerQuery) ||
        article.author.name.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return (
    <MainContainer className="px-4 md:px-16 py-8 md:mt-40 mt-10">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold">Blog Kreatif</h1>
        <p className="text-gray-600 mt-5 max-w-xl mx-auto">
          Blog kreatif berisi artikel singkat seputar lingkungan yang menyajikan
          edukasi, tips, dan inspirasi untuk menjaga alam.
        </p>
        <div className="my-8 relative w-60 h-60 md:w-96 md:h-96 mx-auto gap-4">
          <Image src="/images/blog-ilus.svg" alt="Ilustrasi-blog" fill />
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </header>

      <section className="grid mx-auto md:max-w-5xl gap-6">
        {/* Mobile: Stacked Cards */}
        <div className="block md:hidden mb-20">
          {loading ? (
            <div className="max-w-xs mx-auto">
              <BlogCardSkeleton />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Tidak ada artikel yang cocok.
            </div>
          ) : (
            <StackedCardsNoSSR posts={posts} />
          )}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))
          ) : posts.length === 0 ? (
            <div className="col-span-full text-center py-20 text-gray-500">
              Tidak ada artikel yang cocok.
            </div>
          ) : (
            posts.map((post: ArticleData) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow duration-300"
              >
                <BlogCard post={post} />
              </Link>
            ))
          )}
        </div>
      </section>
    </MainContainer>
  );
}
