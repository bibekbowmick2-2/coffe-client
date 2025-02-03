import { FaEye } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ContextApi } from "../../ContextApi";

const Coffee = ({ singlecoffee }) => {
    const {CoffeeCollection, setCoffee} = useContext(ContextApi);
    const {_id, name, supplier, category, coffeeChef, taste, details, photo} = singlecoffee;

    console.log(singlecoffee,_id,name, supplier, category, coffeeChef, taste, details, photo);
    const setDelete = (_id) =>{
        Swal.fire({
            title: "Do you want to Delete the item??",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              handleDelete(_id);
            } else if (result.isDenied) {
              Swal.fire("File is note deleted", "", "info");
            }
          });
    }
    const handleDelete = (_id) =>{
        console.log("deleted id",_id);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"            
        })
        .then(res => res.json())    
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire("Coffee Deleted Successfully!", "", "success");
        }
        })
        const filtered = CoffeeCollection.filter(coffee => coffee._id !== _id)
        setCoffee(filtered);
    }
    // 
    return (
        <div className="bg-[#ECEAE3] flex flex-col lg:flex-row justify-center lg:justify-between space-x-3 rounded-xl p-9 rancho ">
            <div className="w-[200px] h-[200px] "><img className="w-full h-full" src={photo} alt={name} /></div>
            <div className="w-[200px] flex justify-center items-center">
                <div className="w-full flex flex-col text-lg">
                    <div className=""> <p className="rancho">Name: {name}   </p></div>
                    <div className=""> <p>Chef: {coffeeChef}   </p></div>
                    <div className=""> <p>Price:{details}  </p></div>
                </div>
            </div>
            <div className="flex lg:flex-col space-x-5 lg:space-y-5 pt-10">
                <div className="">
                    <NavLink to= {`coffeedetails/${_id}`}>
                        <button className="z-10 w-10 h-10 bg-[#D2B48C] hover:bg-yellow-600 rounded-xl">
                            <FaEye className="w-[30px] mx-auto text-white hover:text-black" />
                        </button>
                    </NavLink>

                </div>
                <div className="">
                    <NavLink to={`updatecoffee/${_id}`}>
                        <button className="z-10 w-10 h-10 bg-red-950 hover:bg-red-700 rounded-xl">
                            <FaPencilAlt className="w-[30px] mx-auto text-white hover:text-black" />
                        </button>
                    </NavLink>
                </div>
                <div className="">
                    <button onClick={() => {setDelete(singlecoffee?._id) }} className="w-10 h-10 bg-red-600 hover:bg-green-700 rounded-xl">
                        <MdDelete className="z-10 w-[30px] mx-auto text-white hover:text-black" />
                    </button>
                </div>

            </div>
        </div>
    );
};

Coffee.propTypes = {
    singlecoffee: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      supplier: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      coffeeChef: PropTypes.string.isRequired,
      taste: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    }).isRequired,
  };
export default Coffee;