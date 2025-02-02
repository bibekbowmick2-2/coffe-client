import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="w-full h-[120px] relative">
            <img className="w-full h-full" src="../../../images/more/15.jpg" alt="" />
            <div className="w-full lg:w-2/3 flex justify-between items-center lg:px-10 absolute left-0 lg:left-1/3 bottom-0 lg:bottom-3">
                <div className="flex items-center justify-center">
                    <div className="w-[90px] h-[90px]">
                        <img className="w-full h-full" src="../../../images/more/logo1.png" alt="" />
                    </div>
                    <p className="rancho font-bold text-xl lg:text-3xl">Espresso Emporium</p>
                </div>
                <div className="w-[200px] flex justify-between">
                    <Link to="/signin"><button className="btn bg-[#E3B577]">Sign In</button></Link>
                    <Link to="/signup"><button className="btn bg-[#E3B577]">Sign Up</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Header;