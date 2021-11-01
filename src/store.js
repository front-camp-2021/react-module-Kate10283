import { createStore } from 'redux';
import { rootReducer } from './features/reducers/reducer';

export const store = createStore(rootReducer);