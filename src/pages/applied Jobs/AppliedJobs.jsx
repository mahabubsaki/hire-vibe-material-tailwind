import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Option, Select } from "@material-tailwind/react";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [filter, setFilter] = useState("");
    const [displayJobs, setDisplayJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleFilterItem = (filter) => {
        alert(filter);
        setFilter(filter);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/applications/${user?.email}${filter ? '?job_type=' + filter : ""}`, { withCredentials: true });
                setDisplayJobs(data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [user, filter]);

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Applied Jobs
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                    Track all your job applications in one place
                </p>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-8"
            >
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white">
                        Filter by Job Category
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-lg bg-white dark:bg-gray-800 rounded-xl w-52">
                        <li><button onClick={() => handleFilterItem('')} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">All</button></li>
                        <li><button onClick={() => handleFilterItem('On-Site')} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">On-Site</button></li>
                        <li><button onClick={() => handleFilterItem('Remote')} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Remote</button></li>
                        <li><button onClick={() => handleFilterItem('Hybrid')} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Hybrid</button></li>
                        <li><button onClick={() => handleFilterItem('Part-Time')} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Part-Time</button></li>
                    </ul>
                </div> */}
                <div className="w-52">
                    <Select color="deep-purple" onChange={(e) => handleFilterItem(e)} label="Filter by Job Category">
                        <Option value="">All</Option>
                        <Option value="Remote">Remote</Option>
                        <Option value="Hybrid">Hybrid</Option>
                        <Option value="Part-Time">Part-Time</Option>
                    </Select>
                </div>
            </motion.div>

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
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Type</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Deadline</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Salary Range</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {displayJobs.map((job, index) => (
                                    <tr key={job._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{index + 1}</td>
                                        <td className="px-6 py-4">
                                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                                {job?.job?.job_title}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{job.job?.job_type}</td>
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">
                                            {new Date(job?.job?.deadline).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-200">{job?.job?.salary}</td>
                                        <td className="px-6 py-4">
                                            <Link
                                                to={`/appliedJob/${job._id}`}
                                                className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-colors duration-300 whitespace-nowrap"
                                            >
                                                View Details
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

export default AppliedJobs;