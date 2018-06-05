import React from 'react';
import { observer } from 'mobx-react';

import Plans from './Plans';
import User from './User';

class App extends React.Component {
  renameUser = () => {
    this.props.store.changeUserName(`Random ${Date.now()}`);
  };

  handleGetPlansClick = () => {
    this.props.store.fetchPlans();
  };

  loadPlans = () => {
    this.props.store.loadPlans();
  };

  addPlan = () => {
    this.props.store.addPlan();
  };

  render() {
    return (
      <div>
        <User profile={this.props.store.user} renameUser={this.renameUser} />
        <Plans
          list={this.props.store.plans}
          loadPlans={this.loadPlans}
          addPlan={this.addPlan}
        />
      </div>
    );
  }
}

export default observer(App);
