
// import logo from './logo.svg';
// import './App.css';
import PlaceSelector from './PlaceSelector';
import React from 'react';
import Landing from './Views/Landing';
import NavBar from './Components/NavBar';

function App() {

  return (
    <>
      {/* <PlaceSelector/> */}
      <Landing/>
    </>
  )

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <>
      {/* <MyMap /> */}
      <ReceivePostcard />
  


    </>

    // </div>
  );
}

export default App;