"use client"

import Link from "next/link";
import { Carousel } from "@material-tailwind/react";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const Slider = () => {
  useLayoutEffect(() => {
    gsap.fromTo("#slider", {
      scale: 1.3,
      ease: "elastic",
      duration: 2,
    }, {
      scale: 1,
      ease: "elastic",
      duration: 2,
    });
  }, []);

  return (
    <Carousel id="slider" loop className="w-full" placeholder={''}>
      <div className="relative w-full slider text-center" style={{backgroundImage: `url("/images/black-mamba-single-boxes-and-device.jpeg")`, backgroundPosition: '50%', backgroundSize: 'cover'}}>
        <div className="px-32 py-8 bg-black bg-opacity-30 inline-block mt-52 rounded-full">
          <h2 className="text-5xl text-white font-semibold">BUY GHOST CARTS ONLINE</h2>
        </div>
        <br />
        <br />
        <Link href={'/'} className="relative cursor-pointer bg-black rounded-full px-8 py-4 hover:px-12">
          <span className="text-white">Available Carts</span>
        </Link>
      </div>
      <div className="relative w-full slider text-center" style={{backgroundImage: `url("/images/4A81146A-D377-448D-AE28-6A855BB87DD6.jpeg")`, backgroundPosition: '50%', backgroundSize: 'cover'}}>
        <div className="px-32 py-8 bg-black bg-opacity-30 inline-block mt-60 rounded-full">
          <h2 className="text-6xl text-white font-semibold">GHOST DISPOSABLE FOR SALE</h2>
        </div>
      </div>
    </Carousel>
  )
}

export default Slider;