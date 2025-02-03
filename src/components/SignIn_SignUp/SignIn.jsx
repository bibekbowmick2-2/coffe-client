import { useContext } from "react";
import { ContextApi } from "../ContextApi";
import { Link } from "react-router-dom";
import login from "../../../images/more/login.jpg"
const SignIn = () => {

    const { signInUser } = useContext(ContextApi);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                form.reset();

                // update last login time

                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };
                fetch(`https://coffee-store-server-8n1t8cdjy-syeda-fairooz-nawals-projects.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch((error) => {
                console.log(error.message)
            });

    }
    return (
        <div>
            <div className={`hero lg:justify-start lg:items-center bg-[url(${login})] min-h-screen`}>
                <div className="hero-content bg-[#686362a0] max-w-sm lg:max-w-xl flex-col border-2 border-gray-500 rounded-2xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input bg-[#686362a0] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input bg-[#686362a0] input-bordered" required />
                                <label className="label text-lg font-bold">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-950 hover:border-2 hover:border-gray-100 ">Login</button>
                            </div>
                            <div className="flex items-center">
                                <p>New to Coffee Store? Register Now</p>
                                <Link to="/signup"><button className="btn btn-xs bg-red-950">Registration</button></Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;