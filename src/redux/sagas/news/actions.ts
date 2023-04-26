import * as actionType from './actionType'

export const actionsNews = (payload : {payload: any}) => {
    return {
        type: actionType.GET_NEWS,
        payload
    }
}