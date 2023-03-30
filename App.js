import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div>
      <Front/>
      <Inside/>
      <Back/>
    </div>
  );
}

function Front() {
  return (
    <div>
      
    </div>
  );
}
function Inside() {
  return (
    <div>

    </div>
  );
}
function Back() {
  return (
    <div>

    </div>
  );
}

function Loading() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

  
      <body>
        <img src="%PUBLIC_URL%/frontOfBook.png" alt="The Front of Your Book" width="1334px" height="750px"></img> 
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
      </body>
    </div>
  );
}


	
  

export default App;
