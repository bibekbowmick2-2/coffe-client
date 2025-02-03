import CoffeeContainer from "./CoffeeContainer/CoffeeContainer";
import { NavLink } from "react-router-dom";
import img4 from "../../../images/more/4.png"
import img5 from "../../../images/more/5.png"
import rectangle9 from "../../../images/cups/Rectangle 9.png"
import rectangle10 from "../../../images/cups/Rectangle 10.png"
import rectangle11 from "../../../images/cups/Rectangle 11.png"
import rectangle12 from "../../../images/cups/Rectangle 12.png"
import rectangle13 from "../../../images/cups/Rectangle 13.png"
import rectangle14 from "../../../images/cups/Rectangle 14.png"
import rectangle15 from "../../../images/cups/Rectangle 15.png"
import rectangle16 from "../../../images/cups/Rectangle 16.png"
const MainBody = () => {
    return (
        <div className="w-full  bg-gray-50 relative rancho-regular">
            <div className="w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] absolute top-10 z-0"><img src={img4} alt="" className="w-full z-0" /></div>
            <div className="w-[300px] h-[300px] absolute bottom-[205px] lg:top-3/4 right-0 z-0"><img src={img5} alt="" className="w-full z-0" /></div>
           
            <div className="w-full text-[#331A15] rancho-regular z-10">
                <section id='Our Popular Product' >
                    <div className="text-center p-10 lg:p-[100px] space-y-3">
                        <p>--- Sip & Savor ---</p>
                        <h1 className="font-bold text-lg lg:text-4xl">Our Popular Products</h1>
                        <NavLink to="/addcoffee"><button className="btn bg-[#E3B577]">Add Coffee</button></NavLink>
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
                        <img className="w-full h-full" src={rectangle9} alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src={rectangle10} alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src={rectangle11} alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src={rectangle12} alt="" />
                       </div>
                       <div className="-200 h-full p-5">
                        <img className="w-full h-full" src={rectangle13} alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src={rectangle14} alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src={rectangle15} alt="" />
                       </div>
                       <div className=" h-full p-5">
                        <img className="w-full h-full" src={rectangle16} alt="" />
                       </div>
                       
                    </div>
                </section>
            </div>

        </div>
    );
};

export default MainBody;