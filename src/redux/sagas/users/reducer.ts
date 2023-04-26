import * as actionType from './actionType'
import { Action, Reducer } from 'redux'

export interface State{
    user: any
}

const initialState: State = {
    user: []
}

export const Users: Reducer<State> = (state = initialState, {type, payload}: {type:String, payload:any}) => {
    switch(type){
        case actionType.USER_LOGIN:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}