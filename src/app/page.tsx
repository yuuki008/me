import CustomCarousel from "@/components/custom-carousel";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-10">
        <div className="text-6xl mb-1 font-bold">Welcome</div>
        <div className="text-2xl font-bold ml-4">I&apos;m Yuki Nomura</div>
      </div>

      <div className="px-4 space-y-6">
        <div>
          Hello! Nice to meet you. I&apos;m Nomu, a software engineer based in
          Fukuoka.
          <br />
          Through this site, I hope to gradually share a bit about who I am,
          covering everything from my work to my hobbies.
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
          <div className="text-2xl font-bold mb-2">About Me</div>
          <div>
            I&apos;m originally from Mihara City in Hiroshima Prefecture. As a
            child, I was energetic and preferred physical activities over
            studying. At age 8, influenced by my father, I started playing
            baseball and dedicated my entire student life to pursuing my dream
            of becoming a professional baseball player.
            <CustomCarousel
              className="mt-4 mb-8"
              images={[
                {
                  url: "/childhood01.jpeg",
                  caption: "Image from when I went beach",
                },
                {
                  url: "/childhood02.jpeg",
                  caption: "Image from when I went skiing",
                },
              ]}
            />
            The turning point came in June 2020, during my third year of
            university.
            <br />
            Driven by the desire to &quot;develop a skill that would be uniquely
            mine,&quot; I began learning programming.I studied intensively on my
            own for about six months, then started my career as an engineer
            through internships. What captivated me about programming was the
            tangible sense that my skills improved in direct proportion to my
            effort. While my pace of growth wasn&apos;t particularly fast, I
            became absorbed in the gradual process of expanding what I could
            accomplish, and I found myself completely immersed in programming.
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold mb-2">My Hobbies</div>
          <div>
            I love physical activities and personal development projects.
            <CustomCarousel
              className="my-4"
              images={[
                {
                  url: "/hiking01.jpeg",
                  caption: "Image from when I went hiking",
                },
                {
                  url: "/trip.jpeg",
                  caption: "Image from when I went Thailand",
                },
                {
                  url: "/squat.jpeg",
                  caption: "Image from when I did squats",
                },
              ]}
            />
            <br />
            I&apos;m passionate about hiking, weight training, and running. I
            started weight training at age 16, and it has become an integral
            part of my lifestyle.
            <br />
            <br />
            For personal development, I create apps that I would actually use
            myself. I&apos;ve developed{" "}
            <a
              href="https://diary.yuuki008.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              solo-diary
            </a>{" "}
            and{" "}
            <a
              href="https://brain.yuuki008.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              second-brain
            </a>
            . Currently, I frequently use React, shadcn/ui, and Supabase for
            development.
          </div>
        </div>
      </div>
    </div>
  );
}
