// 워닝메세지 없애고 싶으면 이렇게 써주면 됨
/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  {
    /* 
      
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

      */
  }

  let post = "역삼역 우동 맛집";
  //자료를 잠깐 저장하는 건 변수, 근데 리액트에선 자료를 잠깐 저장할 때 state라는 걸 써도 된다.
  //useState('남자 코트 추천');
  //useState 라고 하면 스테이트를 만들 수 있다
  //내가 넣고 싶은 자료를 소괄호 안에 저장해 두는 것

  let [글제목, 글제목변경] = useState([
    "여자 코트 추천",
    "남자 코트 추천",
    "강남 추천 맛집",
  ]);

  //map 사용법 =====
  //[1,2,3].map(function(){})
  //map은 모든 array자료 뒤에 쓸 수 있다. map() 안에는 콜백 함수(괄호안에 함수가 있는 것)가 들어간다.
  //1. array 자료 갯수만큼 함수 안의 코드를 실행해줌.
  //2. 함수의 파라미터는 array 안에 있던 자료.
  //3. return에 뭐 넣으면 array로 담아줌.

  let [modal, setModal] = useState(false); //이 모달 창의 현재 상태를 저장해둠 -> 닫힘이면 닫힌 상태일거고 열림이면 열린 상태 이렇게!!
  // 0 1 이렇게 해도 되고 false true 해도 되고 형식은 자유~

  // state ==============================================================
  // 한곳에다가 여러 자료를 넣고 싶으면 이렇게 대괄호[]를 열어서 array 형식으로 넣으면 된다!!
  //이건 배열 형식이니까 이거의 [0]번, [1]번 이렇게 뽑아다 쓸 수가 있다.

  // 이 state를 갖다 쓰고싶으면 왼쪽에다가 자료를 뽑는 문법을 짜면 됨.
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

  // let [글제목2, c] = useState('강남 우동 맛집');
  // let [글제목3, d] = useState('남성 헤어샵 추천');
  // 이런식으로 ---> let [글제목, b] = useState(['여자 코트 추천, 남자 코트 추천'])

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // state, 메서드(안쓸거면 그냥 안 넣어놔도 됨)

  return (
    // 주의할 점 : HTML은 리턴 소괄호 안에 다 짜야하는데 리턴 소괄호 안에는 무조건 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.
    // 단 하나의 태그로 묶여야 한다

    <div className="App">
      <div>
        <h4 className="black-nav">ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let cpy = [...글제목].sort();
          글제목변경(cpy);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          //클릭하면 할 일
          let copy = [...글제목]; //...(배열에 있는 내용물들을 빼서 나열) 그 다음에 새 배열로 만들어주세요. 라는 문법 => 즉, 완전히 새로운 주소에 다른 배열이 생김!
          /* 이렇게 스프레드 문법 활용해서 복사해야 한다. 그냥 = 으로는 안됨. 왜그런가?
======= state 함수의 작동원리 - 안에있는 걸 갈아치우는데 바꾸기 전에 한번 == 으로 비교를 한다.
         만약 기존state == 신규state 이면 변경안해줌!! 근데 let copy = 글제목. 이면 포인터가 같은 곳을 가리키고 있으니까
         같은 
         배열이나 오브젝트나 다 마찬가지.
        */
          copy[0] = "딱대 추천";
          글제목변경(copy); //array나 object 다룰 때는 원본을 수정하지 말고 냅두는 게 좋다.

          /*글제목[0]='딱대코트 추천'; 
        글제목변경(글제목); 이렇게 했을 때 안 되는 이유 : array를 수정했지 포인터가 가리키고 있는 곳은 똑같음;;
        => 같은 곳을 가리키고 있다 -> 주소가 같으니 == 했을 때 같음 => state를 바꿔 주지 않음 (배열은 수정됐지만 state가 변경 안함) 
        --- reference data type 이라고 함. 그냥 포인터 얘기인듯.
        */
        }}
      >
        {" "}
        버튼임{" "}
      </button>

      {/* 여기에 여자 코트 추천 이렇게 쓰면 이걸로 기존 state를 다 갈아치워버리니까 안됨.. 
        글제목변경(['딱대 코트 추천','남자 코트 추천', '강남 추천 맛집'이렇게 하면 되겠지만 확장성이 없으니까
         
       

      <h4 style={{color:'red'}}>{post}</h4>
       
       {/* onClick={} 안에는 !!!!함수 이름을!!!! 넣어야 한다. 코드를 그냥 쓰는 게 아니라
       코드를 다 짜놓은 함수 이름 하나만 넣어라. 
       
       => 함수 정의를 바로 넣어놔도 상관 없음.
      예를 들면 onClick={ function(){   ~~~~  }} 이렇게해도 ok
              onClick={ ()=>{ ~~~ } } 이렇게해도 ok 
      */}

      {/* !!!!! 주의 !!!!!
      state는 등호로 변경이 안 됨! 
      state는 등호로 변경하면 안 바뀐다. (html에 반영안됨)
      두번째 요소인 메서드를 써야 제대로 재렌더링이 된다.

      따봉변경( 1 ) < 이 괄호안에 바꿀 값을 넣는 것
       */}

      <div>
        {/* <div className="list">
          <h4>
            {글제목[0]}{" "}
            <span
              onClick={() => {
                따봉변경(따봉 + 1);
              }}
            >
              {" "}
              🥰
            </span>{" "}
            {따봉}{" "}
          </h4>
          {/* 이벤트핸들러~ 클릭하면~ <할 일>. 이니까 안에 함수 제대로 써줘야 함!!!!!!! 
          안에 꼭 함수로 넣어야 한다는 점 잊지 말기. 자꾸 실수함!!! */}
        {/* <p>12월 6일 발행</p> */}
        {/*</div> */}
        {/* <div className="list">
          <h4
            onClick={() => {
              setModal(true);
              modal == true ? setModal(false) : "";
            }}
          >
            {글제목[1]} <span> </span>{" "}
          </h4>
          <p>12월 6일 발행</p>
        </div> */}
        {/* <div className="list">
          <h4
            onClick={() => {
              setModal(true);
              modal == true ? setModal(false) : null;
            }}
          >
            {글제목[2]} <span> </span>{" "}
          </h4>
          <p>12월 6일 발행</p>
        </div> */}
      </div>

      {/* {[1, 2, 3].map(() => {
        return <div>안녕</div>;
        // 이게 array자료형으로 담겨있어서 [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>] 이렇게 나옴
        // react에서는 배열에 html을 담아도 잘 보여줍니다. 해체해서 예쁘게 html들만 보여줌. 그래서 이렇게 구현이 가능한 것.
        // 여러줄일때는 return에 괄호쳐서 return ( 요 안에 쓰면 됨 )
      })} */}

      {
        //배열을 쓰면 되는거니까 여기서 state를 갖다 쓰면 그 state에 있는 갯수만큼 출력이 되는 것~!
        글제목.map((a, i) => {
          return (
            <div className="list">
              <h4
                onClick={() => {
                  setModal(true);
                  modal == true ? setModal(false) : "";
                }}
              >
                {a}
                <span
                  onClick={() => {
                    // 0번째 좋아요 버튼을 클릭시엔 따봉[0] + 1 을 해야하고
                    // 1번째 좋아요 버튼을 클릭시엔 따봉[1] + 1 을 해야하고
                    // 2번째 좋아요 버튼을 클릭시엔 따봉[2] + 1 을 해야함

                    let copy = [...따봉]; // 우선 카피본을 만들어주고
                    copy[i] = copy[i] + 1; //copy[i]번째 숫자에 copy[i] + 1을 대입
                    따봉변경(copy); // 따봉 state를 copy본으로 갈아치운다.
                  }}
                >
                  {" "}
                  🥰
                </span>{" "}
                {따봉[i]}{" "}
                {/* 여기서 내가 {따봉}을 써서 000이 다나온거였음!!!! 여기서도 따봉의 i번째 인덱스를 썼어야 했음. */}
              </h4>
              <p>12월 6일 발행</p>
            </div>
          );
        })
        //중괄호 쓰는거 빼먹으면 안됨!!!!
      }

      {/* map으로 각각 따봉이 반영되는거... 어떻게 하나 실험해봄. =========
      1. a.따봉 이렇게할까? > 안됨. NaN 뜸
      2. let [따봉, 따봉변경] = useState([0, 0, 0]); < 이렇게 state안에 [0,0,0]으로했더니 왜인지모르겠지만
      초기값 000 -> 누르면 0,0,011111111 <이렇게 됨... 뭐지?
      3. a.따봉변경(따봉 + 1); < 안됨. 오류
      4. 따봉변경(따봉[i] + 1); < NaN
      5. 따봉0 따봉1 따봉2 따봉변경0 따봉변경1 따봉변경2 이렇게 만들어서 변수자리에 ㅋㅋㅋ 따봉i 라고 써봤는데 오류뜸...
      6. 진짜 혹시나 해서 e 랑 e.target.따봉변경 이렇게 해봤는데 오류 ㅠㅠ
      7. 따봉변경[i](따봉 + 1); < 오류
      


*/}

      {/* JSX에서 자바스크립트를 문법을 쓰고 싶으면 그냥 중괄호를 열면 된다!!!!!!!!! 
    === JSX안에서는 if문/for문 이런걸 쓸수 없다. 대신 !!!삼항연산자!!! 씀. 
      => html 중간에 조건문을 써야 하면 삼항연산자를 쓰면 된다. */}
      {
        modal == true ? <Modal /> : null // true 이면 그냥 <Modal/> 이렇게 넣으면 된다. 아무것도 안할거면 null을 넣으면 됨. 아니면 ''
        // 이 안에서는 세미콜론 쓰면 안되는듯?
      }

      {/* 참고 - <Modal></Modal> 이렇게해도 되지만 <Modal/> 이렇게 해도 된다~! */}
    </div>
  );
}

