import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
    };
    return () => {
      componentMounted = false;
    };

    getProducts();
  }, []);

  const Loading = () => {
    return <div>Loading ........</div>;
  };

  const ShowProducts = (product) => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All </button>
          <button className="btn btn-outline-dark me-2">Men's Clothing </button>
          <button className="btn btn-outline-dark me-2">
            Women's Clothing{" "}
          </button>
          <button className="btn btn-outline-dark me-2">Jewelery </button>
          <button className="btn btn-outline-dark me-2">Electronics </button>
          <button className="btn btn-outline-dark me-2">Jeans</button>
          <button className="btn btn-outline-dark me-2">Shirt</button>
        </div>
        {filter.map(() => {
          return (
            <>
              <div classNamecol-md-3>
                <div class="card">
                  <img
                    src="{product.image}"
                    class="card-img-top"
                    alt="{product.title}"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">${product.price}</p>
                    <button class="btn btn-primary">Go somewhere</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
