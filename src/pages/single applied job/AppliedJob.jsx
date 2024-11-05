import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const appliedJob = useLoaderData()
    const { name, email, resume_link, job_title, job_type, deadline, salary, description } = appliedJob

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{job_title}</h1>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                        {job_type}
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Name:</span>
                                    <span className="text-gray-600 dark:text-gray-400">{name}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Email:</span>
                                    <span className="text-gray-600 dark:text-gray-400">{email}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Resume Link:</span>
                                    <div className="break-all">
                                        <a href={resume_link} target="_blank" rel="noopener noreferrer"
                                            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 hover:underline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Details</h2>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Deadline:</span>
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {new Date(deadline).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-gray-700 dark:text-gray-300">Salary:</span>
                                    <span className="text-gray-600 dark:text-gray-400">{salary}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;