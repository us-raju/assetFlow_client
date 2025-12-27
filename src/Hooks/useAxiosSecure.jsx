import React, { useEffect } from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import axios from "axios";
import Loading from "../components/Loading/Loading";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { LogOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("AccessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    const resInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },

      (error) => {
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          LogOut().then(()=>{
            navigate("/login")
          })
        }

        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return instance;
};

export default useAxiosSecure;
