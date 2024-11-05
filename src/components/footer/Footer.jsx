import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="flex justify-center md:justify-start">
                        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            Hire<span className="text-gray-800 dark:text-gray-200">Vibe</span>
                        </Link>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Connect With Us</h2>
                        <div className="flex justify-center md:justify-start gap-6">
                            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                                <FaInstagram className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    <nav className="text-center md:text-right">
                        <h6 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Legal</h6>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                                Terms of use
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                                Privacy policy
                            </a>
                            <a href="#" className="block text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors duration-300">
                                Cookie policy
                            </a>
                        </div>
                    </nav>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} HireVibe. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;