
const Banner = () => {
    return (
        <div className="w-full">
            <div className="w-full rancho-regular relative">
                <img src="../../../images/more/3.png" alt="" />
                <div className="w-full lg:w-1/2 absolute bottom-0 right-0 lg:bottom-5 p-5 lg:p-20 space-y-1">
                    <h1 className="font-bold text-lg lg:text-4xl">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="hidden lg:block">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-yellow-200 text-black">Learn More</button>
                </div>
            </div>
            <div className="w-full bg-[#ECEAE3] text-[#331A15]">
                <div className="w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-4 p-5 lg:p-10 lg:px-[150px] gap-5">
                    <div className="lg:space-y-3">
                        <div className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px]">
                            <img className="w-full h-full" src="../../../images/icons/1.png" alt="" />
                        </div>
                        <h1 className="font-bold lg:font-4xl">Awesome Aroma</h1>
                        <p className="hidden lg:block">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className="lg:space-y-3">
                        <div className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px]">
                            <img className="w-full h-full" src="../../../images/icons/2.png" alt="" />
                        </div>
                        <h1 className="font-bold lg:font-4xl">High Quality</h1>
                        <p className="hidden lg:block">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className="lg:space-y-3">
                        <div className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px]">
                            <img className="w-full h-full" src="../../../images/icons/3.png" alt="" />
                        </div>
                        <h1 className="font-bold lg:font-4xl">Pure Grades</h1>
                        <p className="hidden lg:block">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className="lg:space-y-3">
                        <div className="w-[40px] lg:w-[70px] h-[40px] lg:h-[70px]">
                            <img className="w-full h-full" src="../../../images/icons/4.png" alt="" />
                        </div>
                        <h1 className="font-bold lg:font-4xl">Proper Roasting</h1>
                        <p className="hidden lg:block">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Banner;