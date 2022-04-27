import React from 'react';

import './home.css';

// https://www.w3schools.com/bootstrap5/trybs_template1.htm

function Home() {
  return (
    <div>
      {/* header */}
      <div class="bg-primary text-white text-center p-5">
        <h1>My Bootstrap5 Page</h1>
        <p>반응형 웹 지원됨</p>
      </div>
      {/* navigation */}
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Active
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* main */}
      <div class="container mt-5">
        <div class="row">
          {/* sidebar */}
          <div class="col-sm-4">
            <h2>About me</h2>
            <h5>Photo of me:</h5>
            {/* className 대신 class 사용해도 됨 */}
            <div className="fakeimg">Fake Image</div>
            <p>Some text...</p>
            <h3 class="mt-4">Some Links</h3>
            <p>Some text...</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <hr class="d-sm-none"></hr>
          </div>
          {/* main content */}
          <div class="col-sm-8">
            <h2>Title Heading</h2>
            <h5>Title description, 2022.4.27</h5>
            <div className="fakeimg">fake Image</div>
            <p>some text...</p>

            <h2 class="mt-5">Title</h2>
            <h5>Title description, 2022.4.27</h5>
            <div className="fakeimg">Fake Image</div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div class="mt-5 p-4 bg-dark text-white text-center">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default Home;
