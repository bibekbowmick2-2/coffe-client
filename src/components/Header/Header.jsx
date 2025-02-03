import { Link } from "react-router-dom";
const Header = () => {
    const link = <>
        <Link to="/users"><button className="btn btn-xs lg:btn-lg bg-[#E3B577]">Users</button></Link>
        <Link to="/"><button className="btn btn-xs lg:btn-lg bg-[#E3B577]">Home</button></Link>
    </>
    return (
        <>
            <div className="navbar w-full h-[120px] relative bg-[url(../../../images/more/15.jpg)]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[90px] h-[90px] hidden lg:block">
                            <img className="w-full h-full" src="../../../images/more/logo1.png" alt="" />
                        </div>
                        <a className="btn btn-ghost rancho font-bold text-xl lg:text-3xl">Espresso Emporium</a>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/signin"><button className="btn btn-xs lg:btn-lg bg-red-600">Sign In</button></Link>
                    <Link to="/signup"><button className="btn btn-xs lg:btn-lg bg-red-600">Sign Up</button></Link>
                </div>
            </div>
        </>


    );
};

export default Header;