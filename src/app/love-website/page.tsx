import Link from "next/link"

export default function Page() {
  const sites = [
    { url: "https://leonbubova.github.io/", title: 'leonbubova.github.io' },
    { url: "http://bettermotherfuckingwebsite.com/", title: "bettermotherfuckingwebsite.com" },
    { url: "https://blog.codinghorror.com/", title: "blog.codinghorror.com" },
    { url: "https://kentbeck.com/", title: "kentbeck.com" },
    { url: "https://www.yamatomichi.com/", title: "yamatomichi.com" }
  ]

  return (
    <div className="py-20 max-w-lg mx-auto">
      <div className="text-5xl font-bold tracking-tight mb-8">Love Website</div>
      <div className="space-y-4">
        {sites.map(site => <Link className="block text-lg" key={site.url} href={site.url}>{site.title}</Link>)}
      </div>
    </div>
  )
}
