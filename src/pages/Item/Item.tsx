import React from "react";

type PropsType = {
  itemId: string;
};

const Item: React.FC<PropsType> = React.memo((props: PropsType) => {
  const { itemId } = props;
  return (
    <div>
      <h1>Item - {itemId}</h1>
    </div>
  );
});

export default Item;
