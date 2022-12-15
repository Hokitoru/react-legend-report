const CHANGE_NAME = 'CHANGE_NAME';

export const nameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
}

export const changeNameAction = (payload) => {
    return {type: CHANGE_NAME, payload}
}

const defaultState = 'noname';