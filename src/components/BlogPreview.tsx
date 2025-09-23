import Container from "./Container";
import Badge from "./Badge";
import Link from "next/link";
import Image from "next/image";

type Post = { url: string; title: string; description: string; tags: string[]; img: string };

const posts: Post[] = [
  {
    url: "/blog/why-brands-fail",
    title: "Why Most Brands Fail Online (And How Structure Fixes It)",
    description: "Clarity and consistency beat guesswork — here’s how structure changes growth.",
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
        <div className="text-center"><Badge>BLOG</Badge></div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Insights on branding, marketing, and growth
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Link href={p.url} key={p.url} className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm block">
              <div className="aspect-[4/3] bg-black/80 relative">
                <Image src={p.img} alt="" fill className="object-cover opacity-90" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm opacity-70 mt-1">{p.description}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.tags.slice(0, 2).map(t => (
                    <span key={t} className="pill text-xs bg-black/5">{t}</span>
                  ))}
                  <span className="pill text-xs bg-black/5">5 min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/blog" className="pill inline-block bg-white border border-black/10">View all</Link>
        </div>
      </Container>
    </section>
  );
}
