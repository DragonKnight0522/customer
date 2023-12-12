"use client"
import React from 'react';
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { CountryRegionData } from 'react-country-region-selector';

const page = () => {
  return (
    <>
      <p className="text-2xl font-semibold mb-6">SHIPPING ADDRESS</p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 mb-8">
        <div className="md:mb-0 mb-8">
          <Input variant="static" label="First name *" crossOrigin={undefined} />
        </div>
        <div>
          <Input variant="static" label="Last name *" crossOrigin={undefined} />
        </div>
      </div>
      <div className="mb-8">
        <Input variant="static" label="Company name (optional)" crossOrigin={undefined} />
      </div>
      <div className="mb-8">
        <Select variant="static" label="Country / Region *" placeholder={''}>
          {CountryRegionData.map(country => <Option key={country[0]}>{country[0]}</Option>)}
        </Select>
      </div>
      <div className="mb-8">
        <Input variant="static" label="Street address *" crossOrigin={undefined} />
        <Input variant="static" label="" crossOrigin={undefined} />
      </div>
      <div className="mb-8">
        <Input variant="static" label="Town / City *" crossOrigin={undefined} />
      </div>
      <div className="mb-2">
        <Input variant="static" label="Postcode / ZIP *" crossOrigin={undefined} />
      </div>
      <div>
        <button className="inline-block group border-black hover:border-white hover:bg-gray-200 border-2 py-2 px-5 rounded-full transition-all hover:px-4 mb-2 me-4">
          <span className="font-semibold text-xl">Save address</span>
          <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
        </button>
      </div>
    </>
  );
}

export default page;
