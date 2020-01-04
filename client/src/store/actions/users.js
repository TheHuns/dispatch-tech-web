const CHECK_FOR_USER = "CHECK_FOR_USER";


export const checkForUser = () => dispatch => ({
    dispatch({
        type: CHECK_FOR_USER,
        payload: {"check for user"}
    })
    
})
