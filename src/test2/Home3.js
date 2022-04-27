import React from 'react';
import './Home3.css';

function Home3() {
  return (
    <div>
      {/* navigation */}
      <nav class="navbar navbar-expand-sm shadow-sm bg-white rounded fixed-top">
        <div class="container-fluid">
          <a class="nav-link text-black" href="#">
            Gourmet au Catering
          </a>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-black" href="#About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#Menu">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-black" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="container">
        {/* header */}
        <div class="container">
          <img src="https://www.w3schools.com/w3images/hamburger.jpg" class="img-fluid" />
          <div class="bottom-left">
            <h1>Le Catering</h1>
          </div>
        </div>
        <div class="p-3"></div>
        {/* main */}
        {/* about */}
        <div class="row mx-auto" id="About">
          <img
            class="col-sm-5 offset-sm-1 p-3"
            src="https://www.w3schools.com/w3images/tablesetting2.jpg"
          />
          <div class="col-sm-5 p-3">
            <h1 class="p-3">About Catering</h1>
            <h5 class="p-3">Tradition since 1889</h5>
            <p class="text-sm-start fw-bold">
              The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet,
              consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.We only use seasonal ingredients.
            </p>
            <p class="text-sm-start">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
              temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr class="row mx-auto col-sm-10 offset-sm-2" />
        {/* menu */}
        <div class="row mx-auto" id="Menu">
          <div class="col-sm-5 offset-sm-1 p-3 lh-lg">
            <h1 class="p-3">Our Menu</h1>
            <div class="row text-sm-start p-3">
              <h5>Bread Basket</h5>
              <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
            </div>
            <div class="row text-sm-start p-3">
              <h5>Honey Almond Granola with Fruits</h5>
              <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
            </div>
            <div class="row text-sm-start p-3">
              <h5>Belgian Waffle</h5>
              <p>Vanilla flavored batter with malted flour 7.50</p>
            </div>
            <div class="row text-sm-start p-3">
              <h5>Scrambled eggs</h5>
              <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
            </div>
            <div class="row text-sm-start p-3">
              <h5>Blueberry Pancakes</h5>
              <p>With syrup, butter and lots of berries 8.50</p>
            </div>
          </div>
          <img class="col-sm-5 p-3" src="https://www.w3schools.com/w3images/tablesetting.jpg" />
        </div>
        <hr class="row mx-auto col-sm-10 offset-sm-2" />
        {/* contact */}
        <div class="row mx-auto col-sm-10 offset-sm-2" id="Contact">
          <div class="row text-sm-start">
            <h1>Contact</h1>
            <p>
              We offer full-service catering for any event, large or small. We understand your needs
              and we will cater the food to satisfy the biggerst criteria of them all, both look and
              taste. Do not hesitate to contact us.
            </p>
            <div>Catering Service, 42nd Living St, 43043 New York, NY</div>
            <p>
              You can also contact us by phone 00553123-2323 or email catering@catering.com, or you
              can send us a message here:
            </p>
            <form>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input class="form-control" type="text" placeholder="How many people" />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="datetime-local"
                  placeholder="Date and time"
                  required
                  name="date"
                  value="2020-11-16T20:00"
                />
              </div>
              <div class="mb-3">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Message\Special requirements"
                />
              </div>
              <button type="button" class="btn btn-light">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </main>
      {/* footer */}
      <footer class="mt-5 p-4 bg-light text-dark text-center">
        <p>
          Powered by
          <a class="text-black" href="#">
            &nbsp;w3.css
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home3;
