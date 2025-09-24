// src/components/VideoEmbed.tsx
// Server component (no state); renders a responsive YouTube iframe.

type VideoEmbedProps = {
  /** YouTube video id, e.g. "dQw4w9WgXcQ" */
  videoId: string;
  /** Accessible title for the <iframe> */
  title?: string;
  /** Autoplay on mount (0/1). Defaults to false. */
  autoplay?: boolean;
  /** Start time in seconds */
  start?: number;
  /** Extra Tailwind classes for the outer wrapper */
  className?: string;
};

export default function VideoEmbed({
  videoId,
  title = 'Theqliq — video',
  autoplay = false,
  start = 0,
  className = '',
}: VideoEmbedProps) {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=${
    autoplay ? 1 : 0
  }&rel=0&modestbranding=1&playsinline=1&start=${start}`;

  return (
    <div className={`relative aspect-video ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full rounded-[28px] border-0"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
