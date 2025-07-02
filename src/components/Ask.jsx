import React from 'react';
import "./fontStyles.css"

const Ask = () => {
  return (
    <section className="backgroundCard3 bg-[#5cdab7] p-8 rounded-lg text-center mb-16 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Ask</h2>
      <p className="text-gray-900 font-[personal2] mb-6 leading-relaxed">
        We’re actively engaging with: Platforms seeking to reduce compliance burden, Developers looking to build on ethical infra, Content networks ready to empower creators, and Funders aligned with data sovereignty and decentralization. Let’s co-create the future.
      </p>
      <p className="text-gray-600">→ Contact us via the form below or email: andrewm@d4w.ca </p>

      {/* 👇 NEW CONTENT STARTS HERE */}
      <div className="mt-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">For Collaborations</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://maui-d4w-wbccm5l.gamma.site/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-[#21398C] hover:bg-[#0076b8] text-white font-medium py-2 px-6 rounded-md transition duration-200">
              Investors
            </button>
          </a>
          <a 
            href="https://maui-d4w-wbccm5l.gamma.site/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="bg-[#2A0C4E] hover:bg-[#0076b8] text-white font-medium py-2 px-6 rounded-md transition duration-200">
              Partnerships
            </button>
          </a>
        </div>
      </div>
      {/* 👆 NEW CONTENT ENDS HERE */}
      
    </section>
  );
};

export default Ask;
