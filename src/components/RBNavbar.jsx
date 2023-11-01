import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

function RBNavbar() {
  const dataValue = useSelector((state) => state.carts);

  console.log(dataValue);
  const [cartPrice, setCartPrice] = useState({});
  const getTotalCartValue = () => {
    let count = 0;
    let price = 0;
    for (let i = 0; i < dataValue.length; i++) {
      count += dataValue[i].selectedItem;
      price += dataValue[i].selectedItem * dataValue[i].sellingPrice;
    }
    console.log("count and price", count, price);
    setCartPrice({ count, price });
  };
  useEffect(() => {
    getTotalCartValue();
  }, [dataValue]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        src="https://blinkit.com/9f644712ea8611916099.png"
        className="navbar-brand mx-3"
        alt=""
      />
      <a className="navbar-brand location" href="/">
        Delievery in 8 minutes
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 "
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <a className="nav-link login" href="/">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link cart" href="/">
              <button>
                <i className="fa-solid fa-cart-shopping "></i> my cart{" "}
                {cartPrice.count > 0 ? cartPrice.count : ""}
                {cartPrice.price ? <p>{cartPrice.price}</p> : null}
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default RBNavbar;
