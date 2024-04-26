import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_ADDRESS,
});

instance.interceptors.request.use(
  function (config) {
    (config.params.apikey = import.meta.env.VITE_PUBLIC_API_KEY),
      (config.params.ts = Date.now());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toast.error(error.message);
    return Promise.reject(error);
  },
);

export default instance;
