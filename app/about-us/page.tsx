import React from 'react';
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="text-center" style={{backgroundImage: `url("/images/C16CBFD5-2262-4938-8179-06A5C5FF27BA.jpeg")`, backgroundPosition: '50%', backgroundSize: 'cover', height: '300px'}}>
        <div className="px-64 py-8 bg-black bg-opacity-30 inline-block mt-28 rounded-3xl">
          <h2 className="text-5xl text-white font-semibold">ABOUT GHOST. STORE</h2>
        </div>
      </div>
      <div className="row">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 pt-4 pb-16">
          <div>
            <h2 className="text-2xl text-center px-20 font-bold mb-2">WHAT MAKES GHOST CARTS UNIQUE</h2>
            <div className="border-double border-gray-800 overflow-hidden" style={{borderRadius: '70px', borderWidth: '10px'}}>
              <Image src={"/images/0E9495D1-95DA-4067-BB3F-022F2FDB3898.jpeg"} width={500} height={500} alt='' />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">CONSISTENT EVALUATION</h4>
            <p className="font-semibold mb-6">A rigorous application of data-driven science informs our cultivation approach.</p>
            <h4 className="font-bold mb-2">INNOVATIVE TECHNIQUES</h4>
            <p className="font-semibold mb-6">Leading horticultural methods enable our master growers to push the limits of traditional cannabis practices.</p>
            <h4 className="font-bold mb-2">ADVANCING WELLNESS</h4>
            <p className="font-semibold mb-6">Through constant curation of our prized genetic library, we push the limits of well-being toward a brighter future.</p>
            <h4 className="font-bold mb-2">BRANDING</h4>
            <p className="font-semibold mb-6">At GHOST. Store we take branding very seriously. Our brands are designed to reflect the past, present & emerging pop culture as well as to meet the demands of the most critical cannabis connoisseur. We place value on the image, touch, feel, quality, and emotion.</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8">
              <div className="mb-6">
                <p className="font-semibold">800+</p>
                <h4 className="font-bold mb-2">CUSTOMERS TRUST US</h4>
              </div>
              <div className="mb-6">
                <p className="font-semibold">1743+</p>
                <h4 className="font-bold mb-2">YEARLY SALES</h4>
              </div>
              <div className="mb-6">
                <p className="font-semibold">10+</p>
                <h4 className="font-bold mb-2">SALES AGENTS</h4>
              </div>
            </div>
          </div>
        </div>
        <p className="font-semibold mb-6">We believe in honesty, simplicity, and transparency. Our goal is to provide individuals with the highest quality products that are created with them in mind. Welcome to our brand, where our goal is to lighten the body and free the spirit.</p>
        <p className="font-semibold mb-1">Ghost was founded on the idea that we all live in the shadows. We have all thought of something more. With our team of long-time industry enthusiasts, joined together with a mission to produce better, tastier, more honest cannabis products, we can finally come out of the shadows.</p>
        <p className="font-semibold mb-6">In 2018, the ghost. founders realized that long-term success in an immature cannabis industry required a higher degree of self-sufficiency.  With that focus, ghost was able to establish a fully redundant supply chain, and engineered proprietary product formulations.  This has allowed Ghost to pivot quickly and adapt to an ever-changing market.</p>
      </div>
    </div>
  );
}

export default page;
