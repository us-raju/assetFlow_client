import { createBrowserRouter } from "react-router";
import Home from "../Layouts/RootLayout/Home/Home/Home";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import HrRegister from "../Layouts/AuthLayout/HR_Register/HrRegister";
import EmployeeRegister from "../Layouts/AuthLayout/employeeRegister/EmployeeRegister";
import Login from "../Layouts/AuthLayout/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
  {
    path:"/",
    Component:AuthLayout,
    children:[
      {
        path:"/hrRegister",
        element:<HrRegister></HrRegister>
      },
      {
        path:"/employeeRegister",
        element:<EmployeeRegister></EmployeeRegister>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  }
]);


export default router