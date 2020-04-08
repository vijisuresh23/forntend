import apiService from "../../../helpers/apiService";
import axios from 'axios';
import {urls} from "../../../config/env-config";
import ShowModel from "../models/ShowModel"

export default {
    fetchAll: async () => {
        const response = await apiService.get(`${urls.service}/shows`);
        return response.data.map(show => new ShowModel(show));
    },

    create: async (payload) => {
        const response = await axios.post(`${urls.service}/shows`, payload);
        return new ShowModel(response.data);
    }
}
