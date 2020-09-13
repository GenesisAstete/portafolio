import React, { Fragment } from 'react'
import igit from '../img/igit.png'
import ilab from '../img/ilaboratoria.png'
import ilink from '../img/ilinke.png'
/* import cv from '../img/CVGenesisAsteteAscencio2020.pdf' */
/* import l from '../img/l.png'  */

const Contact = () => {
    return (
        <Fragment>
            <footer className="section-5 center">
                <div  style={{color:'white', fontSize:'2rem'}} >CONTÁCTAME</div>
            <div className="social-media">
          <a href="https://github.com/GenesisAstete" target="black" >
            <img src={igit} width="60rem"alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/genesis-astete-ascencio/" target="black" >
            <img src={ilink} width="60rem"alt=""/>
          </a>
          <a href="https://app.talento.laboratoria.la/profile/FBDd1rJgfEOnGz0u3YcgoLoEMQk1" target="black" >
            <img src={ilab} width="60rem"alt=""/>
          </a>
            </div>
        </footer>
      </Fragment>
    )
}

export default Contact
