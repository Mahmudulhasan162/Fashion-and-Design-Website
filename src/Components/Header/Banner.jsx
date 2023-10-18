const Banner = () => {
    return (
        <div className="flex flex-between w-full mx-auto justify-center items-center">
            <div className="w-2/3 bg-gray-200 h-[308px] text-center items-center flex flex-col justify-center">
            <h1 className="text-5xl font-bold uppercase"><span className="bold text-6xl">20% </span>off on selected categories</h1>
            <button className="mt-10 px-4 py-2 rounded-full bg-black text-white text-md font-medium">Shop Now</button>
            </div>
            <div>
                <img  src="https://i.ibb.co/fNBT0St/model.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;