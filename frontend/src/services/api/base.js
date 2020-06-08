import axios from 'axios';

const URL = 'http://localhost:5000/api';

const service = axios.create({
    baseURL: URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

service.interceptors.request.use((config) => {
    return ({
            ...config,
            // headers: {},
        })
    },
    error => Promise.reject(error),
);

service.interceptors.response.use((response) =>
    response,
    async (error) => {
        return Promise.reject(error.response.data);
    },
);

const { get, post, put, delete: destroy } = service;
export { get, post, put, destroy };
