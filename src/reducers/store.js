import { configureStore } from '@reduxjs/toolkit';

import offers from './offers.js';

export const store = configureStore({
  reducer: {
    offers
  },
});
