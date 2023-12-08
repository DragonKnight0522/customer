import React from 'react';
import Product2 from '@/app/components/common/Product2';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import Pagination from '@/app/components/common/Pagination';

const GhostExtracts = () => {
  return (
    <div className="row lg:flex block">
      <div className="lg:w-4/5 w-full lg:pe-16 pt-14 pb-8">
        <div className="font-semibold flex align-middle">
          <Link href={"/"} className="text-green-500">Home</Link>
          <span className="mx-1">
            <FontAwesomeIcon icon={faAngleDoubleRight} size="xs" />
          </span>
          <span>Ghost Extracts</span>
        </div>
        <h1 className="text-3xl font-bold">GHOST EXTRACTS</h1>
        <h2 className="text-3xl font-semibold my-2">WHAT IS GHOST EXTRACTS?</h2>
        <p className="font-semibold">Understanding the Essence: Decoding Ghost extracts: Exploring the Craftsmanship Behind Premium Cannabis Products Unveiling the Secrets: What Sets Ghost disposable Apart in the Cannabis Market?</p>
        <h2 className="text-3xl font-semibold my-2">HOW TO USE GHOST CARTS</h2>
        <p className="font-semibold">To truly elevate your cannabis experience with Ghost, understanding the optimal consumption techniques is key. Whether you prefer concentrates, cartridges, or edibles, mastering the art of using Ghost will unlock a world of flavor, potency, and satisfaction.</p>
        <h2 className="text-3xl font-semibold my-2">WHERE TO BUY GHOST EXTRACTS</h2>
        <p className="font-semibold">When it comes to purchasing Ghost Extract, authenticity and quality are paramount. To ensure an exceptional experience, it is crucial to source Ghost carts from trusted and reputable Supplier which is the official <Link href={"/"} className="text-green-500">ghost carts website</Link>.</p>
        <h2 className="text-3xl font-semibold my-2">THE RANGE OF GHOST DISPOSABLE PRODUCTS</h2>
        <p className="font-semibold mb-4">Exploring Options and Varieties: From Shatter to Sauce: Exploring Ghost’ Diverse Cannabis Offerings Indulge in a World of Choices: Ghost Product Range for Every Taste</p>
        <p className="font-semibold">We takes pride in offering a diverse array of cannabis products to cater to every taste and preference. Whether you seek the bold and potent experience of shatter or the smooth and flavorful journey of sauce, Ghost has something to captivate every palate. Immerse yourself in their extensive product range and explore the nuances of different strains and extraction methods.</p>
        <h2 className="text-3xl font-semibold my-2">THE SCIENCE BEHIND GHOST DISPOSABLES EXTRACT</h2>
        <p className="font-semibold mb-4">Quality, Purity, and Potency: Unveiling the Science: How Ghost carts Achieves Unmatched Quality Pure and Potent: The Commitment to Excellence in Ghost Products</p>
        <p className="font-semibold">Behind the scenes, Ghost Extract merges artistry with science to create products of unparalleled quality, purity, and potency. Their rigorous extraction processes, strict quality control measures, and state-of-the-art facilities ensure that each product maintains the highest standards.</p>
        <div className="flex justify-between my-5">
          <p className="text-sm text-gray-500">Showing 1-9 of 32 results</p>
          <select className="outline-none bg-gray-200 text-gray-600 py-1 ps-2 pe-1 text-sm rounded-md">
            <option value="popularity">Sort by popularity</option>
            <option value="latest">Sort by latest</option>
            <option value="low to high">Sort by price: low to high</option>
            <option value="high to low">Sort by price: high to low</option>
          </select>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-12 pb-16">
          {new Array(9).fill(1).map((product, idx) => <Product2 key={`product_${idx}`} thumb='/images/Mockup_Product.webp' />)}
        </div>
        <Pagination />
      </div>
      <div className="lg:w-1/5 w-0 lg:border-s-2 lg:border-gray-300"></div>
    </div>
  );
}

export default GhostExtracts;
