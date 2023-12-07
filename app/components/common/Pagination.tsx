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
    <ButtonGroup variant="outlined" className="justify-center">
      <IconButton onClick={prev}>
        <FontAwesomeIcon icon={faAngleLeft} className="h-4 w-4" />
      </IconButton>
      <IconButton {...getItemProps(1)}>1</IconButton>
      <IconButton {...getItemProps(2)}>2</IconButton>
      <IconButton {...getItemProps(3)}>3</IconButton>
      <IconButton {...getItemProps(4)}>4</IconButton>
      <IconButton {...getItemProps(5)}>5</IconButton>
      <IconButton onClick={next}>
        <FontAwesomeIcon icon={faAngleRight} className="h-4 w-4" />
      </IconButton>
    </ButtonGroup>
  );
}

export default Pagination;
