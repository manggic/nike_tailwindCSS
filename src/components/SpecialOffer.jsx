import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "./Button";

const SpecialOffer = () => {
  return (
    <section className="flex items-center max-lg:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin capitalize font-bold lg:max-w-lg ">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          The headline grabs the reader’s attention and makes them want to learn
          more about the subject.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable
        </p>

        <div className="mt-11 flex gap-4 flex-wrap">
        <Button label="Shop now" iconUrl={arrowRight} />
        <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'  ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
