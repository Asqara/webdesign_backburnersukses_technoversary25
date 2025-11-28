// app/kegiatan/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MainContainer from "@/components/ui/MainContainer";
import { DUMMY_ACTIVITIES } from "@/data/dummyActivities";
import VolunteerCTA from "./VolunteerCTA";

/* ---------- generateStaticParams (SSG) ---------- */
export async function generateStaticParams() {
  return DUMMY_ACTIVITIES.map((activity) => ({
    slug: activity.slug,
  }));
}

/* ---------- generateMetadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const activity = DUMMY_ACTIVITIES.find((a) => a.slug === slug) ?? null;

  if (!activity) {
    return {
      title: "Kegiatan Tidak Ditemukan | Rimba Kembali",
      description:
        "Detail kegiatan Rimba Kembali tentang aksi lingkungan dan konservasi.",
    };
  }

  return {
    title: `${activity.title} | Rimba Kembali`,
    description: activity.excerpt,
    openGraph: {
      title: activity.title,
      description: activity.excerpt,
      images: activity.imageUrl ? [activity.imageUrl] : undefined,
      type: "article",
    },
  };
}

/* ---------- Page Component ---------- */
export default async function ActivityDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = DUMMY_ACTIVITIES.find((a) => a.slug === slug) ?? null;

  if (!activity) return notFound();

  const { title, readTime, author, imageUrl, content, createdAt } = activity;

  const avatarSrc = author?.avatar ?? "/images/authors/default-avatar.png";
  const heroSrc = imageUrl ?? "/images/activities/default-hero.jpg";

  return (
    <MainContainer className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative w-full">
        <div className="relative h-[400px] w-full">
          <Image
            src={heroSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                {readTime && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    ⏱ {readTime}
                  </span>
                )}
                <span className="bg-slate-800/80 text-white px-3 py-1 rounded-full text-sm">
                  {formatDaysAgo(activity.daysAgo)}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {title}
              </h1>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white overflow-hidden">
                  <Image
                    src={avatarSrc}
                    alt={author?.name ?? "Author"}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-lg">
                    {author?.name ?? "Relawan Rimba Kembali"}
                  </div>
                  {createdAt && (
                    <time dateTime={createdAt} className="block text-white/90">
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
      <article className="max-w-4xl mx-auto px-6 py-12">
        {content?.intro && (
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed text-justify text-lg">
              {content.intro}
            </p>
          </div>
        )}

        {content?.sections?.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-green-600 pl-4">
              {section.heading}
            </h2>

            {section.items && (
              <ul className="space-y-3 mb-4">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {section.paragraphs &&
              section.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 leading-relaxed text-justify mb-4"
                >
                  {paragraph}
                </p>
              ))}
          </section>
        ))}

        {content?.image && (
          <div className="my-12">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src={content.image}
                alt={`${title} — dokumentasi kegiatan`}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              Dokumentasi kegiatan Rimba Kembali
            </p>
          </div>
        )}

        {content?.conclusion && (
          <div className="prose prose-lg max-w-none mt-8 p-6 bg-green-50 rounded-2xl border border-green-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Kesimpulan
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              {content.conclusion}
            </p>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <VolunteerCTA />
    </MainContainer>
  );
}

// Helper function untuk format days ago (sama dengan di halaman utama)
function formatDaysAgo(days?: number) {
  if (!days || days <= 0) return "hari ini";
  if (days === 1) return "1 hari lalu";
  return `${days} hari lalu`;
}
