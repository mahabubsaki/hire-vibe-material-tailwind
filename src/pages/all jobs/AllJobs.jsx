import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, Input } from "@material-tailwind/react";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs${searchValue ? `?search=${searchValue}` : ''}`);
                setJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [searchValue]);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchValue = form.search.value.trim();
        if (searchValue) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Available Jobs
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                    Find your dream job from our curated listings
                </p>
            </motion.div>

            <motion.form
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl mx-auto mb-12"
                onSubmit={handleSearch}
            >
                <div className="flex flex-col items-center sm:flex-row gap-4">
                    {/* <input
                        type="text"
                        name="search"
                        placeholder="Search for jobs..."
                        className="flex-1 px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    /> */}
                    <Input color="amber" autoComplete="off" label="Search for jobs..." name="search" type="text" className="text-black dark:text-white " />
                    {/* <button
                        type="submit"
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                        Search
                    </button> */}

                    <Button
                        type="submit"

                        color="deep-purple"
                        size="md"
                        className="pr-8 pl-7 py-3 text-white   rounded-lg transition-colors duration-200 font-semibold "
                    >
                        Search
                    </Button>
                </div>
            </motion.form>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">#</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Job Title</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Posted On</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Deadline</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Salary Range</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {jobs.map((job, index) => (
                                    <tr key={job._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{index + 1}</td>
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                                {job.job_title}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{job.posting_date}</td>
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                                            {new Date(job.deadline).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{job.salary}</td>
                                        <td className="px-6 py-4">
                                            <Link
                                                to={`/jobDetails/${job._id}`}

                                            >
                                                <Button


                                                    color="deep-purple"
                                                    size="md"
                                                    className="pr-8 pl-7 py-3 text-white   rounded-lg transition-colors duration-200 font-semibold "
                                                >
                                                    View Details
                                                </Button>

                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default AllJobs;