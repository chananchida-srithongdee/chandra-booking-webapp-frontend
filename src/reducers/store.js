import { configureStore } from '@reduxjs/toolkit';

import offers from './offers.js';
import rooms from './rooms.js';

export const store = configureStore({
  reducer: {
    offers,
    rooms
  },
});
