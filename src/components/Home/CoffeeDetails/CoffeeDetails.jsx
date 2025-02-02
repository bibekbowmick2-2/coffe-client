import {useLoaderData } from 'react-router';
const CoffeeDetails = () => {
    const CurrentCoffee = useLoaderData();
    const { name, supplier, category, coffeeChef, taste, details, photo } = CurrentCoffee;
    return (
        <div className="w-full bg-amber-50 py-3 lg:py-[100px]">
            <div className="w-11/12 mx-auto lg:w-1/2 bg-[#ECEAE3] flex flex-col items-center lg:flex-row justify-center lg:justify-between  rounded-xl p-9 rancho text-[#331A15]">
                <div className="w-full lg:w-[200px]"><img className="w-full" src={photo} alt="Coffee Photo" /></div>
                <div className="w-full lg:w-[400px] flex justify-center items-center">
                    <div className="w-full flex flex-col text-lg">
                        <div className=""> <p className="rancho">Name: {name}   </p></div>
                        <div className=""> <p>Chef: {coffeeChef} </p></div>
                        <div className=""> <p>Supplier: {supplier} </p></div>
                        <div className=""> <p>Category: {category} </p></div>
                        <div className=""> <p>Taste: {taste}  </p></div>
                        <div className=""> <p>Price: {details}  </p></div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CoffeeDetails;