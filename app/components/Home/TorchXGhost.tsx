"use client"

import React from 'react';
import Link from "next/link";
import Product from '../common/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TorchXGhost = () => {
  const playAnimation = () => {
    gsap.fromTo('#torchXghost', {
      rotation: '-180',
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
    }, {
      rotation: '0',
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
    });
  }

  React.useEffect(() => {
    const element = document.getElementById('torchXghost');

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => playAnimation(),
    })
  }, []);

  return (
    <div className="row">
      <h2 className="text-3xl text-center font-semibold">TORCH X GHOST</h2>
      <h2 className="text-2xl text-center font-semibold mb-10">LATEST COLLECTION AND BEST SELLING</h2>
      <div id='torchXghost' className="grid lg:grid-cols-4 grid-cols-2 gap-8 pb-16">
        {new Array(8).fill(1).map((x, idx) => <Product key={`product_${idx}`} thumb={"/images/Mockup_Product.webp"} />)}
      </div>
      <div className="text-center">
        <Link href={'/'}>
          <div className="inline-block group border-black border-4 py-2 px-5 rounded-full transition-all hover:px-4 mb-10" style={{boxShadow: "0px 2px 18px 0px #000000"}}>
            <span className="font-semibold text-xl">All Torch x Ghost</span>
            <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
          </div>
        </Link>
        <h2 className="text-3xl font-semibold mb-6">GHOSTCARTS.COM CLIENT REVIEWS </h2>
      </div>
    </div>
  );
}

export default TorchXGhost;
