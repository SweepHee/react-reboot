// next에서 부모 컴포넌트가 된다 _app.js root를 담당
import React from 'react';
import Head from "next/dist/next-server/lib/head";
import PropTypes from 'prop-types';
import AppLayout from "../components/AppLayout";
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    )
};

// props를 정확히 정의해줌. 적용을 안해도 되지만 하면 오류를 잡아준다(?)
NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

export default withRedux((initialState, options) => {
    // 나중에 미들웨어가 추가된다면 아래 미들웨어즈 배열에 추가하면 된다!
    const middlewares = [];
    // compose는 여러가지 미들웨어 합성한다. 어플라이미들웨어는 인자로 들어온 미들웨어를 적용(?)하고 아래의 redux확장까지 합성해준다
    // 거의 안바뀌니까 그냥 가져다 쓰자!
    const enhancer = compose(
        applyMiddleware(...middlewares), 
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer); // redux가 가지고 있다
    return store;
})(NodeBird);