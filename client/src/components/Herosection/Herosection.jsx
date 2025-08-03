import { Link } from "react-router-dom";
import Banner from "./Banner";
import OfferCard from "./OfferCard";

const offerData = [
  {
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/020/903/143/non_2x/shoe-sale-banner-vector.jpg",
    title: "Shoes",
    subtitle: "UP TO 50% OFF",
    link: "/footwear-4983c849c31b4bfea110cf65/shoes-143784b1c36d498d84615f58"
  },
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThVypuW7n4vhL6XQtTSADyXCK2fRUY7lrtEVoeMsaafMDTB742IYtqpNc2fdqM8xPteY&usqp=CAU",
    title: "Offer",
    subtitle: "UP TO 40% OFF",
    link:"/apparel-0e365be17a624654a415704c/topwear-310861f3255d419684d21ec9"
  },
  {
    imageUrl: "https://i.pinimg.com/736x/e8/df/f0/e8dff0ffbc9b1905b4f9342c95d36799.jpg",
    title: "Offer",
    subtitle: "0% interest",
                  
    link:"/Accessories-ce76ba519630409d97cb4f7a/Jewellery-fa05026e587b4b578c7675ab"
  },
];

const Herosection = () => {
  return (
    <section className="w-full mx-auto p-2 md:pr-6 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Banner Section */}
        <div className="md:col-span-8">
          <div className="rounded-xl overflow-hidden h-full">
            <Banner />
          </div>
        </div>
        {/* Offer Cards Section */}
        <div className="md:col-span-4 flex flex-col">
          {/* Top single offer */}
          <div className=" animate-tubelightFlicker">
            <OfferCard
              data={offerData[0]}
              
            />
          </div>
          {/* Bottom split offers */}
          <div className="flex gap-1 h-full">
            <div className="w-2/3">
              <OfferCard
                data={offerData[1]}
                
              />
            </div>

            <div className="w-1/3">
              <OfferCard
                data={offerData[2]}
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
