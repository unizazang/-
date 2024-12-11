// 워닝메세지 없애고 싶으면 이렇게 써주면 됨
/* eslint-disable */

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

let [글제목, 글제목변경] = useState(['여자 코트 추천','남자 코트 추천', '강남 추천 맛집']); 

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


let [따봉, 따봉변경] = useState(0);
// state, 메서드(안쓸거면 그냥 안 넣어놔도 됨)

function 함수(){
  console.log(1);
}

  return (
    // 주의할 점 : HTML은 리턴 소괄호 안에 다 짜야하는데 리턴 소괄호 안에는 무조건 하나의 태그로 시작해서 하나의 태그로 끝나야 한다.
    // 단 하나의 태그로 묶여야 한다

    <div className="App">
      <div >
        <h4 className="black-nav" >ReactBlog</h4>
      </div>

    <button onClick={()=>{
      let cpy = [...글제목].sort();
      글제목변경(cpy);
    }}>가나다순 정렬</button>

    
      <button onClick={ ()=>{ //클릭하면 할 일
        let copy = [...글제목]; //...(배열에 있는 내용물들을 빼서 나열) 그 다음에 새 배열로 만들어주세요. 라는 문법 => 즉, 완전히 새로운 주소에 다른 배열이 생김!
       /* 이렇게 스프레드 문법 활용해서 복사해야 한다. 그냥 = 으로는 안됨. 왜그런가?
======= state 함수의 작동원리 - 안에있는 걸 갈아치우는데 바꾸기 전에 한번 == 으로 비교를 한다.
         만약 기존state == 신규state 이면 변경안해줌!! 근데 let copy = 글제목. 이면 포인터가 같은 곳을 가리키고 있으니까
         같은 
         배열이나 오브젝트나 다 마찬가지.
        */ 
        copy[0] = '딱대 추천'
        글제목변경(copy); //array나 object 다룰 때는 원본을 수정하지 말고 냅두는 게 좋다.

      /*글제목[0]='딱대코트 추천'; 
        글제목변경(글제목); 이렇게 했을 때 안 되는 이유 : array를 수정했지 포인터가 가리키고 있는 곳은 똑같음;;
        => 같은 곳을 가리키고 있다 -> 주소가 같으니 == 했을 때 같음 => state를 바꿔 주지 않음 (배열은 수정됐지만 state가 변경 안함) 
        --- reference data type 이라고 함. 그냥 포인터 얘기인듯.
        */
        
        }}> 버튼임 </button>
        
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
   <div className='list'>
      <h4>{ 글제목[0] } <span onClick={ ()=>{따봉변경(따봉 + 1)} }> 🥰</span> {따봉} </h4>
      {/* 이벤트핸들러~ 클릭하면 <할 일>. 이니까 안에 함수 제대로 써줘야 함 */}
      <p>12월 6일 발행</p>
      
         
    </div>
    <div className='list'>
      <h4>{ 글제목[1] } <span> </span>  </h4>
      <p>12월 6일 발행</p>
    </div>
    <div className='list'>
      <h4>{ 글제목[2] } <span> </span>  </h4>
      <p>12월 6일 발행</p>
    </div>
   
   <Modal/>
   {/* 참고 - <Modal></Modal> 이렇게해도 되지만 <Modal/> 이렇게 해도 된다~! */}
   </div>
    </div>
  );
}

/*  <div className='modal'> 
    이렇게 짜면 html이 너무 더러워지니까 이 덩어리를 컴포넌트라는 걸로 축약해서 쓸수있게 했다. */

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
function Modal(){ //
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;




// ============================ state 랑 일반 변수 차이 테스트
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
