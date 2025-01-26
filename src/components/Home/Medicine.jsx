
import MedicineCard from "../ui/MedicineCard";

const Medicine = () => {
  const handleViewInfo = () => {
    alert("view Now clicked");
  };
  const handleBuyNow = () => {
    alert("buy now");
  };

  const cardData = Array.from({length: 12}, (_,index)=>({
    id: index,
    title: `Zopiclone 7.5 mg / 10 mg${index+1}`,
    imgSrc:"https://www.sleepingpillsuk.com/product-img/zopiclone.png",
       description:`Zopiclone, sold under brand names such as Imovane and Datolan, is a sleep inducing medication for the treatment of insomnia. Treatment with zopiclone provides relief for people suffering from insomnia by allowing them to get to sleep quickly and stay asleep throughout the night ${index+1}.`,
      radioOptions:["7.5mg", "10mg"],
       dropdownOptions:["0.00: 30 Pills", "0.00: 60 Pills", "0.00: 100 Pills","0.00: 120 Pills", "0.00: 150 Pills", "0.00: 1800 Pills" ],
       onViewInfo:{handleViewInfo},
       onBuyNow:{handleBuyNow},
  }))
  return (
    <div className="mt-7 p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cardData.map((card)=>(
       <MedicineCard
          key={card.id}
          title={card.title}
          imgSrc={card.imgSrc}
          description={card.description}
          radioOptions={card.radioOptions}
          dropdownOptions={card.dropdownOptions}
          onViewInfo={handleViewInfo}
          onBuyNow={handleBuyNow}
       />
      ))}

{/* <MedicineCard
        title="Zopiclone 7.5 mg / 10 mg"
        imgSrc="https://www.sleepingpillsuk.com/product-img/zopiclone.png"
       description="Zopiclone, sold under brand names such as Imovane and Datolan, is a sleep inducing medication for the treatment of insomnia. Treatment with zopiclone provides relief for people suffering from insomnia by allowing them to get to sleep quickly and stay asleep throughout the night."
      radioOptions={["7.5mg", "10mg"]}
       dropdownOptions={["0.00: 30 Pills", "0.00: 60 Pills", "0.00: 100 Pills","0.00: 120 Pills", "0.00: 150 Pills", "0.00: 1800 Pills" ]}
       onViewInfo={handleViewInfo}
       onBuyNow={handleBuyNow}
      /> */}
    
    </div>
  );
};

export default Medicine;
