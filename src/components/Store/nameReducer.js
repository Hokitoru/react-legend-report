const CHANGE_NAME = 'CHANGE_NAME';

export const changeNameAction = (payload) => {
    return {type: CHANGE_NAME, payload}
}

export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return action.payload;
        default:
            return state;
    }
}

const defaultState = 'noname';