import React, { useEffect } from 'react';
import PostForm from  '../components/PostForm';
import PostCard from  '../components/PostCard';
// useDispatch = dispatch로 store actions를 사용할 수 있게 해준다.
// useSelector = store에 정의된 state를 가져올 수 있게 해준다.
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

const Home = () => {
    const dispatch = useDispatch();
    // 구조분해로 user의 state를 모두 꺼내 쓸 수 있다.
    // 성능최적화로 최대한 잘게 쪼게서 변수를 늘려 사용할 수도 있다(구조분해X)
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    useEffect(() => {
        // LOG_IN을 import해서 아래 처럼 정의해줘도 된다.
        // dispatch({
        //     type: LOG_IN,
        //     data: {
        //         nickname: 'asdasd',
        //     },
        // });
        // 액션 자체를 import해서 아래처럼 사용할수도 있다
        // dispatch(loginAction);
        // dispatch(logoutAction);
        // dispatch(loginAction);

    }, []);

    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            })}
        </div>
    );
};

export default Home;