import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto py-10">
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
      <div className="mt-10"></div>
    </div>
  );
}
