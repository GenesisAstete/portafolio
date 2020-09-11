import React, { Fragment } from 'react'
/* import avatar2 from '../img/avatar2.png' */
import avatar3 from '../img/avatar3.jpg'
import icv from '../img/cv.png'  
import cv from '../img/CVGenesisAsteteAscencio2020.pdf'


const Aboutme = () => {
    return (
        <Fragment>
            <section className="section-2" id="SobreMi">
                <h1 className="section-heading section-2-heading">SOBRE MÍ</h1>
            <div className="cont-about">
                 {/* <div  className="about1"><img src={avatar3} alt="avatar" className="avatar2"/> </div>  */}
                <div  className="about2">
                <img src={avatar3} alt="avatar" className="photoC" />
                    <p>
                    Hola, Buen día<br/>
                    Si estás aquí, entonces quiere decir que algo te interesó. Así que quería aprovechar de contarles algo sobre mí. 
                    Cuando estaba en el liceo había llegado el momento de elegir una carrera y sin dudarlo dije quiero ser Ingeniera Informática, una carrera con mucho futuro donde podía desarrollar mi creatividad y continuamente iba a estar aprendiendo y creando cosas nuevas. Luego de mucho esfuerzo y perseverancia me titule Ingeniera en Informática.
                    Comencé a trabajar como Coordinadora de Informática y Enlaces en un colegio, se presentó la oportunidad de formar parte del programa de capacitación lenguajes digitales del Mineduc donde aprendí a programar usando Scratch y sentía la necesita de seguir aprendiendo por lo que encontré a Laboratoria una gran Institución donde me he podido formar como programadora Front-End en Javascript con Reactjs, conjuntamente  desarrollando mi autoprendizaje, trabajo en equipo y metodologías agiles. Este es un camino que deseo seguir perfeccionado para llegar a ser una gran desarrolladora. 
                    </p>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <a href={cv} download="CVGenesisAstete" ><img src={icv} className="play-btn" alt=""/></a>
                        <a href={cv} download="CVGenesisAstete" className="text-dw"style={{color:'black'}}>Descarga mi CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Aboutme
