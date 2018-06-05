import { action, computed, configure, decorate, observable } from 'mobx';

import api from './lib/api';

// Forces store updates to happen within action() functions
// configure({ enforceActions: true });

class Store {
  constructor() {
    this.fetchUser();
  }

  user = {
    firstName: 'Unknown FirstName',
    lastName: 'Unknown LastName',
  };

  plans = [];

  ui = {
    theme: 'one',
  };

  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  changeUserName(name) {
    this.user.firstName = name;
  }

  fetchUser() {
    api
      .fetchUser()
      .then(action(results => (this.user = results)))
      .catch(console.log);
  }

  loadPlans() {
    api
      .fetchPlans()
      .then(action(results => (this.plans = results)))
      .catch(console.log);
  }

  addPlan() {
    this.plans.push({
      id: this.plans.length + 1,
      price: 4,
      name: 'Dynamic',
    });
  }
}

// Make specific properties observable
decorate(Store, {
  user: observable,
  plans: observable,
  fullName: computed,
});

export default Store;
