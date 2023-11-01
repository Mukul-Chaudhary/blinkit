import React from "react";

function ItemCategories(props) {
  const { type, categoryImg } = props;
  return (
    <div className="card border-0" style={{ width: "10rem", height: "auto" }}>
      <div className="card-body">
        <img src={categoryImg} alt="" />
        <p>{type}</p>
      </div>
    </div>
  );
}

export default ItemCategories;
