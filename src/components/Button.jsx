const Button = ({ label, iconUrl, backgroundColor,borderColor,textColor  }) => {
  return (
    <button className={`px-4 py-2
     ${backgroundColor?  `${backgroundColor} ${borderColor} border ${textColor}` :"bg-orange-500 text-white border-coral-red"} text-lg rounded-full leading-none  flex justify-center items-center gap-2 font-montserrat`}>
     {label}

     {iconUrl && <img src={iconUrl} alt={label} className="rounded-full h-5 w-5 ml-2" />}
      
    </button>
  );
};

export default Button;
