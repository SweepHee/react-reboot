import { all, call } from 'redux-saga/effects';
import user from './user';
import post from './post';

// function* => 비동기, 무한의 개념 표현할때 많이 쓴다.
export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ])
}