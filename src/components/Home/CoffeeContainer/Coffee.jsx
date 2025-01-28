import { FaEye } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Coffee = () => {
    return (
        <div className="bg-[#ECEAE3] flex flex-col lg:flex-row justify-center lg:justify-between  rounded-xl p-9 rancho">
            <div className="w-[200px]"><img className="w-full" src="../../../images/1.png" alt="" /></div>
            <div className="w-[200px] flex justify-center items-center">
                <div className="w-full flex flex-col text-lg">
                    <div className=""> <p className="rancho">Name:  Americano Coffee</p></div>
                    <div className=""> <p>Chef:  Mr. Matin Paul</p></div>
                    <div className=""> <p>Price:  890 Taka</p></div>
                </div>
            </div>
            <div className="flex lg:flex-col space-x-5 lg:space-y-5 pt-10">
                <div className="">
                    <NavLink to="coffeedetails">
                        <button className="w-10 h-10 bg-[#D2B48C] hover:bg-yellow-600 rounded-xl">
                            <FaEye className="w-[30px] mx-auto text-white hover:text-black" />
                        </button>
                    </NavLink>

                </div>
                <div className="">
                    <NavLink to="updatecoffee">
                        <button className="w-10 h-10 bg-red-950 hover:bg-red-700 rounded-xl">
                            <FaPencilAlt className="w-[30px] mx-auto text-white hover:text-black" />
                        </button>
                    </NavLink>
                </div>
                <div className="">
                    <NavLink to="">
                        <button className="w-10 h-10 bg-red-600 hover:bg-green-700 rounded-xl">
                            <MdDelete className="w-[30px] mx-auto text-white hover:text-black" />
                        </button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Coffee;