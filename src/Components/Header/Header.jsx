import React, { useState } from 'react'
import './Header.scss'


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



<div className={`header__menu ${isActive ? 'active' : '' }`}>
<a href="">HOME</a>
      <a href="">ABOUT</a>
      <a href="">Testimonials</a>
      <a href="">contact</a>
        <button className='btn__logo'><img src="/media.png" alt="" /></button>
      
</div>


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