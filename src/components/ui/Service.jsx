/* eslint-disable react/prop-types */

const HoverCard = ({ image, title }) => {
  return (
    <div className=" w-full rounded-2xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-4 bg-[#097AA1]">
        <h2 className="text-xl font-semibold  text-white">{title}</h2>
      </div>
    </div>
  );
};

export default HoverCard;