import { useState } from 'react';
import { Star } from 'lucide-react';

export default function CustomerReview() {
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);

  const handleStarHover = (index) => {
    setHoveredStar(index);
  };

  const handleStarClick = (index) => {
    setSelectedStar(index);
  };

  return (
    <div className='pt-6'>
        <div>
            <h2 className='text-[#112F46] font-bold text-[22px]'>Add a review</h2>
            <p className='text-[#112F46] font-bold pb-4'>Your email address will not be published. Required field are marked *</p>
        </div>
    <div className="w-full mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Your Rating</h2>

      <div className="flex mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={28}
            className={`cursor-pointer transition-colors ${
              (hoveredStar >= star || selectedStar >= star) ? 'text-yellow-500' : 'text-gray-500'
            }`}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={() => setHoveredStar(0)}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Write your review here"
            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-center border border-gray-300 bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
      {/* Left Side */}
      <div className="flex items-center mr-4">
        <input
          type="checkbox"
          id="not-a-robot"
          className="w-5 h-5 rounded border-gray-400 focus:ring-blue-500"
        />
        <label
          htmlFor="not-a-robot"
          className="ml-2 text-gray-800 text-base font-medium"
        >
          I'm not a robot
        </label>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 w-32 h-16 rounded-md flex items-center justify-center border border-gray-300">
          <span className="text-gray-500 text-sm font-medium">reCAPTCHA</span>
        </div>
        <p className="mt-1 text-xs text-gray-500">Privacy - Terms</p>
      </div>
    </div>

        <button
          type="submit"
          className=" bg-[#002039] p-4 mt-2 text-white py-2  hover:bg-[#E65700] transition"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
