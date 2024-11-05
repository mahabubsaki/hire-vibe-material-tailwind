import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import DetailsJob from "../pages/jobDetails/DetailsJob";
import AddJob from "../pages/addjob/AddJob";
import AllJobs from "../pages/all jobs/AllJobs";
import MyJobs from "../pages/my job/MyJobs";
import UpdateJobs from "../pages/updateJob/UpdateJobs";
import AppliedJobs from "../pages/applied Jobs/AppliedJobs";
import PrivateRoute from "./Private Route/PrivateRoute";
import AppliedJob from "../pages/single applied job/AppliedJob";
import ErrorPage from "../pages/error page/ErrorPage";
import Blogs from "../pages/blog page/Blogs";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/jobDetails/:id",
        element: <PrivateRoute>
          <DetailsJob></DetailsJob>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
      {
        path: "/add-job",
        element: <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/my-jobs",
        element: <PrivateRoute>
          <MyJobs></MyJobs>
        </PrivateRoute>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/applied-jobs",
        element: <PrivateRoute>
          <AppliedJobs></AppliedJobs>
        </PrivateRoute>
      },
      {
        path: "/appliedJob/:id",
        element: <AppliedJob></AppliedJob>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/applied-job/${params.id}`)
      },
      {
        path: "/update-job/:id",
        element: <UpdateJobs></UpdateJobs>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      }
    ]
  },
]);

export default router