export interface IChirp {
    id?: number;
    username?: string;
    userid: string;
    content: string;
    location?: string;
    _created?: Date | string;
}

export interface IUsers {
    id: number;
    userid: string;
    email?: string;
    password?: string;
    _created?: Date;

}

export interface ChirpToEdit {
    username?: number
    content?: string
    location?: string
}


