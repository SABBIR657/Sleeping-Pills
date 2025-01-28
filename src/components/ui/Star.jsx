import { FaStar } from "react-icons/fa";

const FiveStarRating = () => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default FiveStarRating;
