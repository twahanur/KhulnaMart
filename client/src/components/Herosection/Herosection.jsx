import Banner from "./Banner";
import OfferCard from "./OfferCard";

const offerData = [
  {
    imageUrl: "https://i.ibb.co/LDy5XTYg/image.png",
    title: "Beauty",
    subtitle: "UP TO 40% OFF",
  },
  {
    imageUrl: "https://i.ibb.co/LDy5XTYg/image.png",
    title: "Offer",
    subtitle: "UP TO 40% OFF",
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
            <OfferCard data={offerData[0]} />
          </div>
          {/* Bottom split offers */}
          <div className="flex gap-1 h-full">
            <div className="w-2/3">
              <OfferCard data={offerData[0]} />
            </div>
            <div className="w-1/3 aspect-[16/9]">
              <OfferCard data={offerData[1]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
