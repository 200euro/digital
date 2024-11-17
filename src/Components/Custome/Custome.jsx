import React from 'react'
import './Custome.scss'

const Custome = ({name ='', image=''}) => {
  return (
<>

<section className="custome">
  <div className="container">
    <div className="custome__wrapper">
    <div className="custome__box">
<div><h1>{name}</h1></div>  
<div> <p>Commonly used in the graphic, print & publishing  industris for previewing visual layout and mockups
      </p></div>
      <div>
  <button ><img src="/strel.png" alt="" /></button>
    </div>
    </div>

<div className="custome__img">
  <img src={image} alt="" />  
</div>

    </div>
  </div>
</section>
</>
  )
}

export default Custome