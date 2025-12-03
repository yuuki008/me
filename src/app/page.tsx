"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 max-w-lg mx-auto gap-4">
        <Image
          className="rounded-full w-[120px] h-[120px] object-cover"
          src="/childhood02.jpg"
          alt="profile"
          width={1000}
          height={1000}
        />
        <div className="mt-6">
          <div className="text-4xl font-bold tracking-wide">能村 優希</div>

          <div className="mt-4 text-sm">
            こんにちは。データのお片付けやプログラムを書くお仕事をしています。体をハードに動かしたくて、ランニングや登山、筋力トレーニング、ヨガなんかをやっています。
            <br />
            <br />
            シンプルで心地がよいもの好きです。
            <br />
            ブログは<Link className="text-blue-500" href="/blog">こちら</Link>からどうぞ。
          </div>
        </div>
      </div>
    </div>
  );
}
