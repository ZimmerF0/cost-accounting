import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 3, 25),
    description: "Холодильник",
    price: 999,
  },
  {
    id: 'c2',
    date: new Date(2023, 1, 12),
    description: "Macbook",
    price: 2500,
  },
  {
    id: 'c3',
    date: new Date(2022, 2, 5),
    description: "Джинсы",
    price: 49,
  },
];

function App() {

const [costs, setCosts] = useState(INITIAL_COSTS)

  

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
