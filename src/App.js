import React, { useState } from "react";
import { Login } from "./Login.jsx";
import { Register } from "./Registration.jsx";
import { Inside } from "./Inside.jsx";
import { Back } from "./Back.jsx";
import { Loading } from "./Loading.jsx";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}


export default App;