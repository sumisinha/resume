import React from 'react';
// import {HTMLSvg, CSSSvg , JQuerySvg,JavascriptSvg,ReactSvg,GitSvg,ShopifySvg,WordpressSvg,MatrialSvg,BootstrapSvg,NextjsSvg}  from '../img/icons/logos'
// import Crossplatform from './../img/icons/crossP.png'
// import ResImg from './../img/icons/res.png'
// import UnitImg from './../img/icons/unitTest.png'
// import Api from './../img/icons/api.png'
// import { Row, Col } from 'react-bootstrap';

function Projects () {
    const Link = () =>{
        return(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
          </svg>)
    };
    return(<div>
        <h4 className='title-top'>Projects</h4>
        <ul className='customize-list'>
            <li>
                <h6>React Js Projects</h6>
                <p> <a href='https://www.noon.com/uae-en/' target='_blanck' rel="noopener noreferrer">Noon E-commers <Link/></a></p>
                <p><a href='https://www.namshi.com/home/' target='_blanck' rel="noopener noreferrer">Namshi E-commers <Link/></a></p>
                <p><a href='https://thedubaimall.com/' target='_blanck' rel="noopener noreferrer">The Dubai Mall <Link/></a></p>
            </li>
            </ul>
            <ul className='customize-list'>
            <li>
                <h6>HTML/HTML5 CSS/CSS3, JavaScript , PHP, Shopify, WordPress</h6>
                <p><a href='https://www.movinghub.co.uk/' target='_blanck' rel="noopener noreferrer" > The moving Hud <Link/></a></p>
                <p><a href='https://www.khimaronline.co.uk/' target='_blanck' rel="noopener noreferrer">khimaronline <Link/></a></p>
                <p><a href='http://www.suelzle-thoma.de/' target='_blanck' rel="noopener noreferrer"> suelzle-thoma  <Link/></a></p>
                <p><a href='http://www.netunousa.com/' target='_blanck' rel="noopener noreferrer">netunousa <Link/></a></p>
                <p><a href='http://www.qdbooming.com/' target='_blanck' rel="noopener noreferrer">qdbooming  <Link/></a></p>
                <p><a href='http://www.Numi.com.au'target='_blanck' rel="noopener noreferrer">Numi  <Link/></a> </p>
                <p><a href='http://www.icingartist.com.au' target='_blanck' rel="noopener noreferrer">IcingArtist <Link/></a></p>
                <p><a href='http://www.ivanart.net' target='_blanck' rel="noopener noreferrer">ivanart<Link/></a></p>
                <p><a href='http://www.mrprint.co' target='_blanck' rel="noopener noreferrer">Mrprint<Link/></a></p>
                <p><a href='http://www.summiturgentcare365.com/' target='_blanck' rel="noopener noreferrer">summiturgentcare365 <Link/></a></p>
                <p><a href='http://www.bedroomblessings.com/' target='_blanck' rel="noopener noreferrer">BedroomBlessing <Link/></a></p>
                
            </li>
        </ul>

    </div>)
}

export default Projects;