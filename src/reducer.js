import { POST_TODO, DELETE_TODO } from "./actions/types";

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case POST_TODO:
      return [
        ...state,
        action.payload
      ];
    case DELETE_TODO:
      return state.filter((item, i) => { return i !== action.index } );
    default:
      return state;
  }
};
