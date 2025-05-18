import React from "react";
import ShowCase from "../showcase/ShowCase";
import NewArrivals from "../newArrivals/NewArrivals";
import TopSelling from "../topSelling/TopSelling";
import DressStyleGrid from "../browse/Browse";
import Customers from "../customers/Customers";

const Mains = () => {
  return (
    <div>
      <ShowCase />
      <NewArrivals />
      <TopSelling />
      <DressStyleGrid />
      <Customers />
    </div>
  );
};

export default Mains;
