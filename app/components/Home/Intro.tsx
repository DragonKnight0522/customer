"use client"

import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const playAnimation = (trigger: ScrollTrigger) => {
    gsap.fromTo('#introduction', {
      opacity: 0,
      duration: 3,
      ease: 'power2.out',
    }, {
      opacity: 1,
      duration: 3,
      ease: 'power2.out',
      onComplete: () => {
        trigger.kill();
      }
    });
  }

  React.useEffect(() => {
    const element = document.getElementById('introduction');

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => playAnimation(scrollTrigger),
    })
  }, []);

  return (
    <div id='introduction' className="bg-gray-50">
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
  );
}

export default Intro;
