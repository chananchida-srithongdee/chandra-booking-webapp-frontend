import { FETCH_ROOMS, FETCH_ROOM, START_LOADING, END_LOADING } from '../constants/actionTypes.js';

const roomsReducer = (state = { isLoading: true, rooms: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ROOMS:
            return { ...state, rooms: action.payload.data, };
        case FETCH_ROOM:
            return { ...state, room: action.payload.data };
        default:
            return state;
    }
};

export default roomsReducer;