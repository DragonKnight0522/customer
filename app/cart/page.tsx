import React from 'react';

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 uppercase">CART</h1>
      <h2 className="text-white bg-light-blue-500 mb-8 p-4 font-bold">
        <p>A Minimum of USD175.00 is required before checking out.</p>
        <p>{`Current cart's total: USD20.00`}</p>
      </h2>
    </div>
  );
}

export default page;
