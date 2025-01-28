import CoffeeContainer from "./CoffeeContainer/CoffeeContainer";

const MainBody = () => {
    return (
        <div className="w-full h-[2100px] lg:h-[1500px] bg-gray-50 relative rancho-regular">
            <div className="w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] absolute top-10"><img src="../../../images/more/4.png" alt="" className="w-full" /></div>
            <div className="w-[300px] h-[300px] absolute top-1/2 right-0"><img src="../../../images/more/5.png" alt="" className="w-full" /></div>
           
            <div className="w-full text-[#331A15] rancho-regular">
                <section id='Our Popular Product' >
                    <div className="text-center p-10 lg:p-[100px] space-y-3">
                        <p>--- Sip & Savor ---</p>
                        <h1 className="font-bold text-lg lg:text-4xl">Our Popular Products</h1>
                        <button className="btn bg-[#E3B577]">Add Coffee</button>
                    </div>
                    <CoffeeContainer></CoffeeContainer>
                </section>
                <section>
                    <div className="text-center pt-[100px] space-y-3">
                        <p>Follow us on</p>
                        <h1 className="font-bold text-lg lg:text-4xl">Follow on Instagram</h1>
                    </div>
                    <div id="follow on instagram" className="grid grid-cols-2 lg:grid-cols-4 px-5 lg:px-[200px] ">
                       <div className="h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 9.png" alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 10.png" alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 11.png" alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 12.png" alt="" />
                       </div>
                       <div className="-200 h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 13.png" alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 14.png" alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 15.png" alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src="../../../images/cups/Rectangle 16.png" alt="" />
                       </div>
                       
                    </div>
                </section>
            </div>

        </div>
    );
};

export default MainBody;