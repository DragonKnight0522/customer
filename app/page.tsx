import Image from 'next/image';
import Link from "next/link";
import Slider from './components/Home/Slider';
import Product from './components/common/Product';

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="row pb-16">
        <h2 className="text-center text-3xl font-semibold mt-6 mb-10">WELCOME TO GHOST CARTS STORE</h2>
        <div className="grid grid-cols-4 gap-8">
          {new Array(12).fill(1).map((x, idx) => <Product key={`product_${idx}`} thumb={"/images/California-Ghost-eCommerce-Shots-Individual-Front-Facing-with-Device-0009_r-1.png"} />)}
        </div>
      </div>
      <div className="bg-slate-200">
        <div className="row py-9">
          <h2 className="text-center text-3xl font-semibold pb-4">BUY GHOST CARTS ONLINE</h2>
          <p className="font-semibold pb-4">Welcome to the Ghost Carts Store, your one-stop shop for premium disposable vape pens. Our Ghost Carts are a top choice for those seeking a high-quality vaping experience, and we offer a wide selection of delicious flavors to choose from.</p>
          <h2 className="text-center text-3xl font-semibold pb-4">GHOST VAPE PEN PREMIUM THC</h2>
          <p className="font-semibold pb-4">Whether you’re a seasoned vaper or just getting started, Ghost Carts are perfect for anyone who wants to enjoy the benefits of vaping without the hassle of maintenance or refilling. Our disposable Ghost Carts come pre-filled with premium THC oil, ensuring a consistent and smooth vaping experience every time.</p>
          <h2 className="text-center text-3xl font-semibold pb-4">BUY ORIGINAL GHOST EXTRACTS</h2>
          <p className="font-semibold pb-4">At Ghost Carts Store, we take pride in offering only the highest quality products. Each of our Ghost extracts for sale is made with top-of-the-line components and carefully selected strains to deliver a superior vaping experience. And with our competitive pricing, you can enjoy the best vaping experience without breaking the bank.</p>
          <h2 className="text-center text-3xl font-semibold pb-4">GHOST DISPOSABLE CARTS</h2>
          <p className="font-semibold pb-4">So if you’re looking for a convenient and reliable way to enjoy your favorite strains, look no further than Ghost Carts Store. Explore our selection of Ghost Carts today and discover why so many vapers choose us for their vaping needs. Whether you prefer fruity flavors like Strawberry Banana or classic strains like Blue Dream, we have the perfect Ghost Cart for you. Shop with us today and experience the difference that comes with vaping with Ghost Carts Store.</p>
        </div>
      </div>
      <div className="bg-stone-200">
        <div className="row py-9">
          <h2 className="text-center font-bold" style={{fontSize: '53px'}}>QUALITY CANNABIS PRODUCTS.</h2>
          <p>&nbsp;</p>
          <p className="text-center text-lg font-semibold">we keep the process that we use for our ghost extracts cannabis products simple.</p>
          <div className="grid grid-cols-3 gap-5 mt-7">
            <div>
              <div className="p-6">
                <Image className="w-full h-auto" src={"/images/ghost-extraction.webp"} width={320} height={320} alt='' />
              </div>
              <p className="text-xl text-center font-bold">PREMIUM CANNABIS</p>
            </div>
            <div>
              <div className="p-6">
                <Image className="w-full h-auto" src={"/images/ghost-third-party-testing.webp"} width={320} height={320} alt='' />
              </div>
              <p className="text-xl text-center font-bold">3RD PARTY TESTED</p>
            </div>
            <div>
              <div className="p-6">
                <Image className="w-full h-auto" src={"/images/ghost-quality-control.webp"} width={320} height={320} alt='' />
              </div>
              <p className="text-xl text-center font-bold">QUALITY CONTROL CHECKED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="row -mx-10 scale-105">
          <div className="grid grid-cols-2 gap-x-16">
            <div className="py-6">
              <Image className="w-full h-auto rounded-3xl shadow-gray-200" src={"/images/photo_2023-11-08_08-08-20.webp"} style={{boxShadow: "0px 2px 18px 0px #FFFFFF"}} width={500} height={800} alt='' />
            </div>
            <div className="text-white text-center font-semibold">
              <h2 className="text-3xl mt-16 mb-4">GHOST EXTRACTS CANNABIS.</h2>
              <p className="text-lg">we believe in providing top-shelf cannabis that you can enjoy any time of the day. we have bold and amazing flavors.</p>
              <h2 className="text-3xl mt-16 mb-4">OUR GUARANTEE.</h2>
              <p className="text-lg">our approach involves blending high-potency thc oil with the finest quality, cannabis-derived terpenes. our commitment is to use a proprietary combination of top-notch cannabis-derived terpenes and high-potency distillate to maintain a consistent and dependable high.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid grid-cols-2 gap-x-16">
          <div className="font-semibold">
            <h2 className="text-3xl mt-16 mb-3">GHOST CART DISPOSABLES BULK BUY NOW</h2>
            <p className="text-lg mb-4">If you’re looking to stock up on Ghost Cart disposables in bulk, you’ve come to the right place. Buying in bulk can save you money and ensure that you always have plenty of disposables on hand when you need them.</p>
            <p className="text-lg mb-4">When you buy Ghost Cart disposables in bulk or fryd carts, you can rest assured that you’re getting a high-quality product. Our disposables are made with the highest standards in mind and are lab-tested to ensure quality and purity. </p>
            <p className="text-lg mb-4">Buying in bulk is also a great way to save money on your ghost products. We offer competitive pricing on all of our bulk orders, so you can get more for your money. Plus, with our fast and reliable shipping, you can have your bulk order delivered right to your door in no time.</p>
          </div>
          <div className="flex mt-16">
            <Image className="w-full h-auto my-auto" src={"/images/California-Ghost-eCommerce-Shots-Individual-Front-Facing-with-Device-0009_r-1.png"} width={500} height={600} alt='' />
          </div>
        </div>
      </div>
      <div className="row">
        <h2 className="text-3xl text-center font-semibold py-10 mb-3">GHOST CART DISPOSABLES BULK BUY NOW</h2>
        <div className="grid grid-cols-4 gap-8 pb-16">
          {new Array(8).fill(1).map((x, idx) => <Product key={`product_${idx}`} thumb={"/images/Northern-lights-GhostCarts-Flavor-.webp"} />)}
        </div>
      </div>
      <div className="row">
        <h2 className="text-3xl text-center font-semibold">TORCH X GHOST</h2>
        <h2 className="text-2xl text-center font-semibold mb-10">LATEST COLLECTION AND BEST SELLING</h2>
        <div className="grid grid-cols-4 gap-8 pb-16">
          {new Array(8).fill(1).map((x, idx) => <Product key={`product_${idx}`} thumb={"/images/Rainbowgushers.webp"} />)}
        </div>
      </div>
    </div>
  )
}
