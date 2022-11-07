// import * as api from '../api';
// import { FETCH_ROOMS, FETCH_ROOM, START_LOADING, END_LOADING } from '../constants/actionTypes';

// // Action Creators
// export const getRooms = () => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const { data } = await api.fetchRooms(); 

//         dispatch({ type: FETCH_ROOMS, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (error) {
//         console.log(error);        
//     }
// };

// export const getRoomById = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: START_LOADING });
//         const { data } = await api.fetchRoom(id); 

//         dispatch({ type: FETCH_ROOM, payload: data });
//         dispatch({ type: END_LOADING });
//     } catch (error) {
//         console.log(error);        
//     }
// };

// export const getRoomsFullDate = () => async (dispatch) => {
//     try {
//         const { data } = await api.fetchRoomsFullDate(); 

//         return data;
//     } catch (error) {
//         console.log(error);        
//     }
// };

// export const getRoomsAvailableByDate = (date) => async (dispatch) => {
//     try {
//         const { data } = await api.fetchRoomsAvailable(date); 

//         return data;
//     } catch (error) {
//         console.log(error);        
//     }
// };
