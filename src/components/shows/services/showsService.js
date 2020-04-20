import apiService from "../../../helpers/apiService";
import ShowModel from "../models/ShowModel"

export default {
    fetchAll: async () => {
        const response = await apiService.get(`shows`);
        return response.data.map(show => new ShowModel(show));
    },

    create: async (payload) => {
        const response = await apiService.post(`shows`, payload);
        return new ShowModel(response.data);
    }
}
