// src/components/Services.tsx
import Container from "./Container";
import Badge from "./Badge";

type Tone = "brand" | "light" | "dark";

export type Service = {
  key: string;
  title: string;
  desc: string;
  tone: Tone;
};

const services = [
  {
    key: "seo",
    title: "Search engine optimization",
    desc:
      "Improve visibility and organic traffic with technical SEO, on-page optimizations, and content that ranks.",
    tone: "light",
  },
  {
    key: "smm",
    title: "Social Media Marketing",
    desc:
      "Grow your brand with consistent content, community engagement, and performance tracking.",
    tone: "dark",
  },
  {
    key: "ppc",
    title: "Pay-per-click Advertising",
    desc:
      "Acquire users faster with high-intent ads and clear optimization loops across Google & social.",
    tone: "brand",
  },
  {
    key: "email",
    title: "Email Marketing",
    desc:
      "Lifecycle campaigns and newsletters that convert, retain, and activate your audience.",
    tone: "light",
  },
  {
    key: "content",
    title: "Content Creation",
    desc:
      "High-quality landing pages, blogs, and product stories that build trust and drive action.",
    tone: "brand",
  },
  {
    key: "analytics",
    title: "Analytics & Tracking",
    desc:
      "Set up clean measurement, dashboards, and attribution so growth decisions are data-driven.",
    tone: "dark",
  },
] as const satisfies readonly Service[];

// Tone → styling
const toneClasses: Record<Tone, string> = {
  brand: "bg-[var(--brand)] text-white",
  light: "bg-white text-[rgb(16,18,19)]",
  dark: "bg-[#0f1417] text-white",
};

function ServiceCard({ title, desc, tone }: Service) {
  return (
    <div
      className={`rounded-3xl p-6 border border-black/5 shadow-sm ${toneClasses[tone]}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm opacity-80">{desc}</p>
      <div className="mt-3">
        <span className="pill bg-white/10 border-black/10">Learn more</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cloud">
      <Container>
        <div className="text-center">
          <Badge>Services</Badge>
        </div>

        <h2 className="mt-6 text-center text-3xl md:text-4xl font-semibold heading-display">
          What we do
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            // Avoid duplicate key prop: remove it from the spread
            const { key, ...rest } = svc;
            return <ServiceCard key={key} {...(rest as Omit<Service, "key">)} />;
          })}
        </div>
      </Container>
    </section>
  );
}
