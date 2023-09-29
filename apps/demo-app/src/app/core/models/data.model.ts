interface Id {
    id?: number;
}

export type RightType = 'profile' | 'user' | 'task';

export enum State {
    CREATE,
    WORK,
    TEST,
    REJECT,
    DONE
}

export interface Right {
    create: boolean,
    update: boolean,
    delete: boolean,
    select: boolean
}

export interface Profile extends Id {
    name: string,
    rights: Map<RightType, Right>
}

export interface User extends Id {
    name: string,
    password: string,
    profile?: Profile | number // profile existant si et si seulement le compte a bien été crée 
}

export interface Task extends Id {
    name: string,
    description: string,
    state: State,
    author: User | number,
}
