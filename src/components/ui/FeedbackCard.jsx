/* eslint-disable react/prop-types */
const FeedbackCard = ({ image, star, name, date, description }) => {
  // Helper function to get the first letter of the name
  const getInitial = (name) => name ? name.charAt(0).toUpperCase() : "";

  return (
    // <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white p-4">
    //   <div className="flex items-center mb-4">
    //   <div>
    //   {image ? (
    //       <img
    //         src={image}
    //         alt={name}
    //         className="w-16 h-16 rounded-full object-cover border border-gray-300"
    //       />
    //     ) : (
    //       <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-white">
    //         {getInitial(name)}
    //       </div>
    //     )}
    //   </div>
    //   <div className="border">
    //   <div className="flex items-center mb-4">
    //     {[...Array(star)].map((_, index) => (
    //       <span key={index} className="text-yellow-500 text-lg">★</span>
    //     ))}
    //   </div>
    //   <div className="ml-4 flex">
    //       <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          
    //       <p className="text-sm text-gray-500">{date}</p>
    //     </div>
    //     <div>
    //     <p className="text-gray-600 text-sm">{description}</p>
    //     </div>
    //   </div>
      
        
    //   </div>
     
      
    // </div>
    // <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white p-4">
    //   <div className="flex items-center mb-4">
    //     {image ? (
    //       <img
    //         src={image}
    //         alt={name}
    //         className="w-16 h-16 rounded-full object-cover border border-gray-300"
    //       />
    //     ) : (
    //       <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-white">
    //         {getInitial(name)}
    //       </div>
    //     )}
    //     <div className="ml-4">
    //       <div className="flex items-center">
    //         {[...Array(star)].map((_, index) => (
    //           <span key={index} className="text-yellow-500 text-lg">
    //             ★
    //           </span>
    //         ))}
    //         <h3 className="text-lg font-semibold text-gray-800 ml-2">{name}</h3>
    //         <span className="text-sm text-gray-500 ml-2">- {date}</span>
    //       </div>
         
    //     </div>
    //   </div>
    //     <p className="text-gray-600 text-sm">{description}</p>
      
    // </div>
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <div className="flex ">

        
    <div className="flex items-center mb-4">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
      ) : (
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-white">
          {getInitial(name)}
        </div>
      )}
    </div>
    <div className="border w-full p-3 rounded-lg">
      <div className="flex items-center mb-2">
        {[...Array(star)].map((_, index) => (
          <span key={index} className="text-yellow-500 text-lg">
            ★
          </span>
        ))}
        <h3 className="text-lg font-semibold text-gray-800 ml-2">{name}</h3>
        <span className="text-sm text-gray-500 ml-2">- {date}</span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
    </div>
  </div>
  );
};

export default FeedbackCard;
