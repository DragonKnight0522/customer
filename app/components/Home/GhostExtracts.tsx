"use client"

import React from 'react';
import Product from '../common/Product';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const GhostExtracts = () => {
  const playAnimation = (trigger: ScrollTrigger) => {
    gsap.fromTo('#ghostCart', {
      rotationY: '60',
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
    }, {
      rotationY: '0',
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        trigger.kill();
      }
    });
  }

  React.useEffect(() => {
    const element = document.getElementById('ghostCart');

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => playAnimation(scrollTrigger),
    })
  }, []);

  return (
    <div className="row">
      <h2 className="text-3xl text-center font-semibold py-10 mb-3">GHOST CART DISPOSABLES BULK BUY NOW</h2>
      <div id='ghostCart' className="grid lg:grid-cols-4 grid-cols-2 gap-8 pb-16">
        {new Array(8).fill(1).map((x, idx) => <Product key={`product_${idx}`} thumb={"/images/Mockup_Product.webp"} />)}
      </div>
    </div>
  );
}

export default GhostExtracts;
