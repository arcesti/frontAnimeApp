import api from "./api.js";

export default class ServiceAnime {
    async getPop () {
        const res = await api.get("/anime/topPopular").catch((error) => {
            return error.message;
        });
        return res.data;
    }
}