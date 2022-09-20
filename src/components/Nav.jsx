import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Favourite from "./Favourite";
import Order from "./Order";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";
// import './App.css';

class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand fw-bold fs-4">Quick SHOW</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link">
                    <Link to="/home">Home</Link>
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      products
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <Link to="/favourite">Favourite</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <Link to="/order">Order</Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">
                    <Link to="/contact">Contact</Link>
                  </a>
                </li>
              </ul>
              <div className="buttons">
                <Link to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-signin me-1"></i>Login
                </Link>

                <Link to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register
                </Link>

                <Link to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i>Cart(0)
                </Link>
              </div>
            </div>
          </nav>

          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/favourite" element={<Favourite />}></Route>
            <Route exact path="/order" element={<Order />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Nav;
