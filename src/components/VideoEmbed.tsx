// src/components/VideoEmbed.tsx
type VideoEmbedProps = {
  /** YouTube ID only, e.g. "dQw4w9WgXcQ" */
  videoId: string;
  /** Visually hidden label for accessibility */
  title?: string;
};

/**
 * Responsive, accessible YouTube embed with a dark card background,
 * soft elevation, and safe z-index so it doesn't get hidden by other sections.
 */
export default function VideoEmbed({
  videoId,
  title = "Theqliq — video",
}: VideoEmbedProps) {
  return (
    <section
      aria-label="Video"
      className="relative z-10 my-24 md:my-28 lg:my-32"
    >
      {/* Big black panel */}
      <div className="relative mx-auto w-full max-w-[1200px] rounded-[28px] bg-[#0B0E0F] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)]">
        {/* subtle inner ring/glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/5" />

        {/* 16:9 responsive iframe */}
        <div className="relative overflow-hidden rounded-[28px]">
          <div className="aspect-[16/9]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
              title={title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
