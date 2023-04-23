import logo from './logo.svg';
import MyMap from './viewport-animation/src/AnimatedMap';
import './App.css';
import Map from './Components/PostcardReceivedMap/PostcardReceivedMap.jsx'

function App() {
  return (
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
      <Map />


    </>

    // </div>
  );
}

export default App;
