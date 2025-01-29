/* eslint-disable react/prop-types */
import { useState } from "react";

const HoverCard = ({ image, title }) => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      style={{
        backgroundColor: isTitleHovered ? "#002039" : isCardHovered ? "#2F458F" : "#097AA1",
      }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 bg-[#002039]"
        />
      </div>

      <div className="p-4">
        <h2
          className=" font-semibold text-white hover:text-white transition-colors duration-300"
          onMouseEnter={(e) => {
            e.stopPropagation(); // Prevents triggering card hover
            setIsTitleHovered(true);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation(); // Ensures title hover does not interfere with card hover
            setIsTitleHovered(false);
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default HoverCard;