/* 동적인 UI 만드는 3 STEP ============
  1. HTML/CSS로 미리 디자인을 완성해 둔다.
  2. UI의 현재 상태를 state로 저장해 둔다. (그냥 state 만들면 됨)
  3. state에 따라 UI가 어떻게 보일지 작성한다. (조건문)

  ==> 즉, 이벤트가 일어났을 때의 state만 조절해주면 되는 것!!

  이게 react에서 UI 만드는 패턴임.
  위에 state < 스위치역할
  아래에서 실제 조건문이 어떤 일을 할 건지 써 주는 것 (얘가 동작)

  -> javascript에서 html을 다루는 방식과 다르다. 
    javascript의 경우 아예 html을 건드렸는데 react에서는 state로 스위치만 껐다켰다 해주는 방식. 정신개조 필요
*/

/* ================== 컴포넌트 관련 =====================

<div className='modal'> 이렇게 짜면 html이 너무 더러워지니까 이 덩어리를 컴포넌트라는 걸로 축약해서 쓸수있게 했다. */
/* ===== 컴포넌트 만드는 법 ! 3step ======

1. function을 만든다. 만들 때는 함수 바깥에다가.
2. 함수 안에서 return (  
    이 안에 컴포넌트로 만들 
           HTML을 넣는다. )
           ====> 여기서 제일 중요한 점은 return ()으로 할 때는 반드시 하나의 태그만 들어가 있어야 한다.(div하나로 묶여야.)
           하나의 태그로 시작해서 하나의 태그로 끝나야 한다.
3. 함수명으로 만든 거를 HTML 태그처럼 해서 그자리에 쓰기.


// 참고 - return 안에 태그 두개를 병렬적으로 넣고 싶다... 그럼 바깥에 div를 하나 더 감싸면 되는데 의미없는 div니까
// div를 지우고 <> </> 이렇게만 감싸도 된다. 리액트 상에서는 제대로 된 문법임 (fragment 문법)
// 의미없는 <div> 대신 <> </> 을 사용할 수 있다~!
*/

