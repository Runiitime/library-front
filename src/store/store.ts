import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@infrastructure/API/rtkQueryApi/baseApi';
import rootReducer from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(baseApi.middleware),
    devTools: {
        autoPause: true,
        trace: false,
        traceLimit: 10,
        maxAge: 30,
        latency: 500,
    },
});

export type RootState = ReturnType<typeof store.getState>;