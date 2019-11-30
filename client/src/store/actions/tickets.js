import axios from "axios";

export const GET_TICKETS = "GET_TICKETS";
export const ADD_TICKET = "ADD_TICKET";
export const DELETE_TICKET = "DELETE_TICKET";
export const SET_DETAIL_TICKET = "SET_DETAIL_TICKET";

export const getTickets = () => dispatch => {
  axios
    .get("/tickets")
    .then(res =>
      dispatch({
        type: GET_TICKETS,
        payload: res.data
      })
    )
    .catch(err => console.error(err));
};

export const addTicket = newTicket => dispatch => {
  //begin post request to server
  axios
    .post("/tickets", newTicket)
    .then(res =>
      dispatch({
        type: ADD_TICKET,
        payload: res.data
      })
    )
    .catch(err => console.error(err));
};

export const deleteTicket = id => dispatch => {
  axios({
    method: "DELETE",
    url: "/tickets",
    data: {
      id: id
    }
  })
    .then(res => {
      dispatch({
        type: DELETE_TICKET,
        payload: res.data
      });
    })
    .catch(err => console.error(err));
};

export const setDetailTicket = id => dispatch => {
  dispatch({
    type: SET_DETAIL_TICKET,
    payload: id
  });
};
