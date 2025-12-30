import axios from "axios";

const instance = axios.create({
  baseURL: "https://asset-flow-server-chi.vercel.app",
});

const useAxios = () => {
  return instance;
};
export default useAxios;
