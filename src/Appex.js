// 워닝메세지 없애고 싶으면 이렇게 써주면 됨
/* eslint-disable */

import { useState } from "react";
import "./App.css";
function Appex() {

    let [글제목, 글제목변경] = useState(['여자 코트 추천', '딱대 코트 추천', '강남 우동 맛집']);
    

    return (
      <div className="App">
        <div>
            <h4 className="black-nav">ReactBlog</h4>
        </div>
        <button>가나다순 정렬</button>

{/* map이든 뭐든 자바스크립트 쓰려면 중괄호 열어야함!!!!!! */}
        {
        글제목.map((a, i)=> {
            return(
                <div className="list">
                <h4>{글제목[i]}    <span> {a} 👍 </span></h4>
                <p>12월 22일 발행</p>
            </div> 
            )
        })
    }
      </div>
    );
  }

  function Modal(){
    return(
        <div className="modal">
            <h4>제목</h4>      
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    )
  }

export default Appex;

