import {combineReducers} from 'redux'
import { News } from './sagas/news/reducer'
import {Users} from './sagas/users/reducer'

export const reducers = combineReducers({
    Users,
    News,
})

export type RootState = ReturnType<typeof reducers>