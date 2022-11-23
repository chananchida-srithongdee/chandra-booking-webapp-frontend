import { configureStore } from '@reduxjs/toolkit';

import rooms from './rooms.js';

export const store = configureStore({
   reducer: {
      rooms,
   },
});
