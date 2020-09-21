import React from 'react';
import logo from './logo.svg';
import './App.css';
import Etudiants from "./Etudiants";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h1 className="text-center">Liste des Etudiants</h1>
            <Etudiants/>
        </div>
      </div>
    </div>
  );
}

export default App;
