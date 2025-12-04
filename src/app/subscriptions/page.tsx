import Link from "next/link"

type Subscription = {
  url: string,
  name: string,
  price: string
  role: string
}
function Page() {
  const subscriptions: Subscription[] = [
    {
      url: 'https://claude.ai',
      name: 'Claude Max',
      price: '100 ドル',
      role: "AI"
    },
    {
      name: 'Youtube Premium',
      url: 'https://www.youtube.com/premium',
      price: '13.99 ドル',
      role: "動画と音楽"
    },
    {
      name: 'Amazon Prime',
      url: 'https://www.amazon.co.jp/-/en/amazonprime',
      price: '600 円',
      role: "動画とEC"
    },
    {
      name: '1 Password',
      price: '2.39 ドル',
      url: 'https://1password.com/',
      role: "パスワード"
    },
    {
      name: 'Anytime Fitness',
      price: '7,480 円',
      url: 'https://www.anytimefitness.co.jp/',
      role: "フィットネス"
    }
  ]


  return (
    <div className="max-w-lg px-6 mx-auto h-screen flex flex-col justify-center items-center">
      <div className="text-5xl font-bold mb-14 tracking-wide">私のサブスク</div>

      <div className="w-full">
        {subscriptions.map((sub, index) => (
          <div key={index} className="flex items-center justify-between py-2 space-x-1 w-full">
            <div className="w-[130px]">{sub.role}</div>
            <Link href={sub.url} target="_blank" className="flex-1 text-left block text-blue-600 hover:underline">
              {sub.name}
            </Link>
            <div className="text-sm">{sub.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
