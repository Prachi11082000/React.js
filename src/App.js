import React from "react";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import AddUser from "./components/AddUser";
import UserData from "./components/UserData";
import Lifecycle from "./components/Lifecycle";
import ApiTest from "./components/ApiTest";
import AddData from "./components/AddData";
function App() {
  return (
    
    <div className="App">
     
        <Counter/>
        <Navbar/>
        <Show/>
        <div className="container">
        <AddUser/>
        </div>
        <UserData/>
        <Lifecycle/>
        <ApiTest/>
        <AddData/>
    </div>
  );
}

export default App;
