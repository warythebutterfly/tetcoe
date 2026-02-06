"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ActivityCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Fade(), autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  /* Sync dots */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  /* Keyboard + lifecycle */
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") emblaApi.scrollNext();
      if (e.key === "ArrowLeft") emblaApi.scrollPrev();
      if (e.key === "Escape") setModalOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [emblaApi, onSelect]);

  /* Pause autoplay when modal opens */
  useEffect(() => {
    if (!autoplay.current) return;

    if (modalOpen) {
      autoplay.current.stop();
    } else {
      autoplay.current.reset();
    }
  }, [modalOpen]);

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        <div
          ref={emblaRef}
          className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100"
        >
          <div className="flex">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setModalOpen(true)}
                className="relative flex-[0_0_100%] aspect-[16/9] focus:outline-none"
                aria-label={`Open gallery for ${title}`}
              >
                <Image
                  src={img}
                  alt={`${title} image ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white transition"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        <div className="mt-3 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 w-1.5 rounded-full transition ${
                i === selectedIndex
                  ? "bg-[#012147]"
                  : "bg-neutral-300"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal Gallery */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-sm"
            >
              Close ✕
            </button>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-800"
                >
                  <Image
                    src={img}
                    alt={`${title} gallery image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
