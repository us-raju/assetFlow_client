import React, { useEffect } from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const useAxiosSecure = () => {
  const axiosInstance = useAxios();
  const { user, LogOut } = useAuth();
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("AccessToken")
  console.log(accessToken)
  useEffect(() => {
    // request interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
      }
    );
    return () => [axiosInstance.interceptors.request.eject(requestInterceptor)];
  }, [user, axiosInstance]);
  return axiosInstance;
};

export default useAxiosSecure;
