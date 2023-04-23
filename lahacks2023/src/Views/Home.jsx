import { useLocation } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    

    const location  = useLocation();
    const [uid, setUID] = useState(location.state.uid);
    return (
    <div>
        <p>Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">User</a>
    </div>
    )
}

export default Home;