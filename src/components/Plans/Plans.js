import React from 'react';

const Plans = ({ list, loadPlans, addPlan }) => {
  return (
    <React.Fragment>
      <h3>Plans</h3>
      <ul>
        {list.map(i => {
          return (
            <li key={i.id}>
              <strong>{i.name}</strong>, price: ${i.price}
            </li>
          );
        })}
      </ul>
      <button onClick={loadPlans}>Get Plans</button>
      <button onClick={addPlan}>Add Plan</button>
    </React.Fragment>
  );
};

export default Plans;
