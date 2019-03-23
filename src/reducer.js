import { INCREMENT } from "./actions/types";

export default (
  state = {
    count: 0
  },
  action
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
};
