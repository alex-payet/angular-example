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

export enum Right {
    SELECT,
    CREATE,
    UPDATE,
    DELETE,
}

export interface Profile {
    profile ?: Right,
    user ?: Right,
    task ?: Right
}

export interface User extends Id {
    name: string,
    password ?: string ,
    profile?: Profile 
}

export interface Task extends Id {
    name: string,
    description: string,
    state: State,
    author: User | number,
}
