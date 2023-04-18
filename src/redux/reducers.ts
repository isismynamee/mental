import {combineReducers} from 'redux'
import { News } from './news/reducer'

export const reducers = combineReducers({
    News
})

export type RootState = ReturnType<typeof reducers>