import { GET, POST, DELETE } from "./actions/types";

export default (
  state = {
    todos: [],
    todo: ""
  },
  action
) => {
  switch (action.type) {
    case POST:
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
};
