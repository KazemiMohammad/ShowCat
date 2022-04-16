import {  createStore } from 'redux';
import { ShowCatReducer } from './reducer';

export type RootState = ReturnType<typeof ShowCatReducer>;

export let store = createStore(ShowCatReducer);
