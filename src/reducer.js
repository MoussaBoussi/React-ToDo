import { post_todo, delete_todo } from "./actions";

export default (
  state = {
    todos: [],
    todo: ""
  },
  action
) => {
  switch (action.type) {
    case post_todo:
      return {
        ...state,
        todos: [ state.todos, action.payload ]
      };
    case delete_todo:
    return {
      ...state,
      todos: [ state.todos, action.payload ]
    };
    default:
      return state;
  }
};
