import React from "react";
import ShowCase from "../showcase/ShowCase";
import Footer from "../footer/Footer";
import NewArrivals from "../newArrivals/NewArrivals";
import TopSelling from "../topSelling/TopSelling";
import DressStyleGrid from "../browse/Browse";

const Mains = () => {
  return (
    <div>
      <ShowCase />
      <NewArrivals />
      <TopSelling />
      <DressStyleGrid />
      <Footer />
    </div>
  );
};

export default Mains;
