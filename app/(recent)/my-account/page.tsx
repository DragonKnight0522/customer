import React from 'react';
import Login from '@/app/components/Account/Login';
import Register from '@/app/components/Account/Register';

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">MY ACCOUNT</h1>
      <h2 className="text-white bg-cyan-400 mb-8 p-4 font-bold">Error: Please provide a valid email address.</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default page;
