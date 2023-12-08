import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Product from '@/app/components/common/Product';

const ProductDetail = () => {
  return (
    <div className="row lg:flex block">
      <div className="lg:w-4/5 w-full lg:pe-16 pt-14 pb-8">
        <div className="font-semibold flex align-middle">
          <Link href={"/"} className="text-green-500">Home</Link>
          <span className="mx-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} size="xs" />
          </span>
          <Link href={"/shop"} className="text-green-500">Shop</Link>
          <span className="mx-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} size="xs" />
          </span>
          <span>Ghost Train Haze Ghost Extracts</span>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="relative">
            <div className="absolute mt-2 ms-2 bg-orange-400 inline-block px-5 text-xl py-2 rounded-md font-bold text-white z-10">Sale!</div>
            <div className="absolute w-9 h-9 bg-white right-2 top-2 rounded-full cursor-pointer flex">
              <FontAwesomeIcon icon={faSearch} size='lg' className="m-auto" />
            </div>
            <Image src={'/images/Mockup_Product.webp'} height={500} width={500} alt='' />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">GHOST TRAIN HAZE GHOST EXTRACTS</h2>
            <p className="text-2xl font-semibold">
              <del className="text-gray-500 me-2">$50.00</del>
              <span className="text-cyan-400">$20.00</span>
            </p>
            <p className="font-semibold mb-1">the ghost train haze is known for a cerebral hazy type of high.</p>
            <p className="font-semibold text-xl mb-2">FLAVOR/TASTE</p>
            <p className="font-semibold">citrus • herbal • lemon</p>
            <p className="font-semibold text-xl mb-2">EFFECTS</p>
            <p className="font-semibold">energetic • uplifted • focus</p>
            <div className="py-4">
              <input type="number" className="outline-none w-16 p-4 bg-gray-100 text-gray-600 me-5" defaultValue={1} />
              <button className="inline-block group border-black hover:border-white hover:bg-gray-200 border-2 py-2 px-5 rounded-full transition-all hover:px-4 mb-2 me-4">
                <span className="font-semibold text-xl">Add to cart</span>
                <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
              </button>
            </div>
            <div className="border-gray-400 mt-2 pt-2" style={{borderTopWidth: '1px'}}>
              <p className="text-sm font-semibold text-gray-600">Category: <Link href={"/product-category/ghost-extracts"} className="text-cyan-400">Ghost Extracts</Link></p>
            </div>
          </div>
        </div>
        <div className="border-gray-400 my-12 " style={{borderWidth: '1px'}}>
          <div className="flex">
            <p className="px-4 py-1 font-semibold bg-white">Description</p>
            <div className="w-full bg-gray-100 border-gray-400" style={{borderLeftWidth: '1px', borderBottomWidth: '1px'}}></div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">DESCRIPTION</h2>
            <p className="text-2xl font-semibold mb-2" style={{lineHeight: 1}}>GHOST TRAIN HAZE GHOST EXTRACTS: THE BEST GHOST DISPOSABLE FLAVOR</p>
            <p className="font-semibold mb-2">Crisp Apples, Sweet Cinnamon: Immerse yourself in the captivating world of ghost train haze ghost extracts, where the delightful essence of crisp apples and sweet cinnamon come together in a symphony of flavor. This premium vape cartridge offers a harmonious fusion that transports you to a nostalgic breakfast experience with every inhale.</p>
            <p className="text-2xl font-semibold mb-2" style={{lineHeight: 1}}>WHERE TO BUY GHOST TRAIN HAZE GHOST EXTRACTS</p>
            <p className="font-semibold mb-2">Exquisite Quality and Potency: Discover a vaping experience like no other with Apple Jacks Ghost disposable. Crafted with meticulous precision, these vape cartridges embody exquisite quality and potent effectiveness. From the selection of ingredients to the implementation of advanced extraction techniques, Apple Jacks Ghost carts ensure a consistent and smooth vaping journey you can rely on.</p>
            <p className="text-2xl font-semibold mb-2" style={{lineHeight: 1}}>BENEFITS OF GHOST CARTS DISPOSABLE</p>
            <p className="font-semibold mb-2">Heighten Your Sensations: Take your vaping experience to unprecedented levels with the captivating charm of train haze ghost carts. Let the aromatic ballet of apple and cinnamon enchant your taste buds, as the formidable THC potency propels you into a mesmerizing euphoric expedition. Embrace the melding of flavor and impact that Apple Jacks Ghost presents, and revolutionize your vaping journey with a hint of refined artistry.</p>
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">RELATED PRODUCTS</h2>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-16">
            {new Array(3).fill(1).map((product, idx) => <Product key={`product_${idx}`} thumb='/images/Mockup_Product.webp' />)}
          </div>
        </div>
      </div>
      <div className="lg:w-1/5 w-0 lg:border-s-2 lg:border-gray-300"></div>
    </div>
  );
}

export default ProductDetail;
