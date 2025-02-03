import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const NewCoffee = useLoaderData();
  console.log(NewCoffee._id);
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.coffeename.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const coffeeChef = form.coffeeChef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updateCoffee = {
      name,
      supplier,
      category,
      coffeeChef,
      taste,
      details,
      photo,
    };

    fetch(
      `https://coffee-store-server-iota-woad.vercel.app/coffee${NewCoffee._id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Alright, got it!",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/"; // Redirect to the home page when the button is clicked
            }
          });
          form.reset();
        }
      });
  };
  return (
    <div className=" bg-gray-100 bg-[url('../../../images/more/11.png')]  text-[#331A15] py-[100px]">
      <div className="w-11/12 lg:w-3/4 mx-auto bg-[#F4F3F0] p-10">
        <div className="w-11/12 lg:w-3/4 mx-auto text-center mb-2 lg:mb-6">
          <h1 className="font-bold text-lg lg:text-4xl">Update New Coffee</h1>
          <br />
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="w-11/12 mx-auto flex flex-col justify-between lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <label>Name</label>
              <br />
              <input
                className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
                type="text"
                name="coffeename"
                id=""
                placeholder="Enter Coffee Name"
                defaultValue={NewCoffee.name}
              />
              <br />
              <label>Supplier</label>
              <br />
              <input
                className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
                type="text"
                name="supplier"
                id=""
                placeholder="Enter Coffee Supplier"
                defaultValue={NewCoffee.supplier}
              />
              <br />
              <label>Category</label>
              <br />
              <input
                className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
                type="text"
                name="category"
                id=""
                placeholder="Enter Coffee Category"
                defaultValue={NewCoffee.category}
              />
              <br />
            </div>
            <div className="w-full lg:w-1/2">
              <label>Chef</label>
              <br />
              <input
                className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
                type="text"
                name="coffeeChef"
                id=""
                placeholder="Enter Coffee Chef"
                defaultValue={NewCoffee.coffeeChef}
              />
              <br />
              <label>Taste</label>
              <br />
              <input
                className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
                type="text"
                name="taste"
                id=""
                placeholder="Enter Coffee taste"
                defaultValue={NewCoffee.taste}
              />
              <br />
              <label>Details</label>
              <br />
              <input
                className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
                type="text"
                name="details"
                id=""
                placeholder="Enter coffee details"
                defaultValue={NewCoffee.details}
              />
              <br />
            </div>
          </div>
          <div className="w-11/12 mx-auto">
            <label>Photo</label>
            <br />
            <input
              className="w-full p-2 mb-2  border-0 bg-white text-gray-400"
              type="text"
              name="photo"
              id=""
              placeholder="Enter Photo URL"
              defaultValue={NewCoffee.photo}
            />
            <br />
            <br />
            <button className="w-full p-2 mb-2  border-2 bg-yellow-600 text-[#331A15]">
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
