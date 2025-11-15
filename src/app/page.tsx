"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

const images = [
  "/top/01.jpeg",
  "/top/02.jpeg",
  "/top/03.jpeg",
  "/top/04.jpeg",
  "/top/05.jpeg",
  "/top/06.JPG",
  "/top/07.JPG",
  "/top/08.JPG",
  "/top/09.PNG",
  "/top/10.JPG",
];

export default function Page() {
  return (
    <div className="py-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-5xl font-bold">能村 優希</div>

        <div className="mt-10">
          福岡でデータ基盤と Web サービスの開発・運用をしているエンジニアです。
          <br />
          仕事以外では、ランニングや登山、トレーニング、読書をして過ごすことが多いです。シンプルで無駄のないものが好きで、そういうものを追求していたいなと思っています。
          <br />
          <br />
          最近ブログを書き始めました。
          <Link className="text-blue-500" href="/blog">
            こちら
          </Link>
          から気になる方は覗いてみてください。
        </div>
      </div>
      <div className="mt-10">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              direction: "forward",
              speed: 0.8,
            }),
          ]}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem className="basis-1/3 max-w-[300px]" key={index}>
                <Image
                  src={image}
                  alt="top"
                  width={10000}
                  height={10000}
                  className="w-full h-full max-h-[300px] object-cover"
                  priority={index === 0}
                  loading="eager"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
