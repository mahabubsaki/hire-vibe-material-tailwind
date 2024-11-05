import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="font-lato">
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-364px)] dark:!bg-gray-900'>
                <Outlet />
            </div>
            <ToastContainer style={{ zIndex: 9999999 }} />
            <Footer></Footer>
        </div>
    );
};

export default Root;