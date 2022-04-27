import React from 'react';

function Main() {
  return (
    <div>
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
    </div>
  );
}

export default Main;
