import logo from "./logo.svg";
import "./App.css";
import PostOffice from "./Views/PostOffice";
// import logo from './logo.svg';
// import './App.css';
import PlaceSelector from './PlaceSelector';
import React from 'react';

function App() {

  return (
    <>
      <PlaceSelector/>
      <PostOffice/>
    </>
  )

}

export default App;