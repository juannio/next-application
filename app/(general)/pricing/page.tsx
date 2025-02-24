
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing page SEO',
  description: 'pricing PAGE SEO METADATA',
  keywords: ['pricing', 'how much', 'cost details'],
}

const myPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('finish')
    }, 3000);
  })
}

const PricingPage = async () => {
  await myPromise();
  return (
    <>
      <span className="text-7xl">Pricing page</span>
    </>
  )
}

export default PricingPage;