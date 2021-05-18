import axios, {AxiosInstance} from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: "https://localhost:44341/api",    
});

export default apiClient;