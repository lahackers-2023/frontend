import { useState } from "react";
import { useLocation } from "react-router-dom";

const SignUp = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state.email);
    console.log(location.state.email)

    return (
    <div>
        <p>Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Signup</a>
    </div>
    )
}

export default SignUp;