/* 어떤걸 컴포넌트로 만들면 좋은가? =======
  1. 반복적인 html (예를 들면 리스트)을 축약할 때.
  2. 큰 페이지들
  3. 자주 변경되는(따봉같은거) html UI들 (성능상 좋을수도 있습니다. 항상그런건 아니고.)
*/

/* 컴포넌트의 단점 =====================
  state를 가져다 쓸 때 문제가 생긴다. (다른 함수에 있으니까!!)
*/

// 컴포넌트 만드는 다른 방식 :
// const Modal2 = () => {} 변수를 만들고 그안에 함수를 넣었으니까 이렇게 만들어도 됨.

function Modal() {
  //
  return (
    <div className="modal">
      <h4></h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

/* 컴포넌트 만드는 연습함 
   <Ddakdae/>
   <Manifasto />
function Ddakdae(){
  return (
    <div>
      <h1>짱</h1>
      <a href='https://www.naver.com' target='blank'>안녕하세요?</a>
   </div>
  )
}

const Manifasto = ()=>{ //그냥 이름없는함수를 만든 다음에 변수에 할당!!
  return(
    <div>
    <h1>바보</h1>
    <a href='https://www.naver.com' target='blank'>안녕?</a>
 </div>
  )
} 
  

*/
export default App;

// ============================ state 랑 일반 변수 차이 테스트 =============================
// import React from 'react';

// function App() {
//   let count = 0;

//   function increase() {
//     count++;
//     console.log(count); // 변수의 값은 변경되지만 화면의 h1은 바뀌지 않음.
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// export default App;

// =====

// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1); // 상태 변경하면 html에 그대로 반영됨.
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// export default App;
