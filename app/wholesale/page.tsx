import React from 'react';
import WholeSale from '../components/WholeSale';

const page = () => {
  return (
    <div>
      <div className="text-center" style={{backgroundImage: `url("/images/C16CBFD5-2262-4938-8179-06A5C5FF27BA.jpeg")`, backgroundPosition: '50%', backgroundSize: 'cover', height: '300px'}}>
        <div className="px-64 py-8 bg-black bg-opacity-30 inline-block mt-28 rounded-full">
          <h2 className="text-5xl text-white font-semibold">WHOLESALE</h2>
        </div>
      </div>
      <div className="row py-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-8">BUY GHOST CARTS IN BULK</h2>
            <p className="font-semibold mb-6">If you are a state-licensed medicinal or recreational cannabis shop or delivery service in the USA our stores are located in  Los Angeles, California, We are proud to serve our patients and customers with the best and nothing more. Please contact us below and we will send you our wholesale price sheet and menu ASAP.</p>
            <p className="font-semibold">If you are a current or new ghost wholesale customer and would like to place a bulk order, please do so through the contact form.</p>
          </div>
          <div>
            <WholeSale />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
