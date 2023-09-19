const ShoeCard = ({ imageUrl, bigShoeImg, changeBigShoeImg }) => {
  const handleChange = () => {
    if (bigShoeImg !== imageUrl.bigShoe) {
      changeBigShoeImg(imageUrl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
     ${imageUrl.bigShoe === bigShoeImg ? "border-coral-red" : "border-transparent"}
     cursor-pointer
     max-sm:flex-1
      `}
      onClick={handleChange}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl  max-sm:p-4 ">
        <img src={imageUrl.thumbnail} alt="shoe" width={127} height={103} />
      </div>
    </div>
  );
};

export default ShoeCard;
