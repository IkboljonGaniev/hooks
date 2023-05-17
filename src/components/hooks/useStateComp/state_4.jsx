import React, { useState } from 'react';

const ExampleComponent_4 = () => {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={handleChange} />
      <input type="number" name="age" value={user.age} onChange={handleChange} />
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ExampleComponent_4;
