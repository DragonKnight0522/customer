"use client"

import React from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Quality = () => {
  const playAnimation = () => {
    gsap.fromTo('#quality', {
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
    const element = document.getElementById('quality');

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => playAnimation(),
    })
  }, []);

  return (
    <div className="bg-stone-200">
      <div className="row py-9">
        <div id='quality'>
          <h2 className="text-center font-bold" style={{fontSize: '53px'}}>QUALITY CANNABIS PRODUCTS.</h2>
          <p>&nbsp;</p>
          <p className="text-center text-lg font-semibold">we keep the process that we use for our ghost extracts cannabis products simple.</p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-7">
          <div>
            <div className="p-6 lg:w-full w-4/5 m-auto">
              <Image className="w-full h-auto" src={"/images/ghost-extraction.webp"} width={320} height={320} alt='' />
            </div>
            <p className="text-xl text-center font-bold">PREMIUM CANNABIS</p>
          </div>
          <div>
            <div className="p-6 lg:w-full w-4/5 m-auto">
              <Image className="w-full h-auto" src={"/images/ghost-third-party-testing.webp"} width={320} height={320} alt='' />
            </div>
            <p className="text-xl text-center font-bold">3RD PARTY TESTED</p>
          </div>
          <div>
            <div className="p-6 lg:w-full w-4/5 m-auto">
              <Image className="w-full h-auto" src={"/images/ghost-quality-control.webp"} width={320} height={320} alt='' />
            </div>
            <p className="text-xl text-center font-bold">QUALITY CONTROL CHECKED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
