import axios from "axios";
import ROOT_CONFIG from "../config/root";

class ApiService {

    constructor() {
        this.api = axios.create({
            baseURL: ROOT_CONFIG.BASE_URL,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
    }

    async request(method, url, data = null, config = {}) {
        return this.api({
            method,
            url,
            data,
            ...config,
        });
    }

    get(url, config = {}) {
        return this.request("get", url, null, config);
    }

    post(url, data = {}, config = {}) {
        return this.request("post", url, data, config);
    }

    put(url, data = {}, config = {}) {
        return this.request("put", url, data, config);
    }

    patch(url, data = {}, config = {}) {
        return this.request("patch", url, data, config);
    }

    delete(url, config = {}) {
        return this.request("delete", url, null, config);
    }
}

export default new ApiService();