"use client"
import React from 'react';
import { Input, Checkbox } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-8">LOGIN</h2>
      <div className="border-gray-300 px-6 pt-10 pb-6 rounded-md" style={{borderWidth: '1px'}}>
        <div className="mb-8">
          <Input variant="static" label="Username or email address" crossOrigin={undefined} />
        </div>
        <div className="mb-4">
          <Input variant="static" label="Password" type="password" crossOrigin={undefined} icon={<FontAwesomeIcon icon={faEye} />} />
        </div>
        <div>
          <button className="inline-block group border-black hover:border-white hover:bg-gray-200 border-2 py-2 px-5 rounded-full transition-all hover:px-4 mb-2 me-4">
            <span className="font-semibold text-xl">Log in</span>
            <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
          </button>
          <Checkbox label="Remember Me" crossOrigin={undefined} />
        </div>
        <Link href={"/my-account/lost-password"} className="text-green-700 font-bold">Lost your password?</Link>
      </div>
    </div>
  );
}

export default Login;
