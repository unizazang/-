// 워닝메세지 없애고 싶으면 이렇게 써주면 됨
/* eslint-disable */

import { useState } from "react";
import "./App.css";
function Appex() {

    let [글제목, 글제목변경] = useState(['여자 코트 추천', '딱대 코트 추천', '강남 우동 맛집']);
    let [modal, setModal] = useState(false);
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [title, setTitle] = useState(0);

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
                }}> {a}    <span onClick={()=>{
                    let cpy = [...따봉];
                    cpy[i] = cpy[i] + 1;// 따봉이 아니라 cpy를 바꿔야했다!!
                    따봉변경(cpy);
                }}> 👍 </span>
                {" "}
                {따봉[i]}</h4>
                <p>2021년 1월 30일</p>
            </div> 
            )
        })
    }

    { modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null //여기에 세미콜론 쓰면 안됨.
    // <Modal  /> 이게아니고 모달이 나와야 하니까 false 일때 들어가야함!!!!
    }
      </div>

      
    
    );
  }



  function Modal(props){
    let copy = [...props.글제목];
    copy[0] = '딱대 코트 완성';
    // 얘는 왜 반영이 안되지?

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
