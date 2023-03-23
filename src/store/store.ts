import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReducer from './Reducers/MainSlice';

const rootReducer = combineReducers({
	mainReducer,
});

export const AppStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof AppStore>['dispatch'];
