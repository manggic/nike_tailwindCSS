import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../constants";
import Button from "./Button";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex flex-col lg:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="flex flex-col xl:w-2/5 relative justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className=" z-10 lg:bg-white text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative xl:whitespace-nowrap pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Adidas</span> Shoes
        </h1>

        <p
          className="text-lg font-montserrat mt-6 mb-14 text-slate-gray sm:max-w-sm
       "
        >
          Discover stylish adidas, arrivals, quality comfort and innovation for
          your simple life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start mt-20 flex-wrap w-full gap-16">
          {statistics.map((stat, index) => {
            return (
              <div key={index}>
                <p className="font-bold text-4xl font-palanquin">
                  {stat.value}
                </p>
                <p className="font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover">
        <img
          src={bigShoeImg}
          alt="shoe"
          width={610}
          height={502}
          className="object-contain relative z-10 mb-20"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => {
            return (
              <div className="" key={shoe}>
                <ShoeCard
                  imageUrl={shoe}
                  bigShoeImg={bigShoeImg}
                  changeBigShoeImg={(shoe) => { setBigShoeImg(shoe)  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
