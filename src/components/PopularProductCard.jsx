import { star } from "../assets/icons";




const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full">
      <img src={imgURL} alt="image" className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="text-xl leading-normal font-montserrat text-slate-gray ">4.5</p>
      </div>

      <h3 className="text-2xl font-semibold leading-normal mt-2 font-palanquin">{name}</h3>
      <p className="font-montserrat text-2xl leading-normal text-coral-red mt-2 font-semibold">{price}</p>
    </div>
  );
};

export default PopularProductCard;
