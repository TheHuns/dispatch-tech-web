import {
  GET_TICKETS,
  ADD_TICKET,
  DELETE_TICKET,
  SET_DETAIL_TICKET
} from "../actions/tickets";

const initialState = {
  tickets: [],
  detailTicket: null
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

    case SET_DETAIL_TICKET:
      let detailTicket = state.tickets.filter(
        ticket => ticket._id === action.payload
      );
      return { ...state, detailTicket: detailTicket };

    default:
      return state;
  }
};
