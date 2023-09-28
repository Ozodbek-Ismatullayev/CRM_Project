import axios from "axios";


const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})

http.interceptors.request.use(
    (config) => {
      let token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      // config.headers["Accept"] = "application/json";
      // config.headers["Access-Control-Allow-Origin"] = "*";
      // config.headers["Content-Type"] = "multipart/form-data";
      // config.headers['Content-Type'] = "application/json"
      return config;
    },
    (error) => Promise.reject(error)
  );

export default http