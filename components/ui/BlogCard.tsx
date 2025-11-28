import { ArticleData } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }: { post: ArticleData }) {
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
}
