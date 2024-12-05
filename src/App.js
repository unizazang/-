
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div >
        <h4 className="black-nav" >블로그임</h4>
      </div>
      <h4 style={{color:'red'}}>{post}</h4>
      
    <div className='list'>
      <h4>글제목</h4>
      <p>12월 6일 발행</p>
    </div>


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
    </div>
  );
}

export default App;
