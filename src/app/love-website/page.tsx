import Link from "next/link"

export default function Page() {
  const sites = [
    { url: "https://leonbubova.github.io/", title: 'leonbubova.github.io' },
    { url: "http://bettermotherfuckingwebsite.com/", title: "bettermotherfuckingwebsite.com" },
    { url: "https://blog.codinghorror.com/", title: "blog.codinghorror.com" },
    { url: "https://kentbeck.com/", title: "kentbeck.com" },
    { url: "https://www.yamatomichi.com/", title: "yamatomichi.com" },
    { url: "https://deadsimplesites.com/", title: "deadsimplesites.com" }
  ]

  return (
    <div className="max-w-lg px-6 mx-auto h-screen flex flex-col justify-center items-center">
      <div className="text-5xl font-bold tracking-tight mb-8">Love Website</div>
      <div className="space-y-4">
        {sites.map(site => <Link target="_blank" className="block text-lg text-blue-600 hover:underline" key={site.url} href={site.url}>{site.title}</Link>)}
      </div>
    </div>
  )
}
