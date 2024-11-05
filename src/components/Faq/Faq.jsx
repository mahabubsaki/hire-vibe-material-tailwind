import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Faq = () => {
    const faqData = [
        {
            question: "How do I apply for a job?",
            answer: "To apply for a job, click on the 'View Details' button of the job you are interested in. On the job details page, click the 'Apply' button. If you are not logged in, you will be prompted to log in first."
        },
        {
            question: "How do I create an account?",
            answer: "Click on the 'Register' button in the navbar and fill out the registration form with your name, email, password, and a photo URL. Once you submit the form, your account will be created."
        },
        {
            question: "Can I apply for a job after the application deadline?",
            answer: "No, you cannot apply for a job after the application deadline has passed. Make sure to apply before the deadline mentioned in the job details."
        },
        {
            question: "How do I add a new job posting?",
            answer: "To add a new job posting, you need to be logged in. Navigate to the 'Add A Job' page from the navbar, fill out the job details form, and submit it. Your job will be added to the list of available jobs."
        },
        {
            question: "How can I see the jobs I have applied for?",
            answer: "After logging in, go to the 'Applied Jobs' page from the navbar. Here, you will see a list of all the jobs you have applied for."
        },
        {
            question: "How do I update or delete a job I posted?",
            answer: "To update or delete a job you posted, go to the 'My Jobs' page after logging in. You will see a list of jobs you have posted with options to update or delete each job."
        },
        {
            question: "How do I contact support?",
            answer: "If you have any questions or need support, you can use the 'Contact Us' form on our website to send us a message. We will get back to you as soon as possible."
        }
    ];
    return (
        <>
            <div className=' mx-auto container p-8 bg-[#edf8ff]'>
            <h2 className='text-center font-bold text-2xl'>FAQ</h2>
            <div className="divider"></div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    
                    {faqData.map((faq, index) => (
                        <SwiperSlide key={index} className='h-[500px] p-8 text-center'>
                            <h2 className='text-xl font-bold mb-6'>{faq.question}</h2>
                            <p className='pb-8 w-2/3 text-center mx-auto'>{faq.answer}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default Faq;