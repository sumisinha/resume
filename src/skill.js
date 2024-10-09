import React from 'react';
import {HTMLSvg, CSSSvg , JQuerySvg,JavascriptSvg,ReactSvg,GitSvg,ShopifySvg,WordpressSvg,MatrialSvg,BootstrapSvg,NextjsSvg}  from './img/icons/logos'
import Crossplatform from './img/icons/crossP.png'
import ResImg from './img/icons/res.png'
import UnitImg from './img/icons/unitTest.png'
import Api from './img/icons/api.png'

function Skills () {
    return(<div>
        <h4 className='title-top'>Skill</h4>
        <div>
            <ul className='skilllist'>
                <li>
                    <div className='skillContainer'>
                        <div className='imgSkill'> <HTMLSvg/></div>
                        <h5>HTML/HTML5</h5>
                    </div>
                </li>
                <li>
                <div className='skillContainer'>
                <div className='imgSkill'> <CSSSvg/></div>
                        <h5>CSS/CSS3</h5>
                    </div>
                </li>
                <li><div className='skillContainer'>
                <div className='imgSkill'> <JQuerySvg/></div>
                        <h5>JQuery</h5>
                    </div></li>
                <li>
                <div className='skillContainer'>
                <div className='imgSkill'> 
                    <JavascriptSvg/></div>
                        <h5>JavaScript</h5>
                    </div></li>
                <li>
                <div className='skillContainer'>
                <div className='imgSkill'> 
                    <ReactSvg/></div>
                        <h5>React Js</h5>
                    </div></li>
                <li>
                <div className='skillContainer'>
                <div className='imgSkill'> 
                    <GitSvg/></div>
                        <h5>Git/GitHub</h5>
                    </div></li>
                <li>
                <div className='skillContainer'>
                <div className='imgSkill'> 
                    <ShopifySvg/></div>
                        <h5>Shopify</h5>
                    </div></li>
                <li>
                <div className='skillContainer'>
                <div className='imgSkill'> 
                    <WordpressSvg/></div>
                        <h5>WordPress</h5>
                    </div>
                </li>
                <li><div className='skillContainer'>
                <div className='imgSkill'> 
                    <MatrialSvg/></div>
                        <h5>Matrial UI</h5>
                        </div>
                </li>

                <li><div className='skillContainer'>
                <div className='imgSkill'> 
                    <BootstrapSvg/></div>
                        <h5>Bootstrap</h5>
                        </div></li>
                        <li><div className='skillContainer'>
                <div className='imgSkill'> <NextjsSvg/></div>
                <h5>
                Nextjs</h5>
                </div></li>
                <li><div className='skillContainer'>
                <div className='imgSkill'> 
                    <img alt='Responsive Design' src={ResImg}/></div>
                        <h5>Responsive Design</h5></div></li>
                <li><div className='skillContainer'>
                <div className='imgSkill'> <img alt="Cross Platform" src={Crossplatform}/></div>
                        <h5>Cross Platform</h5></div></li>

                <li><div className='skillContainer'>
                <div className='imgSkill'> 
                    <img alt="API Integration" src={Api}/></div>
                        <h5>API Integration </h5></div></li>
                <li><div className='skillContainer'>
                <div className='imgSkill'> 
                    <img alt="Unit Testing" src={UnitImg}/></div>
                        <h5>Unit Testing</h5></div>
                </li>
            </ul>
        </div>
    </div>)
}

export default Skills;