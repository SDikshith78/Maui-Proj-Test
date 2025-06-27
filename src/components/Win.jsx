import React from 'react';
import "./fontStyles.css";

const Win = () => (
  <section className="backgroundCard1 mb-16 rounded-lg bg-[#00bbbb42] p-8">
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Who Wins with MAUI</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Platforms",
          points: [
            "Cut compliance and legal overhead by 50%+",
            "Retain control over data and users",
            "Launch services faster with plug-and-play modules",
          ],
        },
        {
          title: "Creators",
          points: [
            "Own their audience and IP",
            "Monetize across platforms with built-in licensing",
            "Keep more earnings—no middlemen or black-box algorithms",
          ],
        },
        {
          title: "Investors",
          points: [
            "Monetize through licensing, usage fees, and protocol royalties",
            "Gain exposure to the $100B+ digital rights & compliance market",
            "Invest early in compliant, live infrastructure with high barriers",
          ],
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="rounded-lg bg-white p-6 shadow-md"
        >
          <h3 className="mb-4 text-xl font-[personal2] text-gray-800">{item.title}</h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-sans">
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Win;
