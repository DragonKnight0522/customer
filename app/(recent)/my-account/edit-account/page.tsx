"use client"
import React from 'react';
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';

const page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 mb-8">
        <div className="md:mb-0 mb-8">
          <Input variant="static" label="First name *" crossOrigin={undefined} />
        </div>
        <div>
          <Input variant="static" label="Last name *" crossOrigin={undefined} />
        </div>
      </div>
      <div className="mb-8">
        <Input variant="static" label="Display name *" crossOrigin={undefined} />
        <p className="italic">This will be how your name will be displayed in the account section and in reviews</p>
      </div>
      <div className="mb-4">
        <Input variant="static" label="Email address *" crossOrigin={undefined} />
      </div>
      <p className="font-bold mb-4">Password change</p>
      <div className="mb-8">
        <Input variant="static" label="Current password (leave blank to leave unchanged)" type="password" crossOrigin={undefined} icon={<FontAwesomeIcon icon={faEye} />} />
      </div>
      <div className="mb-8">
        <Input variant="static" label="New password (leave blank to leave unchanged)" type="password" crossOrigin={undefined} icon={<FontAwesomeIcon icon={faEye} />} />
      </div>
      <div className="mb-2">
        <Input variant="static" label="Confirm new password" type="password" crossOrigin={undefined} icon={<FontAwesomeIcon icon={faEye} />} />
      </div>
      <div>
        <button className="inline-block group border-black hover:border-white hover:bg-gray-200 border-2 py-2 px-5 rounded-full transition-all hover:px-4 mb-2 me-4">
          <span className="font-semibold text-xl">Save changes</span>
          <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
        </button>
      </div>
    </>
  );
}

export default page;