
const Header = () => {
    return (
        <div className="w-full h-[120px] relative">
            <img className="w-full h-full" src="../../../images/more/15.jpg" alt="" />
            <div className="w-full lg:w-1/3 flex items-center justify-center absolute left-0 bottom-0 lg:bottom-3 lg:left-1/3">
                <div className="w-[90px] h-[90px]">
                    <img className="w-full h-full"src="../../../images/more/logo1.png" alt="" />
                </div>
                <p className="rancho font-bold text-xl lg:text-3xl">Espresso Emporium</p>
            </div>
        </div>
    );
};

export default Header;