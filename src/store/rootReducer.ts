import { combineReducers } from 'redux';

import { baseApi } from '@infrastructure/API/rtkQueryApi/baseApi';

export default combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
});