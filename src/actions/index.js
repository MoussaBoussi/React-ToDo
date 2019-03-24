import { POST_TODO, DELETE_TODO } from "./types";

export const delete_todo = payload => ({
    type: POST_TODO,
    payload
});

export const post_todo = index => ({
    type: DELETE_TODO,
    index
});
