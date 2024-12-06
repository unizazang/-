
import { useState } from 'react';
import './App.css';

function App() {


      {/* 
      
      JSX 문법 
      1. class > className
      2. 변수는 중괄호에 넣으면 됨

          id 자리에/className자리에 이런데도 다 들어감.
          데이터를 꽂아넣고 싶을 때 중괄호에 넣으면 된다
          > "데이터 바인딩"이라고 함.

      3. style={ {속성 : '값'} }
            JSX에서 style을 태그 안에 넣을 수 있는데 "" < 하면 안되고
            스타일도 전부 중괄호 안에 넣어야 한다.
            근데 그냥 { } 만으로도 안되고 오브젝트 자료로 넣어줘야함! 
            style="color : red" (X)
            style={color : red} (X) <<< 값에는 늘 '' 붙여야!!!!
            style={ {color : 'red'} } (O)
            style={ {color : 'red' , fontSize: '16px'} } (O)

      자바스크립트에서 카멜표기법 하듯이 여기서도 그래야 함!
      font-size (X)
      fontSize (O)

      */}

      

  let post = '역삼역 우동 맛집'; 
  //자료를 잠깐 저장하는 건 변수, 근데 리액트에선 자료를 잠깐 저장할 때 state라는 걸 써도 된다.
//useState('남자 코트 추천');
//useState 라고 하면 스테이트를 만들 수 있다
//내가 넣고 싶은 자료를 소괄호 안에 저장해 두는 것

let [글제목, b] = useState('여자 코트 추천'); // 이 state를 갖다 쓰고싶으면 왼쪽에다가 자료를 뽑는 문법을 짜면 됨.
// a = state에 보관했던 자료
// b = state를 변경할 수 있게 해주는 함수
// 각각 a랑 b로 빼서 쓰겠습니다~~     저 useState 안에는 [ ?? , ???] 이렇게 들어있음 그거를 각각 빼왔을 뿐임
//destructuring 이라는 문법입니다 array 안에 있는 자료들을 각각 변수로 빼주는 문법이다
//let num = [1,2,3];
//let [a, c] = [1, 2];
      //let a = num[0]; 
      //let c = num[1];

      //왜 state를 쓰느냐? 일반 변수는 갑자기 내용이 변경되면 HTML에 자동으로 반영안됨. (post가 바뀌었으니까 html에서도 변경을 해 줘라 라고 코드를 짜야함)
      // 근데 state는 갑자기 변경되면 state를 쓰던 html이 알아서 자동으로 재 랜더링이 된다.
      // state가 변경이 된다 > 그럼 이 state를 쓰는 html 전체가 재랜더링> 반영이 된다.
      // 온갖 거 다 state로 만들지 말고 변경될때마다 html에 반영되어야 하는 것만 state로 만들어라.


      // 빡대가리식 정리 ----------
      // 자주 변경될 거 같은 html 부분들은 state로 만들어 놓는다.

  let [글제목2, c] = useState('강남 우동 맛집');
  let [글제목3, d] = useState('남성 헤어샵 추천');

  // array라는 자료구조를 알고 있다면, state를 array로 만들어서 사용해도 아무 문제 없다.
  // 이런식으로 ---> let [글제목, b] = useState(['여자 코트 추천, 남자 코트 추천'])

  return (
    // 주의할 점 : HTML은 리턴 소괄호 안에 다 짜야하는데 리턴 소괄호 안에는 무조건 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.
    // 단 하나의 태그로 묶여야 한다

    <div className="App">
      <div >
        <h4 className="black-nav" >ReactBlog</h4>
      </div>
      <h4 style={{color:'red'}}>{post}</h4>
       
    <div className='list'>
      <h4>{ 글제목 }</h4>
      <p>12월 6일 발행</p>
    </div>
    <div className='list'>
      <h4>{ 글제목2 }</h4>
      <p>12월 6일 발행</p>
    </div>
    <div className='list'>
      <h4>{ 글제목3 }</h4>
      <p>12월 6일 발행</p>
    </div>
    </div>
  );
}

export default App;
