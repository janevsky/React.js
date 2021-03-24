// initial state
const init = {
    cakes: 15,
    buyCakesMessage: null,
    buyCakesError: null,
    restoreCakesMessage: null
};

// constants
const BUY_CAKES = 'BUY_CAKES';
const RESTORE_CAKES = 'RESTORE_CAKES';

// actions
export const buyCakes = (numCakes) => {
    return {
        type: BUY_CAKES,
        payload: numCakes
    }
};

export const restoreCakes = (numCakes) => {
    return {
        type: RESTORE_CAKES,
        payload: numCakes
    }
};

// reducer
const reducer = (state = init, action) => {
    switch (action.type) {
        case BUY_CAKES:
            if (state.cakes - action.payload >= 0) {
                return {
                    ...state,
                    cakes: state.cakes - action.payload,
                    buyCakesMessage: `You just bought ${action.payload} cakes.`,
                    buyCakesError: null,
                    restoreCakesMessage: null
                }
            } else {
                return {
                    ...state,
                    buyCakesMessage: null,
                    buyCakesError: `Not enough cakes, only ${state.cakes} left.`,
                    restoreCakesMessage: null
                }
            }
        case RESTORE_CAKES:
                return {
                    ...state,
                    cakes: state.cakes + action.payload,
                    buyCakesMessage: null,
                    buyCakesError: null,
                    restoreCakesMessage: `You just restored ${action.payload} cakes.`,
                }
        default:
            return state;
    }
};

export default reducer;