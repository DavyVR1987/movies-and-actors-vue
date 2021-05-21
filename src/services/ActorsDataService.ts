import http from "@/http-common";

class ActorDataService {
    getAll(): Promise<any> {
        return http.get("/Actors");
    }

    getById(id: string): Promise<any> {
        return http.get(`/Actors/${id}`);
    }

    delete(id: number): Promise<any> {
        return http.delete(`/Actors/${id}`);
    }

    edit(id:number, actorObject: any): Promise<any> {    
        return http.post(`/Actors/${id}`, actorObject);
    }

    add(actorObject: any): Promise<any> {    
        return http.post("/Actors", actorObject);
    }
}

export default new ActorDataService