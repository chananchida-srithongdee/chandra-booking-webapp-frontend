// import * as api from '../api';
// import { FETCH_OFFERS, FETCH_OFFER, START_LOADING, END_LOADING } from '../constants/actionTypes';

// // Action Creators
// export const getOffers = () => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const { data } = await api.fetchOffers(); // res.data

//         dispatch({ type: FETCH_OFFERS, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const getOfferById = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const { data } = await api.fetchOffer(id); // res.data

//         dispatch({ type: FETCH_OFFER, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (error) {
//         console.log(error);
//     }
// };
