import { useContext } from 'react';
import { ContextApi } from '../ContextApi';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import login from "../../../images/more/login.jpg"
const Signup = () => {

    const { createUser } = useContext(ContextApi);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user);
                const createdAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createdAt };
                fetch('https://coffee-store-server-h9ozytwpt-syeda-fairooz-nawals-projects.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "User Added Successfully!!",
                                icon: "success",
                                draggable: true
                            });
                        }
                        form.reset();
                    })
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div>
            <div className={`hero lg:justify-start lg:items-center bg-[url(${login})] min-h-screen`}>
                <div className="hero-content bg-[#686362a0] max-w-sm lg:max-w-xl flex-col border-2 border-gray-500 rounded-2xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" name="name" className="input bg-[#686362a0] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" name="email" className="input bg-[#686362a0] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" name="password" className="input bg-[#686362a0] input-bordered" required />
                                <label className="label text-lg font-bold">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-950 hover:border-2 hover:border-gray-100 ">Register</button>
                            </div>
                            <div className="flex items-center">
                                <p>Already Logged in? Login in Now</p>
                                <Link to="/signin"><button className="btn btn-xs bg-red-950">Login Now</button></Link>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;