import Coffee from "./Coffee";

const CoffeeContainer = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-[100px] gap-5">
                 <Coffee></Coffee>       
                 <Coffee></Coffee>       
            </div>
        </div>
    );
};

export default CoffeeContainer;