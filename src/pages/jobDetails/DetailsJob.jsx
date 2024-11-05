/* eslint-disable no-undef */
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/FirebaseProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const DetailsJob = () => {
    const job = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { _id, job_title, job_type, deadline, salary, applicants_number, description,
        picture_url, creator_name } = job;

    const handleApplyButtonClick = () => {
        document.getElementById('my_modal_3').showModal()
    }

    const handleApplyForm = async (e) => {
        e.preventDefault()
        const form = e.target;
        const job_id = _id
        const email = form.email.value
        const name = form.name.value
        const resume_link = form.resumeLink.value
        const appliedJobData = {
            job_id, email, name, resume_link
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/applications`, appliedJobData, {
                withCredentials: true
            })
            console.log(data)
            my_modal_3.close()
            toast.success('Applied Successfully')
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
        catch (err) {
            my_modal_3.close()
            toast.error(err.response.data.message || 'Something went wrong')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="p-8">
                            <img className="w-full h-[400px] object-cover rounded-xl" src={picture_url} alt={job_title} />
                        </div>

                        <div className="p-8 space-y-6">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{job_title}</h1>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <span className="px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                                        {job_type}
                                    </span>
                                    <span className="px-3 py-1 text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                                        {salary}
                                    </span>
                                </div>

                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-gray-600 dark:text-gray-300">{description}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Applicants</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">{applicants_number}</p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Deadline</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {new Date(deadline).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Posted by</p>
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{creator_name}</p>
                                </div>

                                <button
                                    onClick={handleApplyButtonClick}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white dark:bg-gray-800">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='p-4'>
                        <h2 className='text-center text-3xl font-bold text-gray-900 dark:text-white mb-8'>Apply Now</h2>
                        <form onSubmit={handleApplyForm} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input
                                    type="text"
                                    name='email'
                                    defaultValue={user?.email}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    defaultValue={user?.displayName}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resume Link</label>
                                <input
                                    type="text"
                                    name='resumeLink'
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Submit Resume Link"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-medium py-3 rounded-lg transition duration-300"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default DetailsJob;