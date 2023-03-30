import front from '../src/frontOfBook.png';
import inside from '../src/insideOfBook.png';
import back from '../src/backOfBook.png';
import logo from './logo2.png';

function App() {
  return (
    <div>
      <Front/>
      <Inside/>
      <Back/>
      <Loading/>
    </div>
  );
}

function Front() {
  return (
    <div>
      <img src={front} className="frontOfBook" alt="The Front of Your Book" width="1334px" height="750px" />

      <form action="{file that the form data should be sent to}" method="post">
          <div>
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"></input> 
              <p>Remember me</p>
            </label>
          </div>

          <div>
            <button id="cancel">Cancel</button>
            <span class="psw"><a href="#">Forgot password?</a></span>
            <p>Not a member yet? <a href="#">Sign up!!</a></p>
          </div>
        </form>
    </div>
  );
}

function Inside() {
  return (
    <div>
      <img src={inside} className="insideOfBook" alt="The Inside of Your Book" width="1334px" height="750px" />
  	
      <div class="flexContainer">
        <div class="flexItem lists">
          <div class="leftListBox">
            <ul>
              <li class="eachListItem one" id="itemOne" contenteditable="true">One</li>
              <li class="eachListItem two" id="itemTwo" contenteditable="true">Two</li>
              <li class="eachListItem three" id="itemThree" contenteditable="true">Three</li>
              <li class="eachListItem four" id="itemFour" contenteditable="true">Four</li>
              <li class="eachListItem five" id="itemFive" contenteditable="true">Five</li>
              <li class="eachListItem six" id="itemSix" contenteditable="true">Six</li>
              <li class="eachListItem seven" id="itemSeven" contenteditable="true">Seven</li>
              <li class="eachListItem eight" id="itemEight" contenteditable="true">Eight</li>
              <li class="eachListItem nine" id="itemNine" contenteditable="true">Nine</li>
              <li class="eachListItem ten" id="itemTen" contenteditable="true">Ten</li>
              <li class="eachListItem eleven" id="itemEleven" contenteditable="true">Eleven</li>
              <li class="eachListItem twelve" id="itemTwelve" contenteditable="true">Twelve</li>
              <li class="eachListItem thirteen" id="itemThirteen" contenteditable="true">Thirteen</li>
              <li class="eachListItem fourteen" id="itemFourteen" contenteditable="true">Fourteen</li>
            </ul>
          </div>
        
          <div class="rightListBox">
            <ul>
              <li class="eachListItem fifteen" id="itemFifteen" contenteditable="true">Fifteen</li>
              <li class="eachListItem sixteen" id="itemSixteen" contenteditable="true">Sixteen</li>
              <li class="eachListItem seventeen" id="itemSeventeen" contenteditable="true">Seventeen</li>
              <li class="eachListItem eighteen" id="itemEighteen" contenteditable="true">Eighteen</li>
              <li class="eachListItem nineteen" id="itemNineteen" contenteditable="true">Nineteen</li>
              <li class="eachListItem twenty" id="twenty" contenteditable="true">Twenty</li>
              <li class="eachListItem twentyOne" id="twentyOne" contenteditable="true">Twenty-One</li>
              <li class="eachListItem twentyTwo" id="twentyTwo" contenteditable="true">Twenty-Two</li>
              <li class="eachListItem twentyThree" id="twentyThree" contenteditable="true">Twenty-Three</li>
              <li class="eachListItem twentyFour" id="twentyFour" contenteditable="true">Twenty-Four</li>
              <li class="eachListItem twentyFive" id="twentyFive" contenteditable="true">Twenty-Five</li>
              <li class="eachListItem twentySix" id="twentySix" contenteditable="true">Twenty-Six</li>
              <li class="eachListItem twentySeven" id="twentySeven" contenteditable="true">Twenty-Seven</li>
              <li class="eachListItem twentyEight" id="twentyEight" contenteditable="true">Twenty-Eight</li>
            </ul>
          </div>
        </div>
    
        <button> (arrow left) </button>
	      <button> (arrow right) </button>
	      <a> (saved and posted stories button) </a>    
      </div>
    </div>
  );
}

function Back() {
  return (
    <div>
      <img src={back} className="backOfBook" alt="The Back of Your Book" width="1334px" height="750px" />
	
	    <div class="savedStoriesContainer">
		    <div class="savedStories">

			  </div>
		    <button>Post</button>
		    <button>Edit</button>
		    <button>Delete</button>
		    <button> (arrow left) </button>
		    <button> (arrow right) </button>
	    </div>
	    <div class="postedStoriesContainer">
		    <div class="postedStories">
		
		    </div>
		    <button> (arrow left) </button>
		    <button> (arrow right) </button>
	    </div>
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

export default App;
