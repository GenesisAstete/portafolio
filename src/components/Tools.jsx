import React, { Fragment } from 'react'
import firebase from '../img/firebase.png'


const Tools = () => {
    return (
        <Fragment >
            <section className="section-21" id="section-21">
                <h1 className="section-heading section-2-heading">HERRAMIENTAS</h1>
                <div className="services">
                    <div className="service">
                        <i className="fab fa-html5"></i>
                    </div>
                    <div className="service">
                        <i className="fab fa-css3-alt"></i>
                    </div>
                    <div className="service">
                        <i className="fab fa-js"></i>
                    </div>
                    <div className="service">
                        <i className="fab fa-react"></i>
                    </div>
                </div>
                <div className="services">
                    <div className="service">
                        <i className="fab fa-node"></i>
                    </div>
                    <div className="service">
                        <i className="fab fa-bootstrap"></i>
                    </div>
                    <div className="service">
                        <img className="logos"  alt="" src={firebase}/>
                    </div>
                    <div className="service">
                        <i className="fab fa-github-square"></i>
                    </div>
                </div>
        </section>
        </Fragment>
    )
}

export default Tools
