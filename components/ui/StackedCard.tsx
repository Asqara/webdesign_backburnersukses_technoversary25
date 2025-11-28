import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Types (adjust to your project)
type Author = { name: string; avatar?: string };
export type ArticleData = {
  slug: string;
  title: string;
  heroImage?: string | null;
  author: Author;
  readTime?: string;
};

// Small card view based on the user's BlogCard design (simplified)
const SmallBlogCard = ({ post }: { post: ArticleData }) => {
  const imageExists = !!post.heroImage;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 rounded-2xl"
      aria-label={`Buka artikel ${post.title}`}
      prefetch={false}
    >
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer h-full flex flex-col">
        <div className="h-96 mx-auto overflow-hidden p-4">
          <div className="w-full h-full rounded-xl overflow-hidden">
            {imageExists ? (
              <Image
                src={`/images/article-heroImage/${post.slug}.png`}
                alt={post.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-xl"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority={false}
              />
            ) : (
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
                <img
                  src={`/images/icons/default-user.svg`}
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

// Main stacked cards component
export default function StackedCards({ posts }: { posts: ArticleData[] }) {
  const count = posts.length;
  const [index, setIndex] = useState(0); // index of the top card
  const isAnimatingRef = useRef(false);
  const isInteractingRef = useRef(false);

  if (!posts || posts.length === 0) return null;

  // Get post by circular index
  const get = (i: number) => posts[(i + count) % count];

  // We'll render 3 visible cards (top, mid, back). Tweak as you like.
  const VISIBLE = Math.min(3, count);

  function goNext() {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setTimeout(() => {
      setIndex((p) => (p + 1) % count);
      isAnimatingRef.current = false;
    }, 220);
  }
  useEffect(() => {
    if (count <= 1) return;

    const interval = setInterval(() => {
      if (!isInteractingRef.current) {
        goNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [count]);

  const containerStyle = `relative w-[320px] h-[520px] max-w-full mx-auto`;

  return (
    <div className="flex flex-col items-center">
      <div className={containerStyle}>
        <AnimatePresence initial={false}>
          {Array.from({ length: VISIBLE }).map((_, pos) => {
            // pos = 0 -> top card, 1 -> middle, 2 -> back
            const cardIndex = (index + pos) % count;
            const post = get(cardIndex);
            const key = `${post.slug}-${cardIndex}`;

            // stacking offsets (you can tweak)
            const offsets = [0, 18, 36];
            const scales = [1, 0.97, 0.94];
            const zIndexes = [30, 20, 10];

            // only top (pos === 0) is draggable
            if (pos === 0) {
              return (
                <motion.div
                  key={key}
                  layout
                  initial={{ y: 0, scale: scales[pos], opacity: 1 }}
                  animate={{ y: 0, scale: scales[pos], opacity: 1 }}
                  exit={{ y: -600, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="y"
                  dragConstraints={{ top: -900, bottom: 0 }}
                  onDragStart={() => {
                    isInteractingRef.current = true;
                  }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    isInteractingRef.current = false;
                    const offsetY = info.offset.y;
                    const velocityY = info.velocity.y;
                    if (offsetY < -120 || velocityY < -700) {
                      goNext();
                    }
                  }}
                  style={{
                    position: "absolute",
                    top: offsets[pos],
                    left: 0,
                    right: 0,
                    margin: "auto",
                    zIndex: zIndexes[pos],
                    width: "320px",
                    height: "520px",
                  }}
                >
                  <SmallBlogCard post={post} />
                </motion.div>
              );
            }

            // non-draggable cards
            return (
              <motion.div
                key={key}
                layout
                initial={{
                  y: offsets[pos] + 12,
                  scale: scales[pos],
                  opacity: 1,
                }}
                animate={{ y: offsets[pos], scale: scales[pos], opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  position: "absolute",
                  top: offsets[pos],
                  left: 0,
                  right: 0,
                  margin: "auto",
                  zIndex: zIndexes[pos],
                  width: "320px",
                  height: "520px",
                }}
              >
                <SmallBlogCard post={post} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
