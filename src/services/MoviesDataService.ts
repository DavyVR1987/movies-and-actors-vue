import http from "@/http-common";

class MovieDataService {
    getAll(): Promise<any> {
        return http.get("/Movies");
    }

    getById(id: string): Promise<any> {
        return http.get(`/Movies/${id}`);
    }

    delete(id: number): Promise<any> {
        return http.delete(`/Movies/${id}`);
    }

    edit(id:number, movieObject: any): Promise<any> {    
        return http.post(`/Movies/${id}`, movieObject);
    }

    add(movieObject: any): Promise<any> {    
        return http.post("/Movies", movieObject);
    }
}

export default new MovieDataService