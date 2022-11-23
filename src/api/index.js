import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const fetchRoomsByDateGuest = (data) => API.get('/api/booking/find_available_room', { params: data });
export const fetchRoomsFullDate = () => API.get('/roomfull-date');

export const createBooking = (data) => API.post('/api/booking', data);

export const createEvent = (data) => API.post('/api/reservation/event', data);
