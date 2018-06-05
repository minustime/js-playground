import React from 'react';

const User = ({ profile, renameUser }) => {
  return (
    <React.Fragment>
      <h3>User</h3>
      <dl>
        <dt>First name:</dt>
        <dd>{profile.firstName}</dd>
        <dt>Last name:</dt>
        <dd>{profile.lastName}</dd>
      </dl>
      <button onClick={renameUser}>Rename</button>
    </React.Fragment>
  );
};

export default User;
