import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formReducer from './Reducers/FormSlice'
import animationReducer from './Reducers/AnimationSlice'
import artifactReducer from './Reducers/ArtifactSlice'
import heroReducer from './Reducers/HeroSlice'
import navbarReducer from './Reducers/NavbarSlice'


const rootReducer = combineReducers({
	formReducer,
	animationReducer,
	artifactReducer,
	heroReducer,
	navbarReducer
});

export const AppStore = () => configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof AppStore>['dispatch'];
