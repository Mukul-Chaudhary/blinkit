import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RBNavbar from "./components/RBNavbar";
import ItemMappingCategories from "./components/ItemMappingCategories";
import ItemDailyUsage from "./components/ItemDailyUsage";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          overflow: "hidden",
        }}
      >
        <RBNavbar />
        <ItemMappingCategories />
        <ItemDailyUsage />
        {/* <RishabhFile /> */}
      </div>
    </>
  );
}

export default App;
