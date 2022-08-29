import React, {useState} from 'react';

import './ItemCount.css';


function ItemCount () {
     const [amount,setAmount] = useState(15);
    return(
       <div className="counter">
          <div className='text'>
           <h1>Contador de desafio</h1>
            <div className='name'>
             <h2 className='amount'>Cantidad = {amount}</h2>
             <button className='btn btn-success mx-3' onClick={()=> setAmount(amount + 1)} disabled ={amount >= 15} >+</button> 
             <button className='btn btn-danger mx-3' onClick={()=> setAmount(amount - 1)} disabled ={amount === 0}>-</button>
             <button className='btn btn-secondary mx-3' onClick={()=> setAmount(0)} disabled ={amount === 0}>Reset</button>    
           </div>
        </div>
      </div>

    )

} 



export default ItemCount;