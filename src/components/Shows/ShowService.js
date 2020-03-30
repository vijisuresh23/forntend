import axios from "axios";
import { urls } from "../../config/env-config";
import ShowModel from "./ShowModel"

class ShowService {
    async fetchAll() {
        const response = await axios.get(urls.service + `/shows`);
        return response.data.map(data => new ShowModel(data));
    }

}


export default new ShowService();
