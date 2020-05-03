import apiService from "../../../helpers/apiService";

export default {
    fetchAll: async () => {
        const response = await apiService.get("shows");
        return response.data;
    },

    create: async (payload) => {
        const response = await apiService.post("shows", payload);
        return response.data;
    }
}
