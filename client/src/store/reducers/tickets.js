import { GET_TICKETS, ADD_TICKET, DELETE_TICKET } from "../actions/tickets";

const initialState = {
  tickets: [],
  userProducts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload
      };

    case ADD_TICKET:
      return { ...state };

    case DELETE_TICKET:
      return { ...state };

    default:
      return state;
  }
};
