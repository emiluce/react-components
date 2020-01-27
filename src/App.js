import React from 'react';
import Contact from "./components/Contact"

function App() {
  const users = [{
    id: 1,
    name: "Riccardo",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  },
  {
    id: 2,
    name: "Riccarda",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  },
  {
    id: 3,
    name: "Riccardi",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  }
  ];

  return (
    <div className="App">
      {users.map(user => (
        <Contact
          name={user.name} online={user.online} avatar={user.avatar} />
      ))}
    </div>
  );
}

export default App;
