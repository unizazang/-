
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  return (
    <div className="App">
      <div >
        <h4 className="black-nav" >블로그임</h4>
      </div>
      <h4>{post}</h4>
      
      {/* 변수는 중괄호에 넣으면 됨
      id 자리에/className자리에 이런데도 다 들어감.
      */}
    </div>
  );
}

export default App;
