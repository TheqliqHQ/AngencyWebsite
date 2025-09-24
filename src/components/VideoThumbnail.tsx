// src/components/VideoThumbnail.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import VideoEmbed from './VideoEmbed';

type Props = {
  videoId: string;
  title?: string;
  /** Optional custom thumbnail (otherwise we use YouTube maxres) */
  thumbnailUrl?: string;
  /** Optional extra classes on the card */
  className?: string;
};

export default function VideoThumbnail({
  videoId,
  title = 'Theqliq — video',
  thumbnailUrl,
  className = '',
}: Props) {
  const [open, setOpen] = useState(false);

  // Fallback to YouTube-generated thumbnail
  const thumb =
    thumbnailUrl ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <div
        className={`relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#0E1214] ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,.25)] ${className}`}
      >
        {/* Thumbnail image */}
        <Image
          src={thumb}
          alt={title}
          fill
          className="object-cover opacity-85"
          priority
        />

        {/* gradient tint */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />

        {/* Play button */}
        <button
          aria-label="Play video"
          onClick={() => setOpen(true)}
          className="absolute inset-0 grid place-content-center group"
        >
          <span className="grid size-16 place-items-center rounded-full bg-white/95 transition group-hover:bg-white shadow-xl">
            <Play className="size-7 translate-x-0.5 text-black" />
          </span>
        </button>
      </div>

      {/* Lightbox modal */}
      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-5xl aspect-video overflow-hidden rounded-xl bg-black ring-1 ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoEmbed videoId={videoId} title={title} autoplay />
          </div>
        </div>
      )}
    </>
  );
}
