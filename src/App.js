import React from 'react';
import ContactList from "./components/ContactList"

function App() {
  const users = [{
    id: 1,
    name: "Emanuela",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  },
  {
    id: 2,
    name: "Alice",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  },
  {
    id: 3,
    name: "Marta",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  },
  {
    id: 4,
    name: "Yaser",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  },
  {
    id: 5,
    name: "Danya",
    online: false,
    avatar: "https://i.pinimg.com/originals/5c/06/68/5c0668716bad0772cd6e64e300477300.jpg"
  }
  ];

  return (
    <div className="App">
      <ContactList users={users} />
    </div>
  );
}

export default App;
