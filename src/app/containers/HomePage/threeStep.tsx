export function ThreeStep() {
  return (
    <div className="z-10 pt-0 pb-16 mt-0 ml-12 mr-12 rounded-lg bg-purple-50 shadow-md block bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Own an NFTee and earn royalties.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white text-3xl">
                {feature.icon}
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const features = [
  {
    name: '🌱   Mint the NFT, own the production',
    description:
      'The NFT owner gains full control over the production of an Aloud pocket tee.',
    icon: '',
  },
  {
    name: '🌿 Get your shirt at no extra cost',
    description:
      'Each NFT allows a "First Mint" shirt to be produced at no extra cost and shipped wherever.',
    icon: '',
  },
  {
    name: '🌲 Earn royalties by putting it on sale',
    description:
      'The NFT owner can put the design on sale, earning an additional 25% royalty when sold on our shop, paid in $UST.',
    icon: '',
  },
]