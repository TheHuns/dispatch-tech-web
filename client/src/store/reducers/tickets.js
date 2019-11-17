import {GET_TICKETS} from '../actions/tickets'

const initialState = {
  tickets: [],
  userProducts: []
};

export default (state = initialState, action) => {
  switch(action.type){

    case GET_TICKETS:
      let ticketList;
      fetch('/tickets', {
        method: "GET"
      }).then(res => res.json())
      .then(data => ticketList = data)
      return {
        ...state,
        tickets: ticketList
      }

      default:
        return state;
  }
};
