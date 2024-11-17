import React from 'react'
import './Branding.scss'

const Branding = ({name='SOOOOOOON', image='/2logo.png'}) => {
  return (
  <>
  <section className="branding">
  <div className="container">
    <div className="branding__wrapper">















<div className="branding__img">
  <img src={image} alt="" />
</div>

<div className="branding__box">
  <h1>{name}</h1>
  <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups
  </p>
  <div>
  <button className='swiper-button-next'><img src="/strel.png" alt="" /></button>
    </div>
</div>


    </div>
  </div>
</section>
  
  </>
  )
}

export default Branding