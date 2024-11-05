import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/FirebaseProvider";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/get-mine/${user?.email}`, { withCredentials: true });
            setJobs(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/jobs/${id}`, { withCredentials: true });
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        getData();
                    }
                } catch (err) {
                    console.log(err);
                    toast.error(err.message);
                }
            }
        });
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
                    My Jobs: {jobs.length}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                    Jobs that you posted to hire employees
                </p>
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
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Posted On</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Deadline</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Salary Range</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-200">Actions</th>
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
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <Link
                                                    to={`/jobDetails/${job._id}`}

                                                >

                                                    <Button


                                                        color="deep-purple"
                                                        size="md"
                                                        className="pr-4 pl-3 py-3 text-white   rounded-lg transition-colors duration-200 font-semibold "
                                                    >
                                                        View Details
                                                    </Button>
                                                </Link>
                                                <Link
                                                    to={`/update-job/${job._id}`}

                                                >


                                                    <Button


                                                        color="green"
                                                        size="md"
                                                        className="pr-8 pl-7 py-3 text-white   rounded-lg transition-colors duration-200 font-semibold inline-flex items-center"
                                                    >
                                                        <FaRegEdit className="mr-1" /> Edit
                                                    </Button>
                                                </Link>
                                                {/* <button
                                                    onClick={() => handleDelete(job._id)}
                                                    className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-300 whitespace-nowrap"
                                                >
                                                    <MdDeleteOutline className="mr-1" /> Delete
                                                </button> */}

                                                <Button


                                                    color="red"
                                                    size="md"
                                                    onClick={() => handleDelete(job._id)}
                                                    className="pr-8 pl-7 py-3 text-white   rounded-lg transition-colors duration-200 font-semibold inline-flex items-center"
                                                >
                                                    <MdDeleteOutline className="mr-1" /> Delete
                                                </Button>
                                            </div>
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

export default MyJobs;