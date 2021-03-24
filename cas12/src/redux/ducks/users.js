// initial state
const init = {
    users: []
};

// constants
const SET_USERS = 'SET_USERS';
const ADD_USER = 'ADD_USER';

// actions
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    };
};

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
};

// reducer
const reducer = (state = init, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        case ADD_USER:
            let usersList = state.users.map(user => user);
            let newUser = action.payload;
            newUser.id = Math.floor((Math.random() * 100) + 11);
            usersList.push(action.payload);
            return {...state, users: usersList}
            // alternative way 
            // return {...state, users: [...state.users, newUser]};
        default:
            return state;
    }
};

export default reducer;