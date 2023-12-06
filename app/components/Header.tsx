"use client"

import React from "react";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faFeed } from '@fortawesome/free-solid-svg-icons/faFeed';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Header = () => {
  const [isSearch, setSearch] = React.useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <div className="bg-black">
      <div className="container row">
        <div className="flex justify-between items-center text-white pt-1">
          <div className="flex items-baseline">
            <div className="flex">
              <FontAwesomeIcon icon={faPhone} size="sm" className="py-1 me-1" />
              <span className="text-sm me-4">+1 (716) 775-7931</span>
            </div>
            <a href="mailto:info@ghostcarts.com">
              <div className="flex">
                <FontAwesomeIcon icon={faEnvelope} size="sm" className="py-1 me-1" />
                <span className="text-sm">info@ghostcarts.com</span>
              </div>
            </a>
            <FontAwesomeIcon icon={faFacebookF} className="py-1 ms-4" />
            <FontAwesomeIcon icon={faTwitter} className="py-1 ms-4" />
            <FontAwesomeIcon icon={faInstagram} className="py-1 ms-4" fontWeight={"bold"} />
            <FontAwesomeIcon icon={faFeed} className="py-1 ms-4" />
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} size="xs" />
            <span className="text-sm ms-2">0 Items</span>
          </div>
        </div>
      </div>
      <div className="px-7 py-3 flex justify-between items-center">
        <Link href={"/"}>
          <Image src={'/images/ghost-logo-2.png'} alt='logo' width={180} height={50} />
        </Link>
        <div className="text-white flex items-center">
          {!isSearch ? 
            <div className="flex">
              <div className="me-6 hover:text-gray-300">
                <Link href={"/"}>HOME</Link>
              </div>
              <div className="me-6">
                <Popover open={openPopover} handler={setOpenPopover} placement="bottom-start">
                  <PopoverHandler {...triggers}>
                    <Link href={"/shop"} className="outline-none hover:text-gray-300">
                      SHOP
                      <FontAwesomeIcon className="ms-1" icon={faAngleDown} />
                    </Link>
                  </PopoverHandler>
                  <PopoverContent {...triggers} className="bg-black text-white border-t-white border-t-2 mt-7 ps-9 pe-16 py-7">
                    <div className="mb-5">
                      <Link href={"/ghost-carts"} className="outline-none hover:text-gray-300">GHOST CARTS</Link>
                    </div>
                    <div className="mb-5">
                      <Link href={"/ghost-extracts"} className="outline-none hover:text-gray-300">GHOST EXTRACTS</Link>
                    </div>
                    <div>
                      <Link href={"/torch-x-ghost"} className="outline-none hover:text-gray-300">TORCH X GHOST</Link>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="me-6 hover:text-gray-300">
                <Link href={"/about-us"}>ABOUT US</Link>
              </div>
              <div className="me-6 hover:text-gray-300">
                <Link href={"/wholesale"}>WHOLESALE</Link>
              </div>
              <div className="me-6 hover:text-gray-300">
                <Link href={"/my-account"}>MY ACCOUNT</Link>
              </div>
              <div className="me-6 hover:text-gray-300">
                <Link href={"/validate-product"}>VALIDATE PRODUCT</Link>
              </div>
              <div className="hover:text-gray-300">
                <FontAwesomeIcon icon={faSearch} className="cursor-pointer" onClick={() => setSearch(true)} />
              </div>
            </div>
            :
            <div className="flex">
              <input className="me-6 bg-black text-white outline-none" placeholder="SEARCH ..." />
              <div className="hover:text-gray-300">
                <FontAwesomeIcon icon={faTimes} className="cursor-pointer" onClick={() => setSearch(false)} />
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Header;
