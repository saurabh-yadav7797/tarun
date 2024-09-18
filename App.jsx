import { useState } from 'react'

import './index.css'
function App() {
  

  return (
    <>
      
      <div className="max-w-md mx-auto h-full bg-white flex flex-col ">
        {/* Bank Selection */}  
<div className="space-y-8">
  {/* Bank 1 */}
  <div className="flex items-center justify-between pt-10 ">
    <div className="flex items-center space-x-4">
      <div className="w-[26px] h-[26px] bg-pink-500 rounded"></div>
      <div className="w-0.5 h-5 bg-gray-300"></div>
      <div>
        <h3 className="font-semibold text-lg">Bank of Naroda</h3>
        <p className="text-sm text-gray-500">
          LTV: <span className="font-bold text-blue-600">80%</span>
          <br />
          <span className="text-green-500">Retainer available</span>
        </p>
      </div>
    </div>
    <div className="text-right flex gap-6">
      <p className="text-sm text-gray-500">Interest: 10%</p>
      <input type="radio" className="form-radio text-blue-600" name="bankSelection" />
    </div>
  </div>

  {/* Bank 2 */}
  <div className="flex items-center justify-between pt-6">
    <div className="flex items-center space-x-4">
      <div className="w-6 h-6 border-l-[15px] border-r-[15px] border-b-[25px] border-transparent border-b-blue-500"></div>
      <div className="w-0.5 h-5 bg-gray-300"></div>
      <div>
        <h3 className="font-semibold text-lg">Amazing Bank</h3>
        <p className="text-sm text-gray-500">
          LTV: <span className="font-bold text-blue-600">75%</span>
        </p>
      </div>
    </div>
    <div className="text-right flex gap-6">
      <p className="text-sm text-gray-500">Interest: 8%</p>
      <input type="radio" className="form-radio text-blue-600" name="bankSelection" />
    </div>
  </div>

  {/* Bank 3 */}
  <div className="flex items-center justify-between pt-8">
    <div className="flex items-center space-x-4">
      <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
      <div className="w-0.5 h-5 bg-gray-300"></div>
      <div>
        <h3 className="font-semibold text-lg">ACACB</h3>
        <p className="text-sm text-gray-500">
          LTV ratio: <span className="font-bold text-blue-600">70%</span>
        </p>
      </div>
    </div>
    <div className="text-right flex gap-6">
      <p className="text-sm text-gray-500">Interest: 7.4%</p>
      <input type="radio" className="form-radio text-blue-600" name="bankSelection" />
    </div>
  </div>
</div>


        {/* Information */}
        <div className="mt-32  pl-0 pt-16">
          <p className="text-sm text-gray-500">
            Our banking partners are preparing loan offers tailor made for your
            opportunity
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center mt-6">
        <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-md">
        View key fact sheet
      </button>
        </div>
      </div>
    

    </>
  )
}

export default App
