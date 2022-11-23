import * as api from '../api';
import { FETCH_ROOMS, START_LOADING, END_LOADING } from '../constants/actionTypes';
import { rooms } from '../constants/text';

// Action Creators
export const getRoomsByDateGuest = (checkIn_date, checkOut_date, guest) => async (dispatch) => {
   try {
      dispatch({ type: START_LOADING });

      const {
         data: { availableRoom },
      } = await api.fetchRoomsByDateGuest({ checkIn: checkIn_date, checkOut: checkOut_date, guest: guest.adult + guest.child });
      // const availableRoom = ['Superior', 'Deluxe', 'Beach', 'Family'];

      const filterData = rooms.filter(({ type }) => availableRoom?.indexOf(type) !== -1);

      dispatch({ type: FETCH_ROOMS, payload: { data: filterData } });

      dispatch({ type: END_LOADING });
   } catch (error) {
      console.log(error);
   }
};
