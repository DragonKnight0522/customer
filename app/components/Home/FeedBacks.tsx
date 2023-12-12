"use client"

import React from 'react';
import FeedBack from '../common/FeedBack';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FeedBacks = () => {
  const playAnimation = (element: Element, trigger: ScrollTrigger) => {
    gsap.fromTo(element, {
      scale: 0.3,
      duration: 2,
      ease: 'power2.out',
    }, {
      scale: 1,
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        trigger.kill();
      }
    });
  }

  React.useEffect(() => {
    const elements = document.querySelectorAll("div[data-anim='feedback']");

    elements.forEach(element => {
      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => playAnimation(element, scrollTrigger),
      });
    })
  }, []);

  return (
    <div className="row py-8">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-14">
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
      </div>
    </div>
  );
}

export default FeedBacks;
