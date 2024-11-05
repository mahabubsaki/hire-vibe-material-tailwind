import { AiOutlineFileSearch } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { RiGuideFill } from "react-icons/ri";
import { motion } from "framer-motion";

const GetStarted = () => {
    return (
        <div className="container mx-auto px-4 my-20">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                    }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                >
                    Your Journey Starts Here
                </motion.h2>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                    }}
                    className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
                >
                    Discover the perfect path to your dream career with our comprehensive resources and guidance
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex justify-center mb-6">
                        <span className="text-6xl text-indigo-600 dark:text-indigo-400">
                            <AiOutlineFileSearch />
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                        Find Your Perfect Role
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                        Browse through carefully curated job listings matching your skills and aspirations. Your next career move is just a click away.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex justify-center mb-6">
                        <span className="text-6xl text-indigo-600 dark:text-indigo-400">
                            <MdPeopleOutline />
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                        Smart Job Search
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                        Learn proven strategies to stand out in the job market. Get insider tips on resume building and networking.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex justify-center mb-6">
                        <span className="text-6xl text-indigo-600 dark:text-indigo-400">
                            <RiGuideFill />
                        </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
                        Interview Success
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                        Master the art of interviewing with our expert guides. Practice common questions and boost your confidence.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default GetStarted;