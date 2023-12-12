"use client"

import React from 'react';
import Product from '../common/Product';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const playAnimation = () => {
    gsap.fromTo('#cartStore', {
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
    const element = document.getElementById('cartStore');

    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => playAnimation(),
    })
  }, []);

  return (
    <div className="row pb-16">
      <h2 className="text-center text-3xl font-semibold mt-6 mb-10">WELCOME TO GHOST CARTS STORE</h2>
      <div id="cartStore" className="grid lg:grid-cols-4 grid-cols-2 gap-8">
        {new Array(12).fill(1).map((x, idx) => <Product key={`product_${idx}`} thumb={"/images/Mockup_Product.webp"} />)}
      </div>
    </div>
  );
}

export default Welcome;
