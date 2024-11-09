import React from 'react'
import './People.scss'

const People = () => {
  return (
  <>
  <section className="people">
   <div className="container">
      <div className="people__title">
<p>TESTIMONIALS</p>
<h1>Read What Other have to Say</h1>
      </div>


      <div className="people__avatar">
<div className="card__people">
   <img src="/andre.png" alt="" />
   <h4>Andrew Rathore</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
</div>
<div className="card__people">
   <img src="/vera.png" alt="" />
   <h4>Vera Duncan</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
</div>
<div className="card__people">
   <img src="/mark.png" alt="" />
   <h4>Mark Smith</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
</div>
      </div>
   </div>
  </section>


  </>
  )
}

export default People