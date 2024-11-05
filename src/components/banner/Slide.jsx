import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const Slide = ({ image }) => {
    return (
        <div className="w-full bg-center bg-cover h-[500px] sm:h-[600px] md:h-[750px] lg:h-[800px]" style={{ backgroundImage: `url(${image})` }}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center max-w-4xl px-4 mx-auto">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-2 sm:px-4"
                    >
                        Find Your Dream Job Today
                    </motion.h1>

                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className='text-base sm:text-lg md:text-xl text-gray-200 mt-4 sm:mt-6 mb-6 sm:mb-8 px-3 sm:px-6'
                    >
                        Connect with top employers, explore thousands of opportunities, and take the next step in your career journey.
                    </motion.p>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.6,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeOut",
                        }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8"
                    >
                        <Link to="/all-jobs" className="w-48 sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors duration-300 text-base sm:text-lg">
                            Search Jobs
                        </Link>
                        <Link to="/add-job" className="w-48 sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-full transition-all duration-300 text-base sm:text-lg">
                            Post a Job
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.8,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                        }}
                        className="mt-8 sm:mt-12 text-gray-200"
                    >
                        <p className="text-xs sm:text-sm font-medium">Trusted by leading companies worldwide</p>
                        <p className="text-xs mt-1 sm:mt-2">Join thousands of professionals who&apos;ve found their perfect match</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

Slide.propTypes = {
    image: PropTypes.string
}

export default Slide;