import React from 'react';
import "./fontStyles.css"


const Team = () => (
  <section className=" backgroundCard3 text-center mb-16 px-4 bg-[#042780de] py-12 rounded-lg">
    <h2 className="text-2xl font-semibold text-white mb-8">Core Team</h2>

    {/* CEO Section */}
    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow-md w-[62vh]">
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
            <img
              src="/assets/images/andrew_CEO.jpg"
              alt="Andrew Mugridge"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="font-[personal2]">Andrew Mugridge – Founder & CEO</p>
          <p className="text-gray-700 text-sm font-sans">
            20+ years in capital markets, IP strategy, and AI/data infrastructure. Architect of MAUI’s vision.
          </p>
        </div>
      </div>
    </div>

    {/* Other Team Members */}
    <div className="mt-8 flex justify-center gap-8 flex-wrap lg:flex-nowrap">
      <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[300px] max-w-xs">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
          <img
            src="/assets/images/hugo_CTA.jpg"
            alt="Hugo O’Connor"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-[personal2]">Hugo O’Connor – Chief Technical Officer</p>
        <p className="text-gray-700 text-sm font-sans">
          Web3 strategist, former CSIRO/Data61 lead. Designs governance frameworks.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[300px] max-w-xs">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
          <img
            src="/assets/images/adil_al_raeesi_OGS.jpg"
            alt="Adil Ali Raessi"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-[personal2]">Adil Ali Raessi – Operations & Governance</p>
        <p className="text-gray-700 text-sm font-sans">
          Experienced in public sector innovation and regulatory alignment.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[300px] max-w-xs">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
          <img
            src="/assets/images/Mark_CFO.jpg"
            alt="Mark Campbell"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-[personal2]">Mark Campbell – Chief Financial Officer</p>
        <p className="text-gray-700 text-sm font-sans">
          MBA, CPA, former CFO at Data Axle. Oversees treasury, financial governance, and capital allocation strategies for scaling.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[300px] max-w-xs">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
          <img
            src="/assets/images/jon_ciseki_SAG.jpg"
            alt="Jon Cisecki"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-[personal2]">Jon Cisecki – Systems Advisor: Governance</p>
        <p className="text-gray-700 text-sm font-sans">
          Philosopher, focuses on decentralized governance logic.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-[300px] max-w-xs">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden">
          <img
            src="/assets/images/Bernadette_COS.jpg"
            alt="Fah Bernadette"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="font-[personal2]">Fah Bernadette – Chief of Staff</p>
        <p className="text-gray-700 text-sm font-sans">
          13+ years in VC and operations, handles internal alignment.
        </p>
      </div>
    </div>
  </section>
);

export default Team;
