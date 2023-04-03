import React, { useState } from "react";

export const Register = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="uname">
                        <b>Username</b>
                    </label>
                    <input value={user} type="text" placeholder="Enter Username" name="uname" required></input>

                    <label htmlFor="psw">
                        <b>Password</b>
                    </label>
                    <input value={pass} type="password" placeholder="Enter Password" name="psw" required></input>

                    <button type="submit">Login</button>
                </div>

                <div>
                    <button id="cancel">Cancel</button>
                    <span className="psw"><a href="#">Forgot password?</a></span>
                    <p>Already a member?<button onClick={() => props.onFormSwitch('login')}>Sign in!!</button></p>
                </div>
            </form>
        </div>
    )
}