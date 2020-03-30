import axios from "axios";
import { urls } from "../../config/env-config";

class ShowsService {
    static async fetchAll() {
        const response = await axios.get(urls.service + `/shows`);
        return response.data.map(data => new ShowModel(data));
    }

}