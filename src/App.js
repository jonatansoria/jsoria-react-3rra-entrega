import React from 'react';
import './App.css';
import ProductList from './components/itemListContainer/item';



const App = () => {
 
  return (
     
    <div className='App'>   
    <div>
      <h1>Desafio numero 5</h1> 
      </div> 
      <div className='container'>
      <div className="card">
       <ProductList/>
      </div>
   </div>
   </div>
  )

}

export default App;
