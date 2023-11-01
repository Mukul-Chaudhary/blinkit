import React from "react";
import { categories } from "./categories";
import ItemCategories from "./ItemCategories";

function ItemMappingCategories() {
  return (
    <>
      <div className="w-100 d-flex  justify-content-center align-items-center gap-3 flex-wrap">
        {categories.map((data) => (
          <div key={data.item} className="itemsCard">
            <ItemCategories type={data.type} categoryImg={data.img} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ItemMappingCategories;
