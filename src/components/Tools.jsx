import React, { Fragment } from 'react'
import firebase from '../img/firebase.png'


const Tools = () => {
    return (
        <Fragment >
            <section className="section-21" id="Herramientas">
                <h1 className="section-heading section-2-heading">HERRAMIENTAS</h1>
                <div className="servicesTools">
                    <div className="service">
                        <i className="devicon-html5-plain-wordmark colored"></i>
                    </div>
                    <div className="service">
                        <i className="devicon-css3-plain-wordmark colored"></i>
                    </div>
                    <div className="service">
                            <i className="devicon-javascript-plain colored"></i>
                    </div>
                    <div className="service">
                         <i className="devicon-react-original-wordmark colored"></i>
                    </div>
                </div>
                <div className="servicesTools">
                    <div className="service">
                        <i className="fab fa-node"></i>
                    </div>
                    <div className="service">
                     <i className="devicon-bootstrap-plain-wordmark colored"></i>
                    </div>
                    <div className="service">
                        <img className="logos"  alt="" src={firebase}/>
                    </div>
                    <div className="service">
                        <i className="devicon-github-plain-wordmark colored"></i>
                    </div>
                </div>
        </section>
        </Fragment>
    )
}

export default Tools
