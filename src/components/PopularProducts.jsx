import { products } from "../constants/index";
import PopularProductCard from "./PopularProductCard";

const PopularProducts = () => {

  console.log('products ????', products);
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our
          <span className="text-coral-red px-3">Popular</span>
          Products
        </h2>

        <p className="font-montserrat text-slate-gray mt-2 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor
          libero maxime vel cumque praesentium magni molestiae inventore optio,
          veritatis, officiis laborum est quaerat, voluptas eaque ex autem unde
          eligendi?
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((prod) => {
          return <PopularProductCard key={prod.name} {...prod}  />;
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
