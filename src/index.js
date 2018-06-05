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
  console.log(toJS(store.plans)); // <- can't do this in strict mode, so how do we get this out as a simple Array?
});

// Fetch plans action
const fetchPlans = () => {
  api
    .fetchPlans()
    .then(action(results => (store.plans = results)))
    .catch(console.log);
};

// Fetch user action
const fetchUser = () => {
  api
    .fetchUser()
    .then(action(results => (store.user = results)))
    .catch(console.log);
};

// Fetch data
setTimeout(fetchUser, 100);
setTimeout(fetchPlans, 200);
setTimeout(() => {
  console.log('full name is now', store.fullName);
}, 300);
