"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-2xl mx-auto px-4 flex sm:gap-8 gap-4 sm:flex-row flex-col">
        <Image
          className="rounded-full w-[120px] h-[120px] object-cover border-4"
          src="/top/02.jpeg"
          alt="profile"
          width={1000}
          height={1000}
        />
        <div className="sm:py-6">
          <div className="text-4xl font-bold tracking-wide">能村 優希</div>
          <a
            href="https://github.com/yuuki008"
            className="text-sm font-semibold"
          >
            @yuuki008
          </a>

          <div className="mt-4 text-sm">
            福岡でデータ基盤と Web
            サービスの開発・運用をしているエンジニアです。
            <br />
            休日は、ランニングや登山、トレーニング、読書をして過ごすことが多いです。シンプルで無駄のないものが大好きで、そういうものを追求していたいなと思っています。
            <br />
            <br />
            最近ブログを書き始めました。
            <Link className="text-blue-500" href="/blog">
              こちら
            </Link>
            から気になる方は覗いてみてください。
          </div>
        </div>
      </div>
    </div>
  );
}
