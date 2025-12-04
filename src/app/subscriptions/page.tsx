import Link from "next/link"

type Subscription = {
  url: string,
  name: string,
  plan?: string,
  price: string
  role: string
}
function Page() {
  const subscriptions: Subscription[] = [
    {
      url: 'https://claude.ai',
      name: 'Claude',
      plan: 'Max',
      price: '100 ドル',
      role: "AI & Development"
    },
    {
      name: 'Youtube Premium',
      plan: 'Individual',
      url: 'https://www.youtube.com/premium',
      price: '13.99 ドル',
      role: "Music & Video"
    },
    {
      name: '1 Password',
      price: '2.39 ドル',
      plan: 'Individual',
      url: 'https://1password.com/',
      role: "Password Manager"
    },
    {
      name: 'Amazon Prime',
      url: 'https://www.amazon.co.jp/-/en/amazonprime',
      price: '600 円',
      role: "Video & EC"
    },

    {
      name: 'Anytime Fitness',
      price: '7,480 円',
      url: 'https://www.anytimefitness.co.jp/',
      role: "Fitness"
    }
  ]


  return (
    <div className="py-20 max-w-lg mx-auto">
      <div className="text-5xl font-bold tracking-tight mb-8">Subscription</div>

      <div>
        {subscriptions.map((sub, index) => (
          <div key={index} className="border-b flex items-center justify-between py-2">
            <Link href={sub.url} target="_blank" className="block text-blue-600 hover:underline">
              {sub.name}{sub.plan ? ` (${sub.plan})` : ''}
            </Link>
            <div className="text-sm">{sub.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
