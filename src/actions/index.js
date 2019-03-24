import { POST_TODO, DELETE_TODO } from "./types";

export function post_todo (payload){
    return {
        type: POST_TODO,
        payload
    };
}

export function delete_todo (index){
    return {
        type: DELETE_TODO,
        index
    };
}
