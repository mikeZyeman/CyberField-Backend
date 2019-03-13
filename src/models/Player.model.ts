import {Character} from "./Character.model";

export interface Player {

    name: string;
    characters: Character[];

    posx: number;
    posy: number;

    lookingX: number;
    lookingY: number;
}