import axios from 'axios';

function fetchContent(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => resolve(response.data))
      .catch(reject);
  });
}

function fetchPlans() {
  return fetchContent('http://www.mocky.io/v2/5b15a67b3200007d00b8a459');
}

function fetchUser() {
  return fetchContent('http://www.mocky.io/v2/5b15baa93200000f00b8a499');
}

export default {
  fetchPlans,
  fetchUser,
};
