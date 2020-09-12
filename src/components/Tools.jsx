import React, { Fragment } from 'react'
import lfirebase from '../img/firebase.png'
/* import lhtml from '../img/html.png'
import lcss from '../img/css3.png'
import ljs from '../img/javascript.png'
import lgithub from '../img/github.png'
import lreact from '../img/reactjs.png'
import lsass from '../img/sass.png'
import lnode from '../img/nodejs.png' */

const Tools = () => {
    return (
        <Fragment >
            <section className="section-21" id="Herramientas">
                <h1 className="section-heading section-2-heading">HERRAMIENTAS</h1>
                <div className="servicesTools">
                    <div className="service">
                        {/* <i className="devicon-html5-plain-wordmark colored"></i> */}
                        {/* <i class="devicon-html5-plain"></i>
                        <img src={lhtml} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                        <i class="devicon-html5-plain colored"></i>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>HTML</p>
                    </div>
                    <div className="service">
                        {/* <i className="devicon-css3-plain-wordmark colored"></i> */}
                        {/* <i class="devicon-css3-plain"></i>
                        <img src={lcss} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
        {/*                 <svg viewBox="0 0 128 128">
<path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
</svg> */}<i class="devicon-css3-plain colored"></i>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>CSS</p>
                    </div>
                    <div className="service">
                        {/* <i className="devicon-javascript-plain colored"></i> */}
                        {/* <img src={ljs} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                        <i class="devicon-javascript-plain colored"></i>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>JAVASCRIPT</p>
                    </div>
                    <div className="service">
                         {/* <i className="devicon-react-original-wordmark colored"></i> */}
                         {/* <img src={lreact} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                         <i class="devicon-react-original colored"></i>
                         <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>REACTJS</p>
                    </div>
                </div>
                <div className="servicesTools">
                    <div className="service">
                        {/* <i className="fab fa-node"></i> */}
                        {/* <img src={lnode} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                        <i class="devicon-nodejs-plain colored"></i>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>NODE</p>
                    </div>
                    <div className="service">
                        {/* <i className="devicon-bootstrap-plain-wordmark colored"></i> */}
                        {/* <img src={lsass} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                        <i class="devicon-sass-original colored"></i>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>SASS</p>
                    </div>
                    <div className="service">
                        {/* <img className="logos"  alt="" src={firebase}/> */}
                        {/* <img src={lfirebase} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                        {/* "https://img.icons8.com/color/480/000000/firebase.png" */}
                        <img src={lfirebase} style={{width: '11rem'}} alt=""/>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>FIREBASE</p>
                    </div>
                    <div className="service">
                        {/* <i className="devicon-github-plain-wordmark colored"></i> */}
                       {/*  <img src={lgithub} style={{width:'40%', filter: 'drop-shadow(3px 2px 7px #444)'}}/> */}
                       <i class="devicon-github-plain colored"></i>
                        <p style={{fontSize:'2rem', fontWeight:'500', textShadow: '0.1em 0.1em 0.2em #444'}}>GITHUB</p>
                    </div>
                </div>
        </section>
        </Fragment>
    )
}

export default Tools
