import React from 'react'
import avatar from '../img/avatar.png'
import igit from '../img/igit.png'
import ilab from '../img/ilaboratoria.png'
import ilink from '../img/ilinke.png'

const Banner = () => {
    return (
        <section className="section-1 center" id="Home">
          <h1 className="section-1-heading">
            Genesis Astete
          </h1>
          <img src={avatar} alt="avatar" className="person-img" />
          <h3 className="person-name">Front-End</h3>
          <div>
          <a href="https://github.com/GenesisAstete" target="black">
            <img src={igit} width="60rem"alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/genesis-astete-ascencio/" target="black">
            <img src={ilink} width="60rem"alt=""/>
          </a>
          <a href="https://app.talento.laboratoria.la/profile/FBDd1rJgfEOnGz0u3YcgoLoEMQk1" target="black">
            <img src={ilab} width="60rem"alt=""/>
          </a>
          </div>
      {/*    <a href="#Proyectos" className="section-1-btn">Projectos</a> */}
      </section>
    )
}

export default Banner