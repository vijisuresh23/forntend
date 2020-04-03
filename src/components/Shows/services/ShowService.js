import axios from "axios";
import {urls} from "../../../config/env-config";
import ShowModel from "../models/ShowModel"

export default {
    fetchAll: async () => {
        const response = await axios.get(`${urls.service}/shows`);
        return response.data.map(data => new ShowModel(data));
    },

    create: async (payload) => {
        const response = await axios.post(`${urls.service}/shows`, payload);
        return response.data;
    }
}
