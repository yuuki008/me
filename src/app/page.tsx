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
          src="/childhood02.jpg"
          alt="profile"
          width={1000}
          height={1000}
        />
        <div className="sm:py-6">
          <div className="text-4xl font-bold tracking-wide">能村 優希</div>

          <div className="mt-2 mb-4 text-sm">
            福岡でデータ基盤と Web サービスの開発・運用をしているエンジニア。
            <br />
            <Link href="/blog?tag=ランニング">ランニング</Link>、
            <Link href="/blog?tag=登山">登山</Link>、
            <Link href="/blog?tag=トレーニング">トレーニング</Link>、
            <Link href="/blog?tag=読書">読書</Link>、
            <Link href="/blog?tag=ヨガ">ヨガ</Link>
            が好き。
            <br />
            シンプルで心地よいものが好き。
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
