import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";




const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center">
        What Our
        <span className="text-coral-red"> Customer </span>
        Says?
      </h3>
      <p className="info-text max-w-lg text-center mt-5 m-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae repellat culpa, quibusdam nam, dicta optio architecto earum, quod quo eos eligendi ab! Perferendis possimus distinctio voluptate consequatur. Est, explicabo ducimus!</p>



      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            {reviews.map( review => {
              return <ReviewCard key={review} {...review} />
            } )}
      </div>
    </section>
  );
};

export default CustomerReviews;
