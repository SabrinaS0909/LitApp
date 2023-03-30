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
