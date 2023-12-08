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
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Chatty from "./common/Chatty";
import { usePathname } from 'next/navigation';
import classNames from "classnames";

const Header = () => {
  const pathName = usePathname();
  const [isSearch, setSearch] = React.useState(false);
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <div className="bg-black fixed w-full z-50">
      <div className="container row">
        <div className="flex md:justify-between justify-center items-center text-white pt-1">
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
            <div className="hidden md:block">
              <FontAwesomeIcon icon={faFacebookF} className="py-1 ms-4" />
              <FontAwesomeIcon icon={faTwitter} className="py-1 ms-4" />
              <FontAwesomeIcon icon={faInstagram} className="py-1 ms-4" fontWeight={"bold"} />
              <FontAwesomeIcon icon={faFeed} className="py-1 ms-4" />
            </div>
          </div>
          <div className="hidden lg:block">
            <FontAwesomeIcon icon={faShoppingCart} size="xs" />
            <span className="text-sm ms-2">0 Items</span>
          </div>
        </div>
      </div>
      <div className="lg:px-7 py-3 flex justify-between items-center w-4/5 mx-auto lg:w-full px-0">
        <Link href={"/"}>
          <Image src={'/images/Lenos_Logo_Mockup_Logo_PNG.webp'} alt='logo' width={80} height={50} />
        </Link>
        <div className="text-white flex items-center">
          {!isSearch ? 
            <div className="flex">
              <div className="lg:flex hidden">
                <div className={classNames("me-6 hover:text-gray-300", {"text-green-500": pathName === "/"})}>
                  <Link href={"/"}>HOME</Link>
                </div>
                <div className="me-6">
                  <Popover open={openPopover} handler={setOpenPopover} placement="bottom-start">
                    <PopoverHandler {...triggers}>
                      <Link href={"/shop"} className={classNames("outline-none hover:text-gray-300", {"text-green-500": pathName.startsWith("/shop") || pathName.startsWith("/product-category")})}>
                        SHOP
                        <FontAwesomeIcon className="ms-1" icon={faAngleDown} />
                      </Link>
                    </PopoverHandler>
                    <PopoverContent {...triggers} className="bg-black text-white border-t-white border-t-2 mt-7 ps-9 pe-16 py-7 rounded-none border-l-0 border-b-0 border-r-0">
                      <div className="mb-5">
                        <Link href={"/product-category/ghost-carts"} className={classNames("outline-none hover:text-gray-300", {"text-green-500": pathName.startsWith("/product-category/ghost-carts")})}>GHOST CARTS</Link>
                      </div>
                      <div className="mb-5">
                        <Link href={"/product-category/ghost-extracts"} className={classNames("outline-none hover:text-gray-300", {"text-green-500": pathName.startsWith("/product-category/ghost-extracts")})}>GHOST EXTRACTS</Link>
                      </div>
                      <div>
                        <Link href={"/product-category/torch-x-ghost"} className={classNames("outline-none hover:text-gray-300", {"text-green-5000": pathName.startsWith("/product-category/torch-x-ghost")})}>TORCH X GHOST</Link>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className={classNames("me-6 hover:text-gray-300", {"text-green-500": pathName.startsWith("/about-us")})}>
                  <Link href={"/about-us"}>ABOUT US</Link>
                </div>
                <div className={classNames("me-6 hover:text-gray-300", {"text-green-500": pathName.startsWith("/wholesale")})}>
                  <Link href={"/wholesale"}>WHOLESALE</Link>
                </div>
                <div className={classNames("me-6 hover:text-gray-300", {"text-green-500": pathName.startsWith("/my-account")})}>
                  <Link href={"/my-account"}>MY ACCOUNT</Link>
                </div>
                <div className={classNames("me-6 hover:text-gray-300", {"text-green-500": pathName.startsWith("/validate-product")})}>
                  <Link href={"/validate-product"}>VALIDATE PRODUCT</Link>
                </div>
              </div>
              <div className="flex align-middle">
                <div className="hover:text-gray-300">
                  <FontAwesomeIcon icon={faSearch} className="cursor-pointer" onClick={() => setSearch(true)} />
                </div>
                <Popover placement="bottom-end">
                  <PopoverHandler>
                    <div className="text-cyan-500 ms-5 lg:hidden">
                      <FontAwesomeIcon className="ms-1 cursor-pointer" icon={faBars} size="lg" />
                    </div>
                  </PopoverHandler>
                  <PopoverContent className="bg-black text-white border-t-cyan-500 w-4/5 border-t-2 mt-7 py-12 px-16 rounded-none border-l-0 border-b-0 border-r-0">
                    <div className="mb-5">
                      <Link href={"/"} className="outline-none hover:text-gray-300">Home</Link>
                    </div>
                    <div className="mb-5">
                      <Link href={"/shop"} className="outline-none hover:text-gray-300">Shop</Link>
                    </div>
                    <div className="mb-5 ms-8">
                      <Link href={"/product-category/ghost-carts"} className="outline-none hover:text-gray-300">Ghost Carts</Link>
                    </div>
                    <div className="mb-5 ms-8">
                      <Link href={"/product-category/ghost-extracts"} className="outline-none hover:text-gray-300">Ghost Extracts</Link>
                    </div>
                    <div className="mb-5 ms-8">
                      <Link href={"/product-category/torch-x-ghost"} className="outline-none hover:text-gray-300">Torch x Ghost</Link>
                    </div>
                    <div className="mb-5">
                      <Link href={"/about-us"} className="outline-none hover:text-gray-300">About Us</Link>
                    </div>
                    <div className="mb-5">
                      <Link href={"/whole-sale"} className="outline-none hover:text-gray-300">Wholesale</Link>
                    </div>
                    <div className="mb-5">
                      <Link href={"/my-account"} className="outline-none hover:text-gray-300">My Account</Link>
                    </div>
                    <div>
                      <Link href={"/validate-account"} className="outline-none hover:text-gray-300">Validate Account</Link>
                    </div>
                  </PopoverContent>
                </Popover>
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
      <Chatty />
    </div>
  );
}

export default Header;
