import React from "react";
import BurgerIngrediant from "../BurgerIngrediant";
import css from "./style.module.css";
const Burger = (props) => {
  console.log(props.ingredients);
  const items = Object.entries(props.ingredients);
  console.log(items);
  let content = [];
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngrediant key={`${el[0]}${i}`} type={el[0]} />);
  });
  if (content.length === 0)
    content = <p>Харчиртай талхныхаа орцыг сонгоно уу ...</p>;
  return (
    <div className={css.Burger}>
      <BurgerIngrediant type="bread-top" />
      {content}
      <BurgerIngrediant type="bread-bottom" />
    </div>
  );
};
export default Burger;
