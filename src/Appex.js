// 워닝메세지 없애고 싶으면 이렇게 써주면 됨
/* eslint-disable */

import { useState } from "react";
import "./App.css";
function Appex() {

    let [글제목, 글제목변경] = useState(['여자 코트 추천', '딱대 코트 추천', '강남 우동 맛집']);
    let [modal, setModal] = useState(false);
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState('');
    // let [삭제값, 삭제값변경] = useState(0);

// '2021년 1월 30일', '2024년 12월 6일', '2023년 2월 13일'
    return (
      <div className="App">
        <div>
            <h4 className="black-nav">ReactBlog</h4>
        </div>
        <button onClick={()=>{
            // 정렬도 복사본 만들어서 해야함
            let cpy = [...글제목];
            cpy.sort();
            글제목변경(cpy);
        }}>가나다순 정렬</button>

{/* map이든 뭐든 자바스크립트 쓰려면 중괄호 열어야함!!!!!! */}
        {
        글제목.map((a, i)=> {
            
            return(
            <div className="list">
                <h4 onClick={()=>{
                    // 클릭했을 때 true 로 바꿔줘야함
                    setModal(true);
                    setTitle(i);
                    modal == true ? setModal(false) : null;
                }}> {a}    <span onClick={(e)=>{
                    e.stopPropagation()
                    let cpy = [...따봉];
                    cpy[i] = cpy[i] + 1;// 따봉이 아니라 cpy를 바꿔야했다!!
                    따봉변경(cpy);
                }}> 👍 </span>
                {/* 더 작은걸 클릭해도 상위껄로 이벤트가 퍼지는 현상 : 이벤트버블링
                그걸 막으려면 e.stopPropagation() : 이벤트버블링을 막아주세요. */}
                {" "}
                {따봉[i]}</h4>
                <p>2021년 1월 30일</p>
                <button onClick={()=>{
                    let copy = [...글제목];

                    copy.splice(i,i+1);
                    // copy.pop(삭제값);
                    // 몇번째인덱스만 삭제되어 버리네... 뭘로해야하지?
                    // 오 pop말고 splice로 하니까 됨!!!
                    글제목변경(copy);
                }}>삭제하기</button>
            </div> 
            )
        })
    }

    <input onChange={(e)=>{ //이벤트객체 e
        입력값변경(e.target.value);
        // console.log(입력값) e.target.value 이 안의 값
        // cf. 왜 한박자 늦게되나? > state변경은 비동기로 처리하기 때문에 냅두고 다음줄 먼저 실행함!!
        // 그래서 다음줄을 먼저 실행함.

       
        // onChange랑 같은거 onInput
    }}
    />
     <button onClick={()=>{
            let cpy = [...글제목];
            cpy.push(입력값);
            글제목변경(cpy);
        }}>글쓰기</button>
   


    {/* HTML에서는 input이 하나짜리태그지만 react에서는 아니다. 태그를 하나 열었으면 무조건 닫아야 함.
    

    */}
    { modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null //여기에 세미콜론 쓰면 안됨.
    // <Modal  /> 이게아니고 모달이 나와야 하니까 false 일때 들어가야함!!!!
    }
      </div>

      
    
    );
  }



  function Modal(props){
    let copy = [...props.글제목];
    copy[0] = '딱대 코트 완성';
    copy[1] = '딱대 코트 완성';
    copy[2] = '딱대 코트 완성';


    return(
        <div className="modal">
            <h4>{props.글제목[props.title]}</h4>      
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
                props.글제목변경(copy);
            }}>글수정</button>
        </div>
    )
  }

export default Appex;

