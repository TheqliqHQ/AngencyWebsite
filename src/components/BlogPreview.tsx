// src/components/BlogPreview.tsx
import Container from "./Container";
import Badge from "./Badge";
import Link, { type LinkProps } from "next/link";
import Image from "next/image";

/** Coerce a string/URL to whatever `next/link` expects for `href` */
function asHref(v: string | URL): LinkProps["href"] {
  return v as unknown as LinkProps["href"];
}

type Post = {
  url: string;            // keep your existing data shape
  title: string;
  description: string;
  tags: string[];
  img: string;            // remote Unsplash URLs are fine (see note below)
};

const posts: Post[] = [
  {
    url: "/blog/why-brands-fail",
    title: "Why Most Brands Fail Online (And How Structure Fixes It)",
    description:
      "Clarity and consistency beat guesswork — here’s how structure changes growth.",
    tags: ["Brand Strategy", "Growth"],
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    url: "/blog/power-of-storytelling",
    title: "The Power of Storytelling: How to Turn Content Into Customers",
    description: "Content that builds trust, not noise.",
    tags: ["Content", "Marketing"],
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    url: "/blog/clarity-currency",
    title: "Why Clarity Is the New Currency in Marketing",
    description: "Confused brands don’t grow. Clarity wins.",
    tags: ["Clarity", "Marketing"],
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-cloud">
      <Container>
        <div className="text-center">
          <Badge>BLOG</Badge>
        </div>

        <h2 className="mt-6 text-center text-3xl md:text-4xl font-semibold heading-display">
          Insights on branding, marketing, and growth
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Link
              href={asHref(p.url)}
              key={p.url}
              className="block rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm"
            >
              <div className="aspect-[4/3] bg-black/80 relative">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover opacity-90"
                  sizes="(min-width: 1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  priority={i === 0}
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm opacity-70 mt-1">{p.description}</p>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tags.slice(0, 2).map((t) => (
                    <span key={t} className="pill text-xs bg-black/5">
                      {t}
                    </span>
                  ))}
                  <span className="pill text-xs bg-black/5">5 min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={asHref("/blog")}
            className="pill inline-block bg-white border border-black/10"
          >
            View all
          </Link>
        </div>
      </Container>
    </section>
  );
}
