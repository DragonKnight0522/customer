"use client"

import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import FsLightbox, { FsLightboxProps } from 'fslightbox-react';

const ProductView = ({
  thumb
} : {
  thumb: string
}) => {
  const [toggler, setToggler] = React.useState(false);

  return (
    <div className="relative">
      <div className="absolute mt-2 ms-2 bg-orange-400 inline-block px-5 text-xl py-2 rounded-md font-bold text-white z-10">Sale!</div>
      <div className="absolute w-9 h-9 bg-white right-2 top-2 rounded-full cursor-pointer flex" onClick={() => setToggler(!toggler)}>
        <FontAwesomeIcon icon={faSearch} size='lg' className="m-auto" />
      </div>
      <Image src={thumb} height={500} width={500} alt='' />

      <FsLightbox
        toggler={toggler}
        sources={[thumb]}
        type="image"
      />
    </div>
  );
}

export default ProductView;
