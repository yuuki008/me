"use client";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  images: {
    url: string;
    caption: string;
  }[];
  className?: string;
};

export default function CustomCarousel({ images, className }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const count = images.length;
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const centerThumbnail = (index: number) => {
    const container = thumbnailsContainerRef.current;
    const btn = thumbnailRefs.current[index];
    if (!container || !btn) return;

    const containerWidth = container.clientWidth;
    const targetLeft = btn.offsetLeft - (containerWidth - btn.clientWidth) / 2;
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const initialIndex = api.selectedScrollSnap();
    setCurrent(initialIndex + 1);
    // 初期表示時にもサムネイルを中央に寄せる
    centerThumbnail(initialIndex);

    api.on("select", () => {
      const idx = api.selectedScrollSnap();
      setCurrent(idx + 1);
      centerThumbnail(idx);
    });
  }, [api]);

  if (count === 0) return null;

  return (
    <div className={className}>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={image.url}
                  alt={image.caption}
                  width={10000}
                  height={10000}
                  priority={index === 0}
                  loading="eager"
                  className="mx-auto object-contain max-h-[500px]"
                />
                <div className="text-sm text-gray-600 italic text-center mt-1">
                  {image.caption}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {count > 1 && (
        <div
          ref={thumbnailsContainerRef}
          className="mt-1 flex items-center gap-2 overflow-x-auto scrollbar-hide h-10 px-2"
        >
          {images.map((image, index) => {
            const isSelected = index + 1 === current;
            return (
              <button
                key={index}
                type="button"
                aria-label={`Image ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }}
                className={cn(
                  "cursor-pointer relative flex-shrink-0 transition-all duration-300",
                  isSelected ? "w-8 h-8" : "w-6 h-6 opacity-60"
                )}
              >
                <Image
                  src={image.url}
                  alt={image.caption}
                  width={10000}
                  height={10000}
                  className="object-cover w-full h-full"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
