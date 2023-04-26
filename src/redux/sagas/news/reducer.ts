import * as actionType from './actionType'
import { Action, Reducer } from 'redux'

export interface State{
    news: any
}

const initialState: State = {
    news: []
}

export const News: Reducer<State> = (state = initialState, {type, payload}: {type:String, payload:any}) => {
    switch(type){
        case actionType.GET_NEWS:
            return {
                ...state,
                news: payload
            }
        default:
            return state
    }
}