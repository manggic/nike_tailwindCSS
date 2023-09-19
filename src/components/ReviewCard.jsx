import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center flex-col items-center">

        <img src={imgURL} alt="image" className="rounded-full h-[120px] w-[120px] object-cover" />
        
        <p className="text-center max-w-sm mt-6 info-text ">{feedback}</p>

        <div className="flex items-center justify-center gap-2.5 mt-3">
            <img src={star} alt='star' 
            width={24}
            height={24}
        className="object-contain" />
            <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
        </div>

        <h3 className="font-semibold text-3xl font-palanquin mt-1">{customerName}</h3>
    </div>
  )
}

export default ReviewCard