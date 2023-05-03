import React from "react";
import "./CostList.css";
import CostItem from "./CostItem";

const CostList = props => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">В этом году расходов небыло</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map(cost => (
        <CostItem key={cost.id} {...cost} />
      ))}
    </ul>
  );
};

export default CostList;
