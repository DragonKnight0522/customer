"use client"

import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import FsLightbox from 'fslightbox-react';

const ProductView = ({
  thumb
} : {
  thumb: string
}) => {
  const [toggler, setToggler] = React.useState(false);
  const [detail, setDetail] = React.useState({
    top: 0,
    left: 0,
    opacity: 0
  });

  
  React.useEffect(() => {
    const container = document.getElementById("imgContainer");
    const imgDetail = document.getElementById("imgDetail");

    if (container && imgDetail) {
      const handleMouseOver = (e: MouseEvent) => {
        const offsetX = e.clientX - container.getBoundingClientRect().left;
        const offsetY = e.clientY - container.getBoundingClientRect().top;
        
        if (offsetX > 0 && offsetY > 0) {
          const left = (1000 - container.getBoundingClientRect().width) * (offsetX / container.getBoundingClientRect().width);
          const top = (imgDetail.getBoundingClientRect().height - container.getBoundingClientRect().height) * (offsetY / container.getBoundingClientRect().height);
          setDetail({left: -left, top: -top, opacity: 1});
        }
      }

      const handleDefault = (e: MouseEvent) => {
        setDetail({left: 0, top: 0, opacity: 0});
      }

      container.addEventListener("mousemove", handleMouseOver);
      container.addEventListener("mouseout", handleDefault);

      return () => {
        container.removeEventListener("mousemove", handleMouseOver);
        container.removeEventListener("mouseout", handleDefault)
      }
    }
  }, []);

  return (
    <div className="relative">
      <div className="absolute mt-2 ms-2 bg-orange-400 inline-block px-5 text-xl py-2 rounded-md font-bold text-white z-10">Sale!</div>
      <div className="absolute w-9 h-9 bg-white right-2 top-2 rounded-full cursor-pointer flex z-10" onClick={() => setToggler(!toggler)}>
        <FontAwesomeIcon icon={faSearch} size='lg' className="m-auto" />
      </div>
      <div id='imgContainer' className="relative overflow-hidden">
        <Image src={thumb} height={500} width={500} alt='' />
        <div id='imgDetail' className="absolute bg-white" style={{width: 1000, top: detail.top, left: detail.left, opacity: detail.opacity}}>
          <Image src={thumb} height={1000} width={1000} alt='' />
        </div>
      </div>
      <FsLightbox
        toggler={toggler}
        sources={[thumb]}
        type="image"
      />
    </div>
  );
}

export default ProductView;
