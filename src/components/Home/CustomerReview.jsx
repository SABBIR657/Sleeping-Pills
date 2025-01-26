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

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
