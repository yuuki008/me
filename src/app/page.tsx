"use client";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xl mx-auto gap-4">
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
            こんにちは。福岡でエンジニアをしています。
            <br />
            データ基盤とか Web サービスを作って運用する仕事をしてます。
            <br />
            <br />
            体を動かすのが好きで、ランニングや登山、トレーニング、ヨガなんかをよくやっています。
            <br />
            シンプルで心地よいものに惹かれます。
            <br />
            <br />
            ブログは<Link className="text-blue-500" href="/blog">こちら</Link>からどうぞ。
          </div>
        </div>
      </div>
    </div>
  );
}
