"use client"
import React from 'react';
import { Avatar } from "@material-tailwind/react";

const FeedBack = () => {
  return (
    <div data-anim='feedback' className="rounded-3xl flex lg:block" style={{boxShadow: "0px 2px 18px 0px #7CDA24"}}>
      <div className="text-center py-8 feedBack">
        <div className="me-auto w-24 h-24 ms-8 lg:ms-auto">
          <Avatar className="w-full h-full rounded-full" src={'/images/Francisco.jpeg'} alt='' size="xxl" style={{boxShadow: "inset 0 0 3px rgba(0,0,0,.3)"}} placeholder={''} />
        </div>
      </div>
      <div className="px-8 lg:pt-0 pt-8">
        <p className="pb-4 font-semibold">GHOST Cannabis Extract pens are at the TOP of my Pen list. I love the flavor here, I also use the dispensary-grade GHOST for their potent ghost torch Pen, but I was so excited to see this FIRE BRAND being sold really affordable to everyone. Hope to see many more GHOST PEN choices in the near future. HIGHLY recommended</p>
        <p className="mt-8 font-bold">Lonnie Francisco</p>
        <p className="mb-8 font-semibold">Verified Buyer</p>
      </div>
    </div>
  )
}

export default FeedBack;
