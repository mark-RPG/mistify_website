import React from 'react'
import Image from 'next/image'

const ProductPage1 = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen pt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Section: Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-80 md:h-[500px]">
            <Image
              src="/humidifier.png"
              alt="Mistify Smart Humidifier"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mistify Smart Humidifier</h1>
          <p className="text-lg text-gray-600 mb-6">
            Meet <span className="font-semibold text-gray-800">Mistify</span> — a locally built smart humidifier designed for comfort, control, and style. 
            Mistify not only keeps your room perfectly balanced but also enhances your space with customizable lighting and intelligent automation.
          </p>

          <p className="text-xl font-semibold text-gray-800 mb-4">Smart Features:</p>
          <ul className="list-disc list-inside mb-6 text-gray-600 space-y-2">
            <li>Remote control via mobile app for effortless management</li>
            <li>Real-time room humidity and temperature monitoring</li>
            <li>Two operating modes:
              <ul className="list-disc list-inside ml-5">
                <li><span className="font-medium text-gray-800">Automatic Mode</span> – adjusts mist output to maintain your target humidity</li>
                <li><span className="font-medium text-gray-800">Manual Mode</span> – set timers and control mist levels your way</li>
              </ul>
            </li>
            <li>Ambient lighting with multiple color modes to match your mood or decor</li>
            <li>Energy-efficient performance with whisper-quiet operation</li>
            <li>Proudly designed and assembled locally</li>
          </ul>

          <div className="flex gap-4">
            <a href="/buy" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage1;
