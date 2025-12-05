"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 max-w-lg mx-auto gap-4">
        <div className="text-4xl font-bold tracking-wide">能村 優希</div>

        <div className="mt-4 text-sm">
          こんにちは。福岡でデータのお片付けやプログラムを書くお仕事をしています。
          <br />
          体をハードに動かすことが好きで、ランニングや登山、筋トレ、ヨガにハマっています。
          <br />
          <br />
          シンプルで心地がよいもの好きです。
          <br />
          ブログは<Link className="text-blue-500" href="/blog">こちら</Link>から。
        </div>
      </div>
    </div>
  );
}
