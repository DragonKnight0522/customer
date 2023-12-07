import React from 'react';
import Login from '../components/Account/Login';
import Register from '../components/Account/Register';

const MyAccount = () => {
  return (
    <div className="row flex">
      <div className="lg:w-4/5 w-full lg:pe-16 pt-14 pb-8">
        <h1 className="text-3xl font-bold mb-8">MY ACCOUNT</h1>
        <div className="grid grid-cols-2 gap-8">
          <Login />
          <Register />
        </div>
      </div>
      <div className="lg:w-1/5 w-0 lg:border-s-2 lg:border-gray-300"></div>
    </div>
  );
}

export default MyAccount;
