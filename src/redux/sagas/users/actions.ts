import * as actionType from './actionType'

export const actionsLogin = (payload : {payload: any}) => {
    return {
        type: actionType.USER_LOGIN,
        payload
    }
}