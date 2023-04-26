import { all } from "redux-saga/effects";
import * as news from '../sagas/news/saga'
import * as users from '../sagas/users/saga'

export function* rootSaga(){
    yield all([
        news.default(),
        users.default()
    ])
}