import axios from 'axios';

/** Default config for axios instance */
let config = {
  baseURL: 'http://localhost:8080/'
};

/** set heardes  */
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/** Creating the instance for axios */
const httpClient = axios.create(config);

/** Auth token interceptors */
const authInterceptor = (config: any) => {
  /** TODO: Add auth token */
  return config;
};

/** logger interceptors */
const loggerInterceptor = (config: any) => {
  /** TODO */
  return config;
}

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    /** TODO: Add any response interceptors */
    console.log('response received',response);
    return response;
  },
  error => {
    /** TODO: Do something with response error */
    console.log('error occured',error);
    return Promise.reject(error);
  }
);

export { httpClient };
