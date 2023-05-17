import React, { createContext, useContext, useState } from 'react';

// Create a notification context
const NotificationContext = createContext(null);

const ExampleComponent = () => {
  // Consume the notification context
  const notification = useContext(NotificationContext);

  return (
    <div>
      <button onClick={notification.show}>Show Notification</button>
    </div>
  );
};

// A wrapper component that provides the notification context value
const ConComp_5 = () => {
  const [message, setMessage] = useState(null);

  const showNotification = () => {
    setMessage('This is a notification!');
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ show: showNotification }}>
      <ExampleComponent />
      {message && <p>{message}</p>}
    </NotificationContext.Provider>
  );
};

export default ConComp_5;
