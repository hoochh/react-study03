// import logo from './logo.svg';
import './App.css';
// 필요한 스타일 수만큼 임포트 해야 함
// import Button from 'react-bootstrap/Button';
// 여러 스타일 한 번에 임포트 가능
// import { Button, Table, CloseButton, Dropdown } from 'react-bootstrap';

// import BSTest1 from './BSTest1';
// import BSTest2 from './BSTest2';
import Home from './home';

// 리액트용 부트스트랩 사용하기
// 리액트용 부트스트랩 설치

// 기본 설치 방식
// > yarn add react-bootstrap bootstrap

// CDN을 통해서 설치
// index.html에 bootstrap 파일을 로딩(css, js)

// 주의사항
// bootstrap.min.css를 index.js에 import해서 사용해야 함
// CDN 방식으로 사용할 경우에는 index.js에 import를 생략
// import 'bootstrap/dist/css/bootstrap.min.css';

// 리액트용 부트스트랩 로드
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap';

// 리액트용 부트스트랩 태그 사용
// <Button></Button>

function App() {
  return (
    <div className="App">
      {/* <BSTest1 /> */}
      {/* <BSTest2 /> */}
      <Home />
    </div>
  );
}

export default App;
