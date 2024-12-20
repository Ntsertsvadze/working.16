import React from 'react';

const UserItem = ({ id, name, action }) => {
  if (!id || !name || typeof action !== 'function') {
    console.error('Invalid props passed to UserItem:', { id, name, action });
  }

  return (
    <div className="user-item">
      <p>  {id} </p>
      <p> {name} </p>
      <button onClick={() => action(id)}>Remove</button>
    </div>
  );
};

export default React.memo(UserItem);
