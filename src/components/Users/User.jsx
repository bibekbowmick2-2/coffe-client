import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const User = () => {
    const loadedUsers = useLoaderData();
    const [users, setusers] = useState(loadedUsers);
    console.log(users);

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
    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
             if(data.deletedCount > 0){
            Swal.fire("Coffee Deleted Successfully!", "", "success");
            const remainingUser = users.filter(user => user._id !== id);
            setusers(remainingUser);
        }
    })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table bg-gray-300 ">
                {/* head */}
                <thead>
                    <tr className='text-xl text-[#331A15]'>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Loggged in At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    users.map((data) => <>
                    <tr key={data._id} className="bg-gray-100 text-[#331A15]">
                        <th>1</th>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.createdAt}</td>
                        <td>{data.lastSignInTime}</td>
                        <td className='flex space-x-1'>
                            <button onClick={()=>setDelete(data._id)} className="btn btn-sm bg-red-600">Delete</button>
                            <button className="btn btn-sm bg-amber-400">Update</button>
                        </td>

                    </tr>
                    </>)
                   }
                    
                </tbody>
            </table>
        </div>
    );
};

export default User;