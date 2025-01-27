import React from "react";
import FeedbackCard from "../ui/FeedbackCard";

const CustomerFeedback = () => {
  const feedbackData = [
    {
      image: "",
      star: 5,
      name: "Ryan Harnick",
      date: "January 25, 2025",
      description:
        "Brilliant company I was not sure to start with but I paid and got what I needed and would recommend to my friends and family. If I had the money I would be purchasing today but when I do get paid I will use this company again.",
    },
    {
      image: "",
      star: 4,
      name: "Jane Ssrah",
      date: "February 10, 2025",
      description: "Great value for the price. Will purchase again.",
    },
    {
      image: "",
      star: 3,
      name: "Robert Kirsten Austen",
      date: "March 5, 2025",
      description:
        "Best thing since sliced bread!! My eyesight is not great and I can't see anything.",
    },
    {
      image: "",
      star: 3,
      name: "Kenny",
      date: "March 5, 2025",
      description:
        "I have used SPUK numerous times in the past , this is the first time in a year or more so i was dubious about paying via bank transfer ( i had always payed credit card before ) . A nice suprise 3 working days later when my order arrived . Good to know when there is no National health service here in the UK anymore that service still exsists . Well done SPUK",
    },
    {
      image: "",
      star: 3,
      name: "Craig Clark",
      date: "March 5, 2025",
      description: "Excellent site who deliver exactly what they say they will. I would never have even attempted to order this type of medication online before as itâ€™s an absolute minefield of dodgy vendors, unscrupulous practices and counterfeit meds. My favourite thing is how responsive customer service is they never take more than 24 hours to reply to every single email you send. My only criticism might be it sometimes takes way longer than it should to arrive but eventually you always get what you paid for.",
    },
    {
      image: "",
      star: 3,
      name: "Robert Brown",
      date: "March 5, 2025",
      description: "Decent quality, but there's room for improvement.",
    },
    {
      image: "",
      star: 3,
      name: "Robert Brown",
      date: "March 5, 2025",
      description: "Decent quality, but there's room for improvement.",
    },
    {
      image: "",
      star: 3,
      name: "Robert Brown",
      date: "March 5, 2025",
      description: "Decent quality, but there's room for improvement.",
    },
    {
      image: "",
      star: 3,
      name: "Robert Brown",
      date: "March 5, 2025",
      description: "Decent quality, but there's room for improvement.",
    },
    {
      image: "",
      star: 3,
      name: "Robert Brown",
      date: "March 5, 2025",
      description: "Decent quality, but there's room for improvement.",
    },
  ];
  return (
    <div>
   <div className="pt-3 text-black font-bold">
   <p >Latest Blog Post</p>
   <hr/>
   </div>
    <div className="flex flex-col border shadow-lg rounded p-4   gap-4   py-10">
    
        <div className="text-[1.5rem] font-bold text-[#112F46]">
        <h2>Customer Reviews</h2>
        </div>
      {feedbackData.map((feedback, index) => (
        <FeedbackCard
          key={index}
          image={feedback.image}
          star={feedback.star}
          name={feedback.name}
          date={feedback.date}
          description={feedback.description}
        />
      ))}
    </div>
    </div>
  );
};

export default CustomerFeedback;
