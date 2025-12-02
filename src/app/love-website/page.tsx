import Link from "next/link"

export default function Page() {
  const sites = [{ url: "https://leonbubova.github.io/", title: 'leonbubova.github.io' }]

  return (
    <div className="py-20 max-w-lg mx-auto">
      {sites.map(site => <Link className="text-lg" key={site.url} href={site.url}>{site.title}</Link>)}
    </div>
  )
}
