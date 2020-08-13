import React from 'react'
import avatar from '../img/avatar.png'

const Banner = () => {
    return (
        <section className="section-1 center" id="section-1">
          <h1 className="section-1-heading">
            Genesis Astete
          </h1>
          <img src={avatar} alt="avatar" className="person-img" />
          <h3 className="person-name">Front-End</h3>
         <a href="#section-3" className="section-1-btn">Projectos</a>
      </section>
    )
}

export default Banner