import {
  action,
  autorun,
  computed,
  configure,
  decorate,
  observable,
  toJS,
} from 'mobx';

import api from './lib/api';

// Forces store updates to happen within action() functions
configure({ enforceActions: 'strict' });

// Create our data store
const store = {
  user: {
    firstName: 'User',
    lastName: 'Uknown',
  },
  plans: [],
  ui: {
    theme: 'one',
  },
  get fullName() {
    return `${store.user.firstName} ${store.user.lastName}`;
  },
};

// Make specific properties observable
decorate(store, {
  user: observable,
  plans: observable,
  fullName: computed,
});

// Debugging, display updates
autorun(() => {
  console.log('user first name', store.user.firstName);
  console.log('full name:', store.fullName);
  console.log('ui theme:', store.ui.theme);
  // console.log(toJS(store.plans)); // <- can't do this in strict mode, so how do we get this out as a simple Array?
});

// Fetch plans action
export const fetchPlans = () => {
  api
    .fetchPlans()
    .then(action(results => (store.plans = results)))
    .catch(console.log);
};

// Fetch user action
export const fetchUser = () => {
  api
    .fetchUser()
    .then(action(results => (store.user = results)))
    .catch(console.log);
};

// Add plan
export const addPlan = action(() => {
  store.plans.push({
    id: store.plans.length + 1,
    price: 4,
    name: 'Dynamic',
  });
});

// Change user name
export const changeUserName = action(name => {
  store.user.firstName = name;
});

// Fetch intial data
setTimeout(fetchUser, 100);

export default store;
