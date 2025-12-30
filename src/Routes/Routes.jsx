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
import MyAsset from "../Layouts/DashbordLayout/Employee_Dashbord/EmployeeDashbordPage/MyAsset";
import RequestAsset from "../Layouts/DashbordLayout/Employee_Dashbord/EmployeeDashbordPage/RequestAsset";
import MyTeam from "../Layouts/DashbordLayout/Employee_Dashbord/EmployeeDashbordPage/MyTeam";
import EmProfile from "../Layouts/DashbordLayout/Employee_Dashbord/EmployeeDashbordPage/EmProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import HRCompanyInfo from "../Layouts/AuthLayout/HR_Register/HRcompanyInfo/HRCompanyInfo";
import Forbidden from "../components/Forbidden/Forbidden";
import HrRoute from "../Provider/HrRoute";

import PaymentSuccess from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/Payment/PaymentSuccess";
import PaymentCancel from "../Layouts/DashbordLayout/HR_Dashbord/hrDashbordPages/Payment/PaymentCancel";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/authLayout",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "hrRegister",
        element: <HrRegister></HrRegister>,
      },
      {
        path: "employeeRegister",
        element: <EmployeeRegister></EmployeeRegister>,
      },
     
      {
        path: "hrcompanyInfo",
        element: <HRCompanyInfo></HRCompanyInfo>,
      },
      {
        path: "forbidden",
        element: <Forbidden></Forbidden>,
      },
    ],
  },
  {
    path: "hr_dashbord",
    element: (
      <PrivateRoute>
        <HrRoute>
          <HR_Dashbord></HR_Dashbord>
        </HrRoute>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        element: <AssetList></AssetList>,
      },
      {
        path: "addAsset",
        element: <AddAsset></AddAsset>,
      },
      {
        path: "allRequest",
        element: <AllRequest></AllRequest>,
      },
      {
        path: "myEmployeeList",
        element: <MyEmployeeList></MyEmployeeList>,
      },
      {
        path: "upgradePackage",
        element: <UpgradePackage></UpgradePackage>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "payment-cancel",
        element: <PaymentCancel></PaymentCancel>,
      },
    ],
  },
  {
    path: "employee_dashbord",
    Component: Employee_Dashbord,
    children: [
      {
        index:true,
        element: <MyAsset></MyAsset>,
      },
      {
        path: "requsetasset",
        element: <RequestAsset></RequestAsset>,
      },
      {
        path: "myteam",
        element: <MyTeam></MyTeam>,
      },
      {
        path: "emprofile",
        element: <EmProfile></EmProfile>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
