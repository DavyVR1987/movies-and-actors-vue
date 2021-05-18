import http from "@/http-common";

class MovieDataService {
    getAll(): Promise<any> {
        return http.get("/Movies")
    }
}

export default new MovieDataService