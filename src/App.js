import React from 'react'
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import { originals,action } from './urls';
import Banner from "./Components/Banner/Banner";
import Poster from './Components/Poster/Poster';
//---------------------------------------------

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Poster url={originals} title="Netflix Originals" isOriginal />
      <Poster url={action} title="Action" />
    </div>
  );
}

export default App;
