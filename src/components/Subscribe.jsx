import Button from "./Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between max-lg:flex-col gap-10 items-center"
      id="contact-us"
    >
      <h3 className="text-4xl font-palanquin font-bold leading-[68px]">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter{" "}
      </h3>

      <div className="w-full lg:max-w-[40%] justify-between flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" />

        <div className="flex max-sm:justify-end items-center max-sm:w-full" >
          <Button label='submit'/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
