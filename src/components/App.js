import React from 'react';
import { observer } from 'mobx-react';
import { changeUserName, fetchPlans, addPlan } from '../store';

// Every component that renders observables has to be wrapped in an observer...
const User = observer(({ profile }) => {
  const handleRenameClick = () => {
    changeUserName('Lion');
  };

  return (
    <React.Fragment>
      <h3>User</h3>
      <dl>
        <dt>First name:</dt>
        <dd>{profile.firstName}</dd>
        <dt>Last name:</dt>
        <dd>{profile.lastName}</dd>
      </dl>
      <button onClick={handleRenameClick}>Rename</button>
    </React.Fragment>
  );
});

const Plans = observer(({ list }) => {
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
      <button onClick={fetchPlans}>Get Plans</button>
      <button onClick={addPlan}>Add Plan</button>
    </React.Fragment>
  );
});

const App = observer(
  class App extends React.Component {
    render() {
      return (
        <div>
          <User profile={this.props.store.user} />
          <Plans list={this.props.store.plans} />
        </div>
      );
    }
  }
);

export default App;
