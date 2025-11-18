"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

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

          <div className="mt-2 text-sm">
            福岡でデータ基盤と Web サービスの開発・運用をしているエンジニア。
            <br />
            ランニング、登山、トレーニング、読書、ヨガが好き。シンプルで心地よいものが好き。
            <br />
            <br />
          </div>
          <Button asChild variant="secondary">
            <Link href="/blog">
              <BookOpen />
              ブログを読む
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
