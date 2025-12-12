import { createBrowserRouter } from "react-router";
import Home from "../Layouts/RootLayout/Home/Home/Home";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import HrRegister from "../Layouts/AuthLayout/HR_Register/HrRegister";
import EmployeeRegister from "../Layouts/AuthLayout/employeeRegister/EmployeeRegister";
import Login from "../Layouts/AuthLayout/Login/Login";
import HR_Dashbord from "../Layouts/DashbordLayout/HR_Dashbord/HR_Dashbord";
import Employee_Dashbord from "../Layouts/DashbordLayout/Employee_Dashbord/Employee_Dashbord";
import AddAsset from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/AddAsset";
import AssetList from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/AssetList";
import AllRequest from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/AllRequest";
import MyEmployeeList from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/MyEmployeeList";
import UpgradePackage from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/UpgradePackage";
import Profile from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/Profile";


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
  Component:HR_Dashbord,
  children:[
    {
      path:"/hr_dashbord/assetList",
      element:<AssetList></AssetList>
    },
    {
      path:"/hr_dashbord/addAsset",
      element:<AddAsset></AddAsset>
    },
    {
      path:"/hr_dashbord/allRequest",
      element:<AllRequest></AllRequest>
    },
    {
      path:"/hr_dashbord/myEmployeeList",
      element:<MyEmployeeList></MyEmployeeList>
    },
    {
      path:"/hr_dashbord/upgradePackage",
      element:<UpgradePackage></UpgradePackage>
    },
    {
      path:"/hr_dashbord/profile",
      element:<Profile></Profile>
    },
  ]
},
{
  path:"/employee_dashbord",
  Component:Employee_Dashbord
},
]);


export default router