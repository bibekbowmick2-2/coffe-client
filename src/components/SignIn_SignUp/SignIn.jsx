

const SignIn = () => {
    return (
        <div>
            <div className="hero lg:justify-start lg:items-center bg-[url(../../../images/more/login.jpg)] min-h-screen">
                <div className="hero-content bg-[#686362a0] max-w-sm lg:max-w-xl flex-col border-2 border-gray-500 rounded-2xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input bg-[#686362a0] input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label text-lg font-bold">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input bg-[#686362a0] input-bordered" required />
                                <label className="label text-lg font-bold">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-950 hover:border-2 hover:border-gray-100 ">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;