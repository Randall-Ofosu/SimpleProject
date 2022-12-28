import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

const DUMMY_DATA = [{ id: "u1", name: "Nana", age: 12 }];
function App() {
  const [userDetails, setUserDetails] = useState(DUMMY_DATA);

  const saveAddUserHandler = (uName, uAge) => {
    setUserDetails((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onSaveAddUser={saveAddUserHandler} />
      <UsersList users={userDetails} />
    </div>
  );
}

export default App;
