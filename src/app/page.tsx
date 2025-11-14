import CustomCarousel from "@/components/custom-carousel";

const dict = {
  welcome: "ようこそ",
  name: "能村優希です",
  greeting:
    "こんにちは！はじめまして。福岡在住のソフトウェアエンジニア、のむです。",
  introduction:
    "このサイトを通じて、仕事から趣味まで、私について少しずつお伝えできればと思っています。",
  aboutMe: "自己紹介",
  aboutMeContent:
    "広島県三原市出身です。子供の頃は勉強よりも体を動かすことが好きなエネルギッシュな子供でした。8歳の時に父の影響で野球を始め、プロ野球選手になるという夢を追いかけて学生生活の全てを野球に捧げました。",
  aboutMeContent2: "転機は大学 3 年生の 2020 年 6 月でした。",
  aboutMeContent3:
    "「自分だけのスキルを身につけたい」という思いからプログラミング学習を始めました。約半年間独学で集中的に学習し、インターンを通じてエンジニアとしてのキャリアをスタートしました。プログラミングに魅力を感じたのは、努力に比例してスキルが向上する実感が得られることでした。成長のペースは決して速くありませんでしたが、できることが徐々に広がっていく過程に夢中になり、プログラミングにのめり込んでいきました。",
  myHobbies: "趣味",
  hobbiesIntro: "体を動かすことと個人開発が大好きです。",
  hobbiesContent:
    "登山、筋トレ、ランニングに熱中しています。筋トレは16歳から始め、今では生活の一部となっています。",
  hobbiesContent2: "個人開発では、自分が実際に使いたいアプリを作っています。",
  hobbiesContent3: "や",
  hobbiesContent4:
    "を開発しました。現在は、React、shadcn/ui、Supabase を頻繁に使用して開発しています。",
  captions: {
    childhood01: "スキーに行った時の写真（横に写っているのは妹です）",
    childhood02: "海に行った時の写真",
    hiking01: "登山に行った時の写真",
    trip: "タイに行った時の写真",
    squat: "スクワットをしている写真",
  },
  language: {
    english: "英語",
    japanese: "日本語",
  },
};

export default async function Home() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-10">
        <div className="text-6xl mb-1 font-bold">{dict.welcome}</div>
        <div className="text-2xl font-bold ml-4">{dict.name}</div>
      </div>

      <div className="px-4 space-y-6">
        <div>
          {dict.greeting}
          <br />
          {dict.introduction}
          <br />
          <br />
          <div className="flex gap-4">
            <a
              href="https://x.com/nomu487495"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              X (Twitter)
            </a>
            <a
              href="https://github.com/yuuki008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mb-2">{dict.aboutMe}</div>
          <div>
            {dict.aboutMeContent}
            <CustomCarousel
              className="mt-4 mb-8"
              images={[
                {
                  url: "/childhood01.jpeg",
                  caption: dict.captions.childhood01,
                },
                {
                  url: "/childhood02.jpeg",
                  caption: dict.captions.childhood02,
                },
              ]}
            />
            {dict.aboutMeContent2}
            <br />
            {dict.aboutMeContent3}
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mb-2">{dict.myHobbies}</div>
          <div>
            {dict.hobbiesIntro}
            <CustomCarousel
              className="my-4"
              images={[
                {
                  url: "/hiking01.jpeg",
                  caption: dict.captions.hiking01,
                },
                {
                  url: "/trip.jpeg",
                  caption: dict.captions.trip,
                },
                {
                  url: "/squat.jpeg",
                  caption: dict.captions.squat,
                },
              ]}
            />
            <br />
            {dict.hobbiesContent}
            <br />
            <br />
            {dict.hobbiesContent2}{" "}
            <a
              href="https://diary.yuuki008.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              solo-diary
            </a>{" "}
            {dict.hobbiesContent3}{" "}
            <a
              href="https://brain.yuuki008.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              second-brain
            </a>
            {dict.hobbiesContent4}
          </div>
        </div>
      </div>
    </div>
  );
}
