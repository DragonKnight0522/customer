"use client"

import React from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Guide = () => {
  const playAnimation = (element: Element) => {
    gsap.fromTo(element, {
      scale: 0.3,
      duration: 2,
      ease: 'power2.out',
    }, {
      scale: 1,
      duration: 2,
      ease: 'power2.out',
    });
  }

  React.useEffect(() => {
    const elements = document.querySelectorAll("div[data-anim='guide']");

    elements.forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => playAnimation(element),
      });
    })
  }, []);

  return (
    <>
      <div className="bg-black">
        <div className="row lg:scale-105">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16">
            <div data-anim="guide" className="py-6">
              <Image className="w-full h-auto rounded-3xl shadow-gray-200" src={"/images/photo_2023-11-08_08-08-20.webp"} style={{boxShadow: "0px 2px 18px 0px #FFFFFF"}} width={500} height={800} alt='' />
            </div>
            <div data-anim="guide" className="text-white text-center font-semibold">
              <h2 className="text-3xl mt-16 mb-4">GHOST EXTRACTS CANNABIS.</h2>
              <p className="text-lg">we believe in providing top-shelf cannabis that you can enjoy any time of the day. we have bold and amazing flavors.</p>
              <h2 className="text-3xl mt-16 mb-4">OUR GUARANTEE.</h2>
              <p className="text-lg">our approach involves blending high-potency thc oil with the finest quality, cannabis-derived terpenes. our commitment is to use a proprietary combination of top-notch cannabis-derived terpenes and high-potency distillate to maintain a consistent and dependable high.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16">
          <div data-anim="guide" className="font-semibold">
            <h2 className="text-3xl mt-16 mb-3">GHOST CART DISPOSABLES BULK BUY NOW</h2>
            <p className="text-lg mb-4">If you’re looking to stock up on Ghost Cart disposables in bulk, you’ve come to the right place. Buying in bulk can save you money and ensure that you always have plenty of disposables on hand when you need them.</p>
            <p className="text-lg mb-4">When you buy Ghost Cart disposables in bulk or fryd carts, you can rest assured that you’re getting a high-quality product. Our disposables are made with the highest standards in mind and are lab-tested to ensure quality and purity. </p>
            <p className="text-lg mb-4">Buying in bulk is also a great way to save money on your ghost products. We offer competitive pricing on all of our bulk orders, so you can get more for your money. Plus, with our fast and reliable shipping, you can have your bulk order delivered right to your door in no time.</p>
          </div>
          <div data-anim="guide" className="flex mt-16">
            <Image className="w-full h-auto my-auto" src={"/images/California-Ghost-eCommerce-Shots-Individual-Front-Facing-with-Device-0009_r-1.png"} width={500} height={600} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Guide;
