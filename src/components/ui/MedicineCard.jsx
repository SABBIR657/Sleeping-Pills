/* eslint-disable react/prop-types */

const MedicineCard = ({
  title,
  imgSrc,
  description,
  radioOptions,
  dropdownOptions,
  onViewInfo,
  onBuyNow,
}) => {
  return (
    <div className="max-w-sm border rounded-lg shadow-lg p-4 bg-white">
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>

      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4 mt-3"
      />

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4 ">
        {radioOptions.map((option, index) => (
          <label key={index} className="inline-flex items-center mr-4 ">
            <input
              type="radio"
              name="options"
              value={option}
              className="mr-2 "
            />
            {option}
          </label>
        ))}
      </div>

      <div className="mb-4 ">
        <select className="w-full border rounded p-2">
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onViewInfo}
          className="bg-[#08233B] text-white px-4 py-2 rounded"
        >
          View Info
        </button>
        <div className="pl-5">
          <button
            onClick={onBuyNow}
            className="bg-[#08233B] text-white px-4 py-2 rounded"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
