import { Link, useNavigate } from "react-router-dom";
import regImg from '../../assets/reg.jpg';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../provider/FirebaseProvider";
import { Button, Input } from "@material-tailwind/react";

const Registration = () => {
    const [error, setError] = useState('');
    const { createUser, updateUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { fullName, email, image, password } = data;

        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Must have an Uppercase letter in the password');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setError('Must have a Lowercase letter in the password');
            return;
        }

        setError('');

        //creating user
        createUser(email, password)
            .then(() => {
                updateUser(fullName, image)
                    .then(() => {
                        toast.success('Registration Successful');
                        logout();
                        navigate('/login');
                    });
            })
            .catch(() => {
                setError("email already in use");
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="hidden lg:block lg:w-1/2">
                        <img
                            src={regImg}
                            alt="Registration"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 px-8 py-12 space-y-8">
                        <div className="text-center">
                            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                Hire<span className="text-gray-800 dark:text-gray-200">Vibe</span>
                            </Link>
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                                Create Your Account
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Full Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        {...register("fullName", { required: "Full name is required" })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Enter your full name"
                                    />
                                    {errors.fullName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                                    )}
                                </div> */}
                                <Input label="FullName" className="text-black dark:text-white"    {...register("fullName", { required: "Full name is required" })} autoComplete="off" color="amber" />
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                                )}
                            </div>

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
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div> */}
                                <Input label="Email" className="text-black dark:text-white"    {...register("email", { required: "Email is required" })} autoComplete="off" color="amber" />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                {/* <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Photo URL
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        {...register("image", { required: "Photo URL is required" })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                        placeholder="Enter photo URL"
                                    />
                                    {errors.image && (
                                        <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                                    )}
                                </div> */}
                                <Input label="Image" className="text-black dark:text-white"    {...register("image", { required: "Photo URL is required" })} autoComplete="off" color="amber" />
                                {errors.image && (
                                    <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
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
                                <Input label="Password" type="password" className="text-black dark:text-white"    {...register("password", { required: "Password is required" })} autoComplete="off" color="amber" />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
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
                                Sign up
                            </button> */}
                            <Button
                                type="submit"

                                color="deep-purple"
                                size="md"
                                className="pr-8 pl-7 w-full py-3 text-white   rounded-lg transition-colors duration-200 font-semibold "
                            >
                                Sign up
                            </Button>
                        </form>

                        <div className="text-center">
                            <Link
                                to="/login"
                                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                            >
                                Already have an account? Sign in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;