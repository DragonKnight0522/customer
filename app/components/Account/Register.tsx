"use client"
import React from 'react';
import { Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Link from "next/link";

const Register = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">REGISTER</h2>
      <div className="border-gray-300 px-6 pt-10 pb-6 rounded-md" style={{borderWidth: '1px'}}>
        <div className="mb-2">
          <Input variant="static" label="Email address" crossOrigin={undefined} />
        </div>
        <p className="mb-4 font-semibold">A link to set a new password will be sent to your email address.</p>
        <p className="mb-1 font-semibold">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href={"/privacy-policy"} className="text-green-700">privacy policy</Link>.</p>
        <div>
          <button className="inline-block group border-black hover:border-white hover:bg-gray-200 border-2 py-2 px-5 rounded-full transition-all hover:px-4 mb-2 me-4">
            <span className="font-semibold text-xl">Register</span>
            <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
