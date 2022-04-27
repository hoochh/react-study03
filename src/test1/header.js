import React from 'react';

function Header() {
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
    </div>
  );
}

export default Header;
