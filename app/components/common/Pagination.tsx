"use client"
import React from 'react';
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

const Pagination = () => {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index: number) => ({
    className: active === index ? "bg-gray-100 text-gray-900" : "",
    onClick: () => setActive(index),
  });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };

  return (
    <ButtonGroup variant="outlined" className="justify-center" placeholder={''}>
      <IconButton onClick={prev} placeholder={''}>
        <FontAwesomeIcon icon={faAngleLeft} className="h-4 w-4" />
      </IconButton>
      <IconButton {...getItemProps(1)} placeholder={''}>1</IconButton>
      <IconButton {...getItemProps(2)} placeholder={''}>2</IconButton>
      <IconButton {...getItemProps(3)} placeholder={''}>3</IconButton>
      <IconButton {...getItemProps(4)} placeholder={''}>4</IconButton>
      <IconButton {...getItemProps(5)} placeholder={''}>5</IconButton>
      <IconButton onClick={next} placeholder={''}>
        <FontAwesomeIcon icon={faAngleRight} className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  );
}

export default Pagination;
