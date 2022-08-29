import React from 'react';
import './App.css';
import NavBarApp from './components/navbar/NavBar'
import ItemListContainer from './components/itemListContainer/itenlist'
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
    <>
     <NavBarApp />
     
   <ItemListContainer /> 

   <ItemCount/>
   </>

    </div>
  );
}

export default App;
