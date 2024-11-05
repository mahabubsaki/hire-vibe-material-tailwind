import { Link } from 'react-router-dom';
import img from '../../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
                <img className='w-1/2' src={img} alt="" />
            </div>
            <div className='flex items-center justify-center w-full'>
                <Link className=' bg-blue-500 text-white py-2 px-4 rounded-md mb-8' to="/">Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;