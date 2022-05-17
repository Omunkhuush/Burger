import React from "react";
import BuildControl from "../BuildControl";
const BuildControls = (props) => (
  <div>
    <BuildControl type="salad" orts="Салад" />
    <BuildControl type="bacon" orts="Гахайн мах" />
    <BuildControl type="cheese" orts="Бяслаг" />
    <BuildControl type="meat" orts="Үхрийн мах" />
  </div>
);

export default BuildControls;
