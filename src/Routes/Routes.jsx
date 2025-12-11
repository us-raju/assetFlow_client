import { createBrowserRouter } from "react-router";
import Home from "../Layouts/RootLayout/Home/Home/Home";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import HrRegister from "../Layouts/AuthLayout/HR_Register/HrRegister";
import EmployeeRegister from "../Layouts/AuthLayout/employeeRegister/EmployeeRegister";
import Login from "../Layouts/AuthLayout/Login/Login";
import HR_Dashbord from "../Layouts/DashbordLayout/HR_Dashbord/HR_Dashbord";
import Employee_Dashbord from "../Layouts/DashbordLayout/Employee_Dashbord/Employee_Dashbord";


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
  },
{
  path:"/hr_dashbord",
  Component:HR_Dashbord
},
{
  path:"/employee_dashbord",
  Component:Employee_Dashbord
},
]);


export default router