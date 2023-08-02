import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Tax Planning
            </h3>
            <p className="text-gray-700">
              Our expert team can help you with effective tax planning strategies to minimize your tax liability.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Financial Consulting
            </h3>
            <p className="text-gray-700">
              Get professional financial consulting to make informed decisions for your business growth.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Accounting Services
            </h3>
            <p className="text-gray-700">
              Our accounting services help you maintain accurate financial records and compliance.
            </p>
          </div>
          
          {/* Add more services here */}
        </div>
      </div>
    </div>
  );
};

export default Services;
