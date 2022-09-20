import React from "react";
import Products from "./Products";
import { useContext } from "react";
import { data } from "../Api/Apiall";

const Home = () => {
  const [home] = useContext(data);
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="/images/bg1.jpg"
          class="card-img"
          alt="Background"
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </h5>
            <p class="card-text lead fs-2">CHECK OUT THE TRENDS</p>
          </div>
        </div>
      </div>

      {/*<Products/>*/}

      {home.map((item) => {
        return (
          <div className="container">
            <a href={item.url}>
              <div className="row">
                <div className="row Item-inside  bg-success p-2 text-dark bg-opacity-10  d-flex justify-content-around mx-2 my-2 figure-img img-fluid rounded">
                  {/* image */}
                  <div className="col-12 col-md-12 col-lg-4 img-div my-4">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="img-fluid"
                    ></img>
                  </div>

                  {/* description */}
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title pt-4 pb-3">
                      <h3>{item.category}</h3>
                      <h1>{item.name}</h1>
                    </div>
                    <div className="menu-price-book">
                      <div className="price-book-divide d-flex justify-content-around">
                        {item.SellerName}
                      </div>
                      <p>{item.description}</p>

                      <button className="btn btn-primary">{item.Price}</button>

                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
