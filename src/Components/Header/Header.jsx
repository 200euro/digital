import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'



const Header = () => {
const [isActive, setActive] = useState (false)







const toggleBurger = () => {
  setActive(!isActive)
}

const closeBurger = () => {
  setActive(false)
}





  return (
<>

 




<header className="header">
<div className="cotainer">
<div className="header__wrapper">
   <div>

   <h1>Digital Agency</h1>
   </div>



<nav className={`header__menu ${isActive ? 'active' : '' }`}>
      <Link to={'/Home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/Contacts'}>Contacts</Link>
      <Link to={'/Testimional'}>Testimional</Link>

        <button className='btn__logo'><img src="/media.png" alt="" /></button>
      
</nav>


<div  onClick={toggleBurger}  className={`burger ${isActive ? 'active' : ''}`}>
  <div></div>
  <div></div>
  <div></div>
</div>



</div>
</div>
</header>
















</>
  )
}

export default Header