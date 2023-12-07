import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="row pt-14">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
          <div>
            <h4 className="text-red-600 text-lg mb-3">GHOST CONTACT</h4>
            <p className="text-white uppercase italic mb-5 font-bold">
              <a href='mailto:info@ghostcarts.com'>INFO@GHOSTCARTS.COM</a>
            </p>
            <p className="text-white uppercase italic mb-5 font-bold">
              <a href='tell:+1 (716) 775-7931'>PHONE : +1 (716) 775-7931</a>
            </p>
            <p className="text-white uppercase italic mb-5 font-bold">
              1616 S HILL ST LOS ANGELES, CA 90015
            </p>
          </div>
          <div>
            <h4 className="text-red-600 text-lg mb-3">INFORMATION</h4>
            <ul>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/about-us"} className="uppercase text-white italic font-bold">About US</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/cart"} className="uppercase text-white italic font-bold">Cart</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/checkout"} className="uppercase text-white italic font-bold">Checkout</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/"} className="uppercase text-white italic font-bold">Home</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/privacy-policy"} className="uppercase text-white italic font-bold">Privacy Policy</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/shop"} className="uppercase text-white italic font-bold">Teams of Service</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/teams-of-service"} className="uppercase text-white italic font-bold">Shop</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/track-order"} className="uppercase text-white italic font-bold">Track your order</Link>
              </li>
              <li className="mb-5 flex items-center">
                <span className="inline-block w-2 h-2 me-2 rounded-full bg-cyan-300"></span>
                <Link href={"/validate-product"} className="uppercase text-white italic font-bold">Validate product</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-red-600 text-lg mb-3">MONEY BACK GUARANTEE</h4>
            <Image src={"/images/11.webp"} width={300} height={169} alt='' />
          </div>
        </div>
        <h2 className="text-red-600 uppercase italic mb-5 font-bold pb-6 pt-16">{`© ${new Date().getFullYear()} Ghost Carts Brand. All Rights Reserved`}</h2>
      </div>
    </div>
  );
}

export default Footer;
