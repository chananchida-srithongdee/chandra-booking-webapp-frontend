// import { FETCH_OFFERS, FETCH_OFFER, START_LOADING, END_LOADING } from '../constants/actionTypes';

// const offersReducer = (state = { isLoading: true, offers: [] }, action) => {
//     switch (action.type) {
//         case START_LOADING:
//             return { ...state, isLoading: true };
//         case END_LOADING:
//             return { ...state, isLoading: false };
//         case FETCH_OFFERS:
//             return { ...state, offers: action.payload.data, };
//         case FETCH_OFFER:
//             return { ...state, offer: action.payload.data };
//         default:
//             return state;
//     }
// };

// export default offersReducer;