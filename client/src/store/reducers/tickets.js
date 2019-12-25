import {
  GET_TICKETS,
  ADD_TICKET,
  DELETE_TICKET,
  SET_DETAIL_TICKET,
  GET_OPEN_TICKETS
} from "../actions/tickets";

const initialState = {
  tickets: [],
  openTickets: [],
  detailTicket: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload
      };

      case GET_OPEN_TICKETS:
        return {
          ...state,
          openTickets: action.payload
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
