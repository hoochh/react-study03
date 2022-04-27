// 문제 1) Home.js, Home.css 파일을 활용하여 Home2.js, Home2.css 파일을 생성하고
// Home.js에 있는 소스의 내용을 header, main, footer 파일로 구분하여 각각의 파일로 분리 저장하고,
// Home2.js에서 통합해서 최종 출력하는 프로그램으로 작성하세요

import React from 'react';

import Header from './header';
import Main from './main';
import Footer from './footer';
import './Home2.css';

function Home2() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home2;
