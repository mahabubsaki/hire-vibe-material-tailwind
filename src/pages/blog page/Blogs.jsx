const Blogs = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Programming Insights</h1>

                <div className="space-y-8">
                    <article className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Modern JavaScript Features Every Developer Should Know</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="mb-6 text-gray-600 dark:text-gray-300">JavaScript has evolved significantly over recent years. Here are some essential modern features that can improve your code quality and productivity:</p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900">
                                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Optional Chaining (?.):</strong> Safely access nested object properties without explicit null checks</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900">
                                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Nullish Coalescing (??):</strong> Provide fallback values only for null/undefined</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900">
                                        <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Array Methods:</strong> map, filter, reduce for functional programming approaches</span>
                                </li>
                            </ul>
                            <p className="text-gray-600 dark:text-gray-300">These features make code more readable and maintainable while reducing common runtime errors.</p>
                        </div>
                    </article>

                    <article className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl transition-all hover:shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">React Performance Optimization Techniques</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="mb-6 text-gray-600 dark:text-gray-300">Optimizing React applications is crucial for better user experience. Here are key techniques:</p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-semibold text-sm">1</span>
                                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">React.memo():</strong> Prevent unnecessary re-renders of functional components by memoizing them</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-semibold text-sm">2</span>
                                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">useCallback:</strong> Memoize functions to maintain referential equality across renders</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-semibold text-sm">3</span>
                                    <span className="text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">useMemo:</strong> Cache expensive computations to avoid redundant calculations</span>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300">Implementing these optimizations can significantly improve your application&apos;s performance.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blogs;