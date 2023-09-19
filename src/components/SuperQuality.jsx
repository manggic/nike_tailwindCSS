import { shoe8 } from "../assets/images";
import Button from "./Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container w-full"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg ">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish adidas, arrivals, quality comfort and innovation for
          your simple life
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum
          obcaecati velit aspernatur accusantium rem consequatur aperiam,
          repellendus doloribus.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
