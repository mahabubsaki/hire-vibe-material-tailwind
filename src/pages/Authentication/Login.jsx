import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/login.jpg';
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { Button, Input } from "@material-tailwind/react";

const Login = () => {
    const [error, setError] = useState('');
    const { signInUser, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const result = await signInUser(email, password);
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: result?.user?.email }, { withCredentials: true });
            toast.success("Login Successful");
            navigate(from);
        }
        catch (err) {
            setError('Please check your email and password');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: result?.user?.email }, { withCredentials: true });
            toast.success("Login Successful");
            navigate(from);
        }
        catch (error) {
            toast.error(error?.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="hidden lg:block lg:w-1/2">
                        <img
                            src={loginImg}
                            alt="Login"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 px-8 py-12 space-y-8">
                        <div className="text-center">
                            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                Hire<span className="text-gray-800 dark:text-gray-200">Vibe</span>
                            </Link>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                                Welcome Back!
                            </h2>
                        </div>

                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                Sign in with Google
                            </span>
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        {...register("email", { required: "Email is required" })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Enter your email"
                                    />
                                   
                                </div> */}
                                <Input label="Email" className="text-black dark:text-white"    {...register("email", { required: "Email is required" })} autoComplete="off" color="amber" />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="password"
                                        {...register("password", { required: "Password is required" })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Enter your password"
                                    />
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                    )}
                                </div> */}
                                <Input label="Password" className="text-black dark:text-white"     {...register("password", { required: "Password is required" })} autoComplete="off" color="amber" />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            {error && (
                                <div className="text-sm text-red-600 text-center">
                                    {error}
                                </div>
                            )}

                            {/* <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                            >
                                Sign in
                            </button> */}
                            <Button
                                type="submit"

                                color="deep-purple"
                                size="md"
                                className="pr-8 pl-7 w-full py-3 text-white   rounded-lg transition-colors duration-200 font-semibold "
                            >
                                Sign in
                            </Button>
                        </form>

                        <div className="text-center">
                            <Link
                                to="/registration"
                                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                            >
                                Don't have an account? Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;