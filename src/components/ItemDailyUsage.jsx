import React, { useState } from "react";
import Slider from "react-slick";
import { categories } from "./categories";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  removeCart,
  returnItemCount,
} from "../features/mycart/MyCartSlice";

const ItemDailyUsage = () => {
  // const [buttonClicked, setButtonClicked] = useState(false);
  // const [count, setCount] = useState(0);
  // const [itemId, setItemId] = useState(null);
  const dispatch = useDispatch();
  const dataValue = useSelector((state) => state.carts);

  function handleAdd(data) {
    dispatch(addCart(data));
    // setItemId(data.item);
  }

  function handlePlus(data) {
    dispatch(addCart(data));
  }
  function handleRemove(data) {
    dispatch(removeCart(data));
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1570,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1065,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 795,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isInCart = (dataItem) => {
    const existingItem = dataValue.find(
      (cart) => cart.item === dataItem.item && cart.type === dataItem.type
    );

    if (existingItem) {
      console.log(existingItem.selectedItem);
      return existingItem.selectedItem;
    }
    return 0;
  };

  return (
    <>
      <h2 style={{ textAlign: "left", marginLeft: "10%" }}> Daily Usage </h2>
      <div style={{ marginLeft: "10%" }}>
        <Slider {...settings}>
          {categories.map((data, index) => (
            <div key={data.item}>
              <div
                className="card border-1"
                style={{ width: "15rem", height: "auto" }}
                key={data.item}
              >
                <div className="card-body">
                  <img src={data.img} alt="" style={{ marginLeft: "50px" }} />
                  <p className="d-flex justify-content-left">
                    <i className="fa-regular fa-clock fa-sm"> </i>
                    {data.deliveryTime}
                  </p>
                  <p className="d-flex">{data.type}</p>
                  <span className="d-flex">{data.quantity}</span>
                  <div
                    className="mt-3 d-flex justify-content-between"
                    style={{ width: "100%" }}
                  >
                    <p className="m-0"> &#8377;{data.sellingPrice}</p>

                    {isInCart(data) ? (
                      <div className="d-flex justify-content-evenly">
                        <button onClick={() => handleRemove(data)}>-</button>
                        {isInCart(data)}
                        <button onClick={() => handlePlus(data)}>+</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => handleAdd(data)}>Add</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ItemDailyUsage;
