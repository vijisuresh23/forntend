import axios from 'axios';
import {urls} from "../config/env-config";

export default {
    post: (path, payload) => {
        return axios.post(`${urls.service}/${path}`, payload)
            .catch(err => {
                if (err.response.status === 500) {
                    document.location.href = '/error';
                } else {
                    throw err;
                }
            });
    },

    get: (path) => {
        return axios.get(`${urls.service}/${path}`)
            .catch(err => {
                if (err.response.status === 500) {
                    document.location.href = '/error';
                } else {
                    throw err;
                }
            });
    }
};