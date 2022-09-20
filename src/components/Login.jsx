import React from "react";

function Login() {
  return (
    <div>
      <form action="http://localhost:3000/login" method="get">
        <div className="container1">
          <h1> Login Form </h1>
          <hr />
          <br />
          <div className="form-group">
            <label for="exampleInput">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              name="fname"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInput">Email</label>
            <input
              type="text"
              className="form-control"
              id="exampleInput"
              name="email"
              placeholder="Enter your mail"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Contact</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              name="contact"
              placeholder="Enter your contact"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="paswd"
              placeholder="Password"
            />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="cpaswd"
              placeholder=" Confirm Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
