import "./styles.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);

  const loadUsers = async () => {
    setloading(true);

    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    setloading(false);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <img src="atom.png" alt="react" />
          <h2 className="logo">Let's Grow More</h2>
          <button className="button" onClick={loadUsers}>
            Get Users
          </button>
        </div>
      </header>
      
      <div class="parent">
     <center>
      <img src="https://media.giphy.com/media/3ohze44ikqc6S65XgY/giphy.gif" alt="loading" id="loading"/>
      </center>
      <div class="contains">
   {users.map(({ id, email, first_name, last_name, avatar }) => (
        <div className="container">
          <div className="card">
            <img src={avatar} alt="{avatar}" className="img" />
            <h1 className="name">
              {" "}
              {first_name} {last_name}
            </h1>
          
              <p className="email">email:{email}</p>
              <div className="id-tag">
                <p className="id">id:{id}</p>
              </div>
            
          </div>
        </div>
       
      ))}
 </div>
 </div>
      <footer>
        <div class="foot">
          <center>
            Copyright © 2022 & Trademark by Prathmesh Kale, Inc. All rights
            reserved.
          </center>
        </div>
      </footer>
    </>
  );
}

export default App;
