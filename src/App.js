import React from 'react';
import './App.css';
import NavBarApp from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/itenlist'


function App() {
  return (
    <div className="App">
    <>
     <NavBarApp />
     
   <ItemListContainer /> 
   </>

    </div>
  );
}

export default App;
