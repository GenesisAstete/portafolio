import React, { Fragment } from 'react'
/* import cv from '../img/CVGenesisAsteteAscencio2020.pdf'
import lab from '../img/lab.png' */

const Contact = () => {
    return (
        <Fragment>
            <footer className="section-5 center">
            <div className="social-media">
            <a href="https://github.com/GenesisAstete" className="social-media-link">
                <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/genesis-macarena-astete-ascencio-66b4031b1/" className="social-media-link">
                <i className="fa fa-linkedin-square"></i>
            </a>
{/*             <a href={cv} download className="social-media-link">
                <i class="fa fa-download" aria-hidden="true"></i>
            </a> */}
{/*             <a href="https://www.linkedin.com/in/genesis-macarena-astete-ascencio-66b4031b1/" className="social-media-link">
                <i className="lab">{"<L>"}</i>
            </a> */}
            </div>
        </footer>
      </Fragment>
    )
}

export default Contact
