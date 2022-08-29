import React from 'react';
import CartWidget from '../CartWidget';
import './navbar.css';

const NavBarApp = () => {

    return(
       <div className="container">
         <nav>
           <ul>
            <li>
              <a className='links' href='home'>Home</a>
           </li>           
             <li>
             <a className='links' href='productos'>Productos</a>
             </li>
             <li>
             <a className='links' href='contacto'>Contacto</a>
             </li>
             <li>
             <a className='cart-logo' href='cart'><CartWidget /></a>
             </li>
           </ul>            
         </nav>
      </div>

    )

} 



export default NavBarApp;
