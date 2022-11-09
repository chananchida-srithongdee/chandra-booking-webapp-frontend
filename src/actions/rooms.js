import * as api from '../api';
import { FETCH_ROOMS, FETCH_ROOM, START_LOADING, END_LOADING } from '../constants/actionTypes';
import { rooms } from "../constants/text";

// Action Creators
export const getRoomsByDateGuest = (checkIn_date, checkOut_date, guest) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        // const { data : { availableRoom } } = await api.fetchRooms(checkIn_date, checkOut_date, guest); 
        const availableRoom = ["Superior","Deluxe","Beach","Family"]

        const filterData = rooms.filter(({ type }) => (availableRoom.indexOf(type) !== -1))

        dispatch({ type: FETCH_ROOMS, payload: {data: filterData} });
        
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);        
    }
};

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
