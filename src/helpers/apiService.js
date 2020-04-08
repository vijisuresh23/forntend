import axios from 'axios';
import {urls} from "../config/env-config";

const promiseWithErrorHandling = (promise) => {
    return promise.catch(err => {
        if (err.response.status === 500) {
            document.location.href = '/error';
        } else {
            throw err;
        }
    });
};

export default {
    post: (path, payload) => {
        return promiseWithErrorHandling(axios.post(`${urls.service}/${path}`, payload));
    },

    get: (path) => {
        return promiseWithErrorHandling(axios.get(`${urls.service}/${path}`));
    }
};