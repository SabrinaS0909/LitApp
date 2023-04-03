import React, { useState } from "react";
import inside from './insideOfBook.png';
import back from './backOfBook.png';
import logo from './logo2.png';
import { Login } from "./Login.jsx";
import { Register } from "./Registration.jsx"

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

function Inside() {
  return (
    <div>
      <img src={inside} className="insideOfBook" alt="The Inside of Your Book" width="1334px" height="750px" />
  	
      <div className="flexContainer">
        <div className="flexItem lists">
          <div className="leftListBox">
            <ul>
              <li className="eachListItem one" id="itemOne">One</li>
              <li className="eachListItem two" id="itemTwo">Two</li>
              <li className="eachListItem three" id="itemThree">Three</li>
              <li className="eachListItem four" id="itemFour">Four</li>
              <li className="eachListItem five" id="itemFive">Five</li>
              <li className="eachListItem six" id="itemSix">Six</li>
              <li className="eachListItem seven" id="itemSeven">Seven</li>
              <li className="eachListItem eight" id="itemEight">Eight</li>
              <li className="eachListItem nine" id="itemNine">Nine</li>
              <li className="eachListItem ten" id="itemTen">Ten</li>
              <li className="eachListItem eleven" id="itemEleven">Eleven</li>
              <li className="eachListItem twelve" id="itemTwelve">Twelve</li>
              <li className="eachListItem thirteen" id="itemThirteen">Thirteen</li>
              <li className="eachListItem fourteen" id="itemFourteen">Fourteen</li>
            </ul>
          </div>
        
          <div className="rightListBox">
            <ul>
              <li className="eachListItem fifteen" id="itemFifteen">Fifteen</li>
              <li className="eachListItem sixteen" id="itemSixteen">Sixteen</li>
              <li className="eachListItem seventeen" id="itemSeventeen">Seventeen</li>
              <li className="eachListItem eighteen" id="itemEighteen">Eighteen</li>
              <li className="eachListItem nineteen" id="itemNineteen">Nineteen</li>
              <li className="eachListItem twenty" id="twenty">Twenty</li>
              <li className="eachListItem twentyOne" id="twentyOne">Twenty-One</li>
              <li className="eachListItem twentyTwo" id="twentyTwo">Twenty-Two</li>
              <li className="eachListItem twentyThree" id="twentyThree">Twenty-Three</li>
              <li className="eachListItem twentyFour" id="twentyFour">Twenty-Four</li>
              <li className="eachListItem twentyFive" id="twentyFive">Twenty-Five</li>
              <li className="eachListItem twentySix" id="twentySix">Twenty-Six</li>
              <li className="eachListItem twentySeven" id="twentySeven">Twenty-Seven</li>
              <li className="eachListItem twentyEight" id="twentyEight">Twenty-Eight</li>
            </ul>
          </div>
        </div>
    
        <button> (arrow left) </button>
	      <button> (arrow right) </button>
	      <button>(goes to back)</button>    
      </div>
    </div>
  );
}

function Back() {
  return (
    <div>
      <img src={back} className="backOfBook" alt="The Back of Your Book" width="1334px" height="750px" />
	
	    <div className="savedStoriesContainer">
		    <div className="savedStories">

			  </div>
		    <button>Post</button>
		    <button>Edit</button>
		    <button>Delete</button>
		    <button> (arrow left) </button>
		    <button> (arrow right) </button>
	    </div>
	    <div className="postedStoriesContainer">
		    <div className="postedStories">
		
		    </div>
		    <button> (arrow left) </button>
		    <button> (arrow right) </button>
	    </div>
      <button>(goes to inside)</button>
    </div>
  );
}

function Loading() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}  

function ToggleVisibility ({children}) {
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }

  var buttonText = show ? "Hide" : "Show";
  return (
    <div className="component-container">
      {show && children}
      <button onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}

export default App;
