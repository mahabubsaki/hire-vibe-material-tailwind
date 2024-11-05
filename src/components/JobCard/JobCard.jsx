import { Button } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const {
        _id,
        job_title,
        job_type,
        salary,
        posting_date,
        deadline,
        applicants_number,
        creator_name
    } = job;

    return (
        <div className="w-full p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{posting_date}</p>
                </div>
                <span className="px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full shadow-sm">
                    {job_type}
                </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors duration-300">
                {job_title}
            </h2>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300">Posted by <span className="font-medium">{creator_name}</span></p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300 font-medium">{salary}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300">Deadline: <span className="font-medium">{new Date(deadline).toLocaleDateString()}</span></p>
                    </div>

                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300">Applicants: <span className="font-bold text-indigo-600 dark:text-indigo-400">{applicants_number}</span></p>
                    </div>
                </div>

                <div className="flex justify-start pt-4">
                    <Link to={`/jobDetails/${_id}`} className="w-full sm:w-auto">

                        <Button
                            color="deep-purple"
                            size="md"
                            className="w-full sm:w-auto px-6 py-2.5 font-medium text-white  rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired
};

export default JobCard;