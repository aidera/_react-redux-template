import React from "react";
import s from "./Item.module.sass";

type OwnPropsType = {
  itemId: string;
};

const Item: React.FC<OwnPropsType> = React.memo(({ itemId }) => {
  return (
    <div className={s.item}>
      <h1>Item - {itemId}</h1>
    </div>
  );
});

export default Item;
