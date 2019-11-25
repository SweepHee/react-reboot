# REACT NODEBIRD

## BUILD SETUP

### 기본셋업
```

1. npm init
2. npm i react react-dom next
3. npm i -D nodemon webpack
4. npm i -D eslint
    ㄴ .eslintrc 파일 생성
5. npm i eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks -D
6. npm i -g next
7. npm i -D eslint-config-airbnb
  ㄴ필수X air-bnb의 리액트 스타일가이드. 엄청 엄격해진다
  ㄴ .eslintrc => "extends": [ "airbnb" ]
  ㄴ 지나치게 엄격한건 "rules: { ~~ : "off" } 옵션 사용 가능
8. npm i -D eslint-plugin-jsx-a11y
  ㄴ eslint-airbnb 깔았을때 같이 깔아줘야 함.
  ㄴ 웹접근성 엄격하게 해줌
9. npm i -D babel-eslint
  ㄴ eslint는 정규문법만 지원함. 바벨 최신 문법을 지원하게 해줌.
  ㄴ .eslintrc => "parser": "babel-eslint",
  ㄴ "env": { "es6": true }

```

### 디자인 ANT DESIGN

```
1. npm i antd
```

### dependencies

```
1. npm i prop-types

2. npm i redux react-redux    =>  리덕스

3. npm i next-redux-wrapper    => next에선 wrapper 설치해야한다

4. npm i react-redux@next     => react-redux가 7.1버전 이상이면 해줄 필요 없다!!

5. npm i redux-saga

```

### react-redux

```

import { useSelector, useDispatch } from 'react-redux';

### useSelector 
1. store의 state를 가져올 수 있다.
ex) const { imagePaths } = useSelector(state => state.post);
2. 성능을 좋게하려면 최대한 잘게 변수로 정의해서 사용하는게 좋다.
ex) const isLoggedIn = useSelector(state => state.user.isLoggedIn)

### useDispatch
1. store의 액션을 실행시켜준다.
ex) dispatch(loginAction); // import { loginAction } from '~~'; 
2. actions 함수내부를 직접 정의해줄 수 있다.
ex) dispatch({
        type: LOG_IN,
        data: {
            nickname: 'asdasd',
        },
    }); 
    // 이 방법의 경우 store내의 action 호출 변수(?)를 정의해주고
    // import { LOG_IN } from '~~'; 의 형태로 사용한다

```


### REACT HOOKS

```

### useState
1. [스테이트, 스테이트를바꿀 펑션] = useState(초기스테이트값) 형태로 정의.
2. [value, setValue] = useState(0);
3. <button onClick={() => setValue(value + 1)}>+1</button> 버튼을 누를 시 알아서 스테이트 value 값이 +1 된다. 이게 useState.

### useEffect
1. 컴포넌트가 렌더링 될 때마다 특정 작업을 수행한다.
ex) useEffect(() => {
    console.log("렌더링 완료");
})

2. 가장 처음 화면에 렌더링 될 때만 실행하고 싶을 때. 즉 mount될때만 보이고 업데이트 시에 보여주고 싶지 않다면 2번째 인자에 []를 넣으면 된다.
ex) useEffect(() => {
    console.log("렌더링 완료");
}, [])

3. 값이 바뀔 때, 즉 업데이트때만 실행되게 하고 싶다면 두번째 인자에 관리할 요소를 정의해주면 된다.
ex) useEffect(() => {
    console.log(name+"스테이트가 업데이트 되었습니다");
}, [name, nickname])

### useMemo
1. 렌더링 성능 최적화. 특정 이벤트가 일어날때만 렌더링되게 만든다. 

2. 주로 숫자, 문자열, 객체 처럼 일반 값을 재사용할때 사용한다.
ex) INPUT에 입력이 될때는 렌더링에 포함되지 않고 버튼을 눌렀을때만 계산결과가 렌더링에 포함 되게끔 하는 예제가 있을 때

const avg = useMemo(() => 배열계산함수(list), [list]);
return (
    <div>
        <input value={number} onChange={onChange} />
        <button onClick={onInsert}>등록</button>
        평균 값: {avg}
    </div>
)

useMemo가 없다면 Input의 onChange가 일어날때마다 
평균값이 계산되어 렌더링되는데(낭비)
const avg에서 useMemo를 정의해줬기때문에 list배열에 변화가 생겨야
배열계산함수가 실행되서 낭비를 줄일 수 있다.

### useCallback
1. 렌더링 성능 최적화. useMemo와 비슷하지만 함수를 재사용할때 보통 사용한다.
ex)

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    e => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성

input에 입력이 될때마다 onChange가 일어나는데 useCallback과 두번째인자를 빈배열로 주면 처음 렌더링될때 한번만 펑션이 만들어진다.
onChange함수는 state를 불러낸다거나 하는 조회의 기능이 없기때문에 재정의될 필요가 없는 반면, onInsert의 경우 input에 입력되는 state인 number와 number들의 배열 list가 바뀔때마다 조회해서 계산해야하기 때문에 재정의가 될 필요가 있다.
그러므로 두번째 인자에 state를 정의해주면 해당 state가 바뀔때마다 함수가 재정의된다. 

```