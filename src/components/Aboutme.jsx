import React, { Fragment } from 'react'
/* import avatar2 from '../img/avatar2.png' */
import cv from '../img/CVGenesisAsteteAscencio2020.pdf'


const Aboutme = () => {
    return (
        <Fragment>
            <section className="section-2" id="SobreMi">
            <h1 className="section-heading section-2-heading">SOBRE MÍ</h1>
           {/*  <img src={avatar2} alt="avatar" className="person-img" /> */}
                <div className="services">
                    <div className="service">
                        <i className="far fa-lightbulb"></i>
                        <h2 className="service-heading">Creativa</h2>
                    </div>
                    <div className="service">
                        <i className="fas fa-users"></i>
                        <h2 className="service-heading">Trabajo en Equipo</h2>
                    </div>
                    <div className="service">
                        <i className="fas fa-hands-helping"></i>
                        <h2 className="service-heading">Comprometida</h2>
                    </div>
                    <div className="service">
                        <i className="fas fa-laugh-beam"></i>
                        <h2 className="service-heading">Alegre</h2>
                    </div>
                    <div className="service">
                        <i className="fas fa-download"></i>
                        <h2 className="service-heading">
                            <a href={cv} download="CVGenesisAstete">
                            CV</a>
                        </h2>
                    </div>
                </div>
            </section>
            
     

        </Fragment>
    )
}

export default Aboutme
