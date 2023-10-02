import { Profile, Right, User } from "./data.model";


const ROOT_USER: User = {
    id : 0,
    name: 'Root',
    password: 'Root',
    profile: {
        profile: Right.DELETE,
        user: Right.DELETE,
        task: Right.DELETE,
    }
} 
const ADMIN_USER: User = {
    id : 1,
    name: 'Admin',
    password: 'Admin',
    profile: {
        profile: Right.UPDATE,
        user: Right.UPDATE,
        task: Right.DELETE,
    }
} 

const EXPERT_USER: User = {
    id : 2,
    name: 'Expert',
    password: 'Expert',
    profile: {
        profile: Right.SELECT,
        user: Right.CREATE,
        task: Right.CREATE,
    }
} 

const USER: User = {
    id : 3,
    name: 'User',
    password: 'User',
    profile: {
        user: Right.SELECT,
        task: Right.CREATE,
    }
} 

const LIMITED_USER: User = {
    id : 4,
    name: 'Limited',
    password: 'Limited',
    profile: {
        task: Right.CREATE,
    }
} 

const ANONYME_USER: User = {
    name: 'Anonyme',
    profile: {
        task: Right.SELECT,
    }
} 

export class DataStore {
    static USERS : Array<User> = [
        ROOT_USER,
        ADMIN_USER,
        EXPERT_USER,
        USER,
        LIMITED_USER,
        ANONYME_USER,
    ]
}