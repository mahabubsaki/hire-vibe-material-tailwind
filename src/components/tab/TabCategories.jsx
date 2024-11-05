import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const TabCategories = () => {
    const tabIndexMap = {
        0: 'All',
        1: 'On-Site',
        2: 'Remote',
        3: 'Hybrid',
        4: 'Part-Time'
    }
    const [jobs, setJobs] = useState([])
    const [fetching, setFetching] = useState(true)
    const [activeTabIndex, setSelectedTabIndex] = useState(0)

    useEffect(() => {
        const getData = async () => {
            setFetching(true);
            setJobs([]);
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs${tabIndexMap[activeTabIndex] === 'All' ? '' : `?job_type=${tabIndexMap[activeTabIndex]}`}`)
                setJobs(data)
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setFetching(false)
            }
        }
        getData()
    }, [activeTabIndex])

    const handleSelectTab = (index) => {
        setSelectedTabIndex(index)
    }

    return (
        <Tabs selectedIndex={activeTabIndex} onSelect={handleSelectTab}>
            <div className='container px-4 sm:px-6 py-10 mx-auto'>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                    }}
                    className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4'
                >
                    Find Jobs by Category
                </motion.h1>

                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                    }}
                    className='max-w-2xl mx-auto mb-10 text-center text-gray-600 dark:text-gray-300 text-lg'
                >
                    Explore diverse opportunities tailored to your lifestyle: on-site, remote, hybrid, and part-time positions available to suit your preferences
                </motion.p>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 0.2 },
                        ease: "easeIn",
                    }}
                    className='flex items-center justify-center mb-8'
                >
                    <TabList className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {Object.values(tabIndexMap).map((tabName, index) => (
                            <Tab
                                key={index}
                                className={`px-6 py-2.5 text-sm sm:text-base font-medium !rounded-full cursor-pointer transition-all duration-200 outline-none
                                         ${tabIndexMap[activeTabIndex] === tabName ? '!bg-indigo-600 !text-white' : 'hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-300 dark:text-gray-200'}`}
                            >
                                {tabName}
                            </Tab>
                        ))}
                    </TabList>
                </motion.div>

                {fetching ? (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
                    </div>
                ) : (
                    <>
                        {Object.values(tabIndexMap).map((_, index) => (
                            <TabPanel key={index}>
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        y: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 0.3 },
                                    }}
                                    className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'
                                >
                                    {jobs.map(job => (
                                        <JobCard key={job._id} job={job} />
                                    ))}
                                </motion.div>
                            </TabPanel>
                        ))}

                        {!jobs.length && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className='text-center py-10'
                            >
                                <p className='text-xl text-gray-600 dark:text-gray-300 font-medium'>No jobs found in this category</p>
                                <p className='text-gray-500 dark:text-gray-400 mt-2'>Please check back later or try a different category</p>
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </Tabs>
    );
};

export default TabCategories;