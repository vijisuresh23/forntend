import axios from 'axios';
import {urls} from "../config/env-config";

const promiseWithErrorHandling = (promise) => {
    return promise.catch(err => {
        if (err.response.status === 500) {
            // noinspection JSCheckFunctionSignatures
            window.location.assign("/error");
        } else {
            throw err;
        }
    });
};

export default {
    post: async (path, payload) => {
        return promiseWithErrorHandling(axios.post(`${urls.service}/${path}`, payload));
    },

    get: async (path) => {
        return promiseWithErrorHandling(axios.get(`${urls.service}/${path}`));
    }
};
