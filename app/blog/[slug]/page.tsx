// app/blog/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MainContainer from "@/components/ui/MainContainer";
import { DUMMY_ARTICLES } from "@/data/dummyBlog";

/* ---------- generateStaticParams (SSG) ---------- */
export async function generateStaticParams() {
  return DUMMY_ARTICLES.map((a) => ({ slug: a.slug }));
}

/* ---------- generateMetadata (params is a Promise here) ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = DUMMY_ARTICLES.find((a) => a.slug === slug) ?? null;

  if (!article) {
    return {
      title: "Rimba Kembali",
      description: "Artikel Rimba Kembali tentang lingkungan dan konservasi.",
    };
  }

  return {
    title: `${article.title} | Rimba Kembali`,
    description:
      article.content?.intro?.slice(0, 160) ??
      "Artikel Rimba Kembali tentang lingkungan dan konservasi.",
    openGraph: {
      title: article.title,
      description: article.content?.intro?.slice(0, 160) ?? undefined,
      images: article.heroImage ? [article.heroImage] : undefined,
    },
  };
}

/* ---------- Page (App Router) ----------
   params may be a Promise<{slug}> so await it safely here.
   ---------- */
export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // unwrap params safely
  const { slug } = await params;

  const article = DUMMY_ARTICLES.find((a) => a.slug === slug) ?? null;

  if (!article) return notFound();

  const { title, readTime, author, heroImage, content, createdAt } = article;

  const avatarSrc = author?.avatar ?? "/images/authors/default-avatar.png";
  const heroSrc = heroImage ?? "/images/blog/default-hero.jpg";

  return (
    <MainContainer className="min-h-screen bg-white">
      {/* Hero */}
      <header className="relative w-full">
        <div className="relative h-[360px] w-full">
          <Image
            src={heroSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              {readTime && <p className="text-sm mb-2">⏱ {readTime}</p>}
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
              <div className="flex items-center gap-3">
                <Image
                  src={avatarSrc}
                  alt={author?.name ?? "Author"}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-medium">{author?.name ?? "Penulis"}</div>
                  {createdAt && (
                    <time
                      dateTime={createdAt}
                      className="block text-xs text-white/80"
                    >
                      {new Date(createdAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-10">
        {content?.intro && (
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              {content.intro}
            </p>
          </div>
        )}

        {content?.sections?.map((section, i) => (
          <section key={i} className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {section.heading}
            </h2>

            {section.items && (
              <ol className="space-y-2 list-decimal list-inside text-gray-700">
                {section.items.map((it, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {it}
                  </li>
                ))}
              </ol>
            )}

            {section.paragraphs &&
              section.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 leading-relaxed text-justify mt-3"
                >
                  {p}
                </p>
              ))}
          </section>
        ))}

        {content?.image && (
          <div className="my-8">
            <div className="relative w-full" style={{ height: 500 }}>
              <Image
                src={content.image}
                alt={`${title} — image`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        )}

        {content?.conclusion && (
          <div className="prose prose-lg max-w-none mt-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              {content.conclusion}
            </p>
          </div>
        )}
      </article>
    </MainContainer>
  );
}
