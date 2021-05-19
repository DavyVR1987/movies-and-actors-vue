import Actor from '@/models/Actor';
    
export default interface Movie {
    id: number;
    name: string;
    year: string;
    genre: number;
    actors: Actor[];
}