import { useState } from 'react'
import React from 'react'
import './index.css'

function App() {
  const [selectedBank, setSelectedBank] = useState(null);

  const banks = [
    {
      name: 'bank1',
      title: 'Bank of Naroda',
      interest: '10%',
      ltv: '80%',
      note: 'Retainer available',
      shape: 'rectangle', 
    },
    {
      name: 'bank2',
      title: 'Amazing Bank',
      interest: '8%',
      ltv: '75%',
      note: '',
      shape: 'triangle',
    },
    {
      name: 'bank3',
      title: 'ACACB',
      interest: '7.4%',
      ltv: '70%',
      note: '',
      shape: 'circle', 
    },
  ];

  const handleSelectBank = (bankName) => {
    setSelectedBank(bankName);
  };

  return (
    <>
      <div className="max-w-md mx-auto h-full bg-white flex flex-col my-12">
        {/* Bank Selection */}
        <div className="space-y-8">
          {banks.map((bank) => (
            <div className="flex items-center justify-between pt-6" key={bank.name} onClick={() => handleSelectBank(bank.name)}>
              <div className="flex items-center space-x-4">
                {/* Shape Rendering */}
                {bank.shape === 'rectangle' && <div className="w-[26px] h-[26px] bg-pink-500 rounded"></div>}
                {bank.shape === 'triangle' && (
                  <div className="w-6 h-6 border-l-[15px] border-r-[15px] border-b-[25px] border-transparent border-b-blue-500"></div>
                )}
                {bank.shape === 'circle' && <div className="w-6 h-6 bg-blue-400 rounded-full"></div>}

                <div className="w-0.5 h-5 bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold text-lg">{bank.title}</h3>
                  <p className="text-sm text-gray-500">
                    LTV: <span className="font-bold text-blue-600">{bank.ltv}</span>
                    {bank.note && (
                      <>
                        <br />
                        <span className="text-blue-500">{bank.note}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="text-right flex gap-6">
                <p className="text-sm text-gray-500">Interest: {bank.interest}</p>
                <button
                  onClick={() => handleSelectBank(bank.name)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedBank === bank.name ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                  }`}
                >
                  {selectedBank === bank.name && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Information */}
        <div className="mt-32 pl-0 pt-16">
          <p className="text-sm text-gray-500">
            Our banking partners are preparing loan offers tailor made for your opportunity
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center mt-4">
          <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-md">
            View key fact sheet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
