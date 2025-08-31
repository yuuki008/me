import CustomCarousel from "@/components/custom-carousel";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "ja" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
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
