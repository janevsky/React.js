// initial state
const init = {
    users: []
};

// constants
const SET_USERS = 'SET_USERS';

// actions
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    };
};

// reducer
const reducer = (state = init, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
};

export default reducer;