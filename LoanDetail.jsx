import React from 'react';

const LoanDetail = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-full max-w-lg bg-white rounded-xl p-6  ">
        {/* Bank Header */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-pink-500 rounded mr-4"></div>
          <div className="w-0.5 h-5 bg-gray-300"></div>
          <h3 className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2 pl-4">ABC Bank</h3>
        </div>

        {/* Applicant Details */}
        <div className="border-b  border-gray-300 border-dashed pb-4 mb-4">
          <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Applicant Name</p>
          <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">John Doe</p>
        </div>

        {/* Loan Details */}
        <div className="grid grid-cols-3 gap-4 border-b  border-gray-300 border-dashed  pb-4 mb-4">
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Property Value</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">₹ 1,00,00,000</p>
          </div>
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Loan Amount</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">₹ 80,00,000</p>
          </div>
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Interest</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">10%</p>
          </div>
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Tenure</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">20 years</p>
          </div>
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Loan Type</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">Residential</p>
          </div>
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Estimated Monthly EMI</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">₹ 33,458</p>
          </div>
        </div>

        {/* Other Info */}
        <div className="grid grid-cols-3 gap-4  border-b  border-gray-300 border-dashed  pb-4 mb-4">
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Ongoing Loan</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">No</p>
          </div>
          <div>
            <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Ongoing Dispute</p>
            <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left pt-2">No</p>
          </div>
        </div>

        {/* Disbursal Account */}
        <div className="border-b  border-gray-300 border-dashed  pb-4 mb-6">
          <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left">Disbursal Account</p>
          <p className="font-space-grotesk text-lg font-bold leading-[17.86px] text-left py-2">Your bank <span className=' text-gray-400'> •••• 1234</span></p>
          <p className="text-gray-500 font-space-grotesk text-sm font-normal leading-[15.31px] text-left py-2">Current balance</p>
          <p className="font-semibold text-gray-400 text-lg">₹ 1,80,00,000</p>
        </div>

        {/* Info Text */}
        <p className="text-sm text-gray-500  mb-4  pt-8">
        Once you have pledged your land for a certain amount, you cannot be sold or invested upon.
        </p>

        {/* Select Offer Button */}
        <div className="text-center">
    
        <button className="mt- w-full bg-blue-500 text-white py-3 rounded-md">
        Select offer
      </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDetail;
