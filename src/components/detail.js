import React from 'react';
import {HTMLSvg, CSSSvg , JQuerySvg,JavascriptSvg,ReactSvg,GitSvg,ShopifySvg,WordpressSvg,MatrialSvg,BootstrapSvg,NextjsSvg}  from '../img/icons/logos'
import Crossplatform from './../img/icons/crossP.png'
import ResImg from './../img/icons/res.png'
import UnitImg from './../img/icons/unitTest.png'
import Api from './../img/icons/api.png'
import { Row, Col } from 'react-bootstrap';
function Details () {

    const Link = () =>{
        return(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
          </svg>)
    };
    return(
        <div className='detailContainer'>
            <div>
                <h4 className='title-top'>Introduction</h4>
                <p>My name is Sumi Sinha, and I hold a Master’s degree in Computer Applications (MCA). With over 9 years of hands-on experience in web development, I specialize in HTML, CSS, JavaScript, React JS, Shopify, and WordPress. Throughout my career, I have successfully contributed to a variety of web design and development projects, focusing on creating responsive, user-friendly applications. I come from a family with a strong background in public service, as both my mother and father are government employees.</p>
                <div className='jobtitle'><h6>Strengths:</h6></div>
                <ul className='customize-list'>
                            
                                <li><p>Flexibility and Adaptability</p></li>
                                <li><p>Learning agility: Quick learner</p></li>
                                <li><p>Positive Attitude: Creating a positive work environment</p></li>
                                <li><p>Self Motivated</p></li>
                                <li><p>Analytical and Problem Solving Skills</p></li>
                                <li><p>Strong Analytical abilities</p></li>
                                <li><p>Attention to details</p></li>
                            
                </ul>
            </div> 
            <div>
                <h4 className='title-top'>Profile Summary</h4>
                <p>Experienced Software Developer with 8+ years of expertise in designing, developing, and maintaining web applications using HTML, CSS, JavaScript, React.js, and Shopify. Skilled in delivering scalable and efficient solutions, translating business requirements into technical solutions, and collaborating with cross- functional teams.</p>
                <div className='jobtitle'><h6>Key Skills:</h6></div>
                
                <ul className='customize-list'>
                    <li><h6>Agile Methodologies : </h6>Applied agile practices for team collaboration and sprint planning.</li>
                    <li><h6>People Management:</h6> Managed a team of developers, providing guidance and support.</li>
                    <li><h6>Problem-solving</h6>Resolved technical issues and optimized web performance.</li>
                    <li><h6>Time management</h6>Prioritized multiple tasks to meet project deadlines efficiently.</li>
                    <li><h6>Teamwork</h6> Collaborated with designers and developers to ensure smooth project delivery.</li>
                    <li><h6>HTML/CSS:</h6> Proficient in crafting semantic and responsive web designs, ensuring cross-browser compatibility and accessibility.</li>
                    <li><h6><noscript> JavaScript:</noscript></h6> Extensive experience in creating dynamic and interactive user interfaces, optimizing performance, and integrating APIs.</li>
                    <li><h6>React.js:</h6> Skilled in building reusable components, managing state with hooks and context, and implementing complex front-end functionalities.</li>
                    <li><h6>Shopify/WordPress:</h6> Expertise in developing custom themes, integrating third-party apps, and optimizing e-commerce platforms for enhanced user experiences.</li>
                </ul>
            </div>
            <div>
                <h4 className='title-top'>Education</h4>
                <Row className='my-3 jobtitle' >
                    <Col>
                        <h6 >Master of Computer Applications</h6>
                        <p>Maharishi Markandeshwar University</p>
                    </Col>
                    <Col><h6 className='text-end'>2014</h6></Col>
                </Row>
                <Row className='my-3 jobtitle'>
                    <Col>
                        <h6>Bachelor of Computer Applications</h6>
                        <p>Chhatrapati Shahu Ji Maharaj University</p>
                    </Col>
                    <Col><h6 className='text-end'>2011</h6></Col>
                </Row>
                <Row className='my-3 jobtitle'>
                    <Col>
                        <h6>12<sup>th</sup> <small>(Physics, Chemistry, and Mathematics) </small></h6>
                        <p>Uttar Pradesh State Board </p>
                    </Col>
                    <Col>
                        <h6 className='text-end'>2007</h6>
                    </Col>

                </Row>
                <Row className='my-3 jobtitle' >
                    <Col>
                        <h6>10<sup>th</sup> <small>(Physics, Chemistry, and Mathematics) </small></h6>
                        <p>Uttar Pradesh State Board </p>
                    </Col>
                    <Col>
                        <h6 className='text-end'>2005</h6>
                    </Col>
                </Row>
            </div>
            <div>
                <h4 className='title-top'>Key Skill</h4>
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
                            <img alt='Responsive Web Design' src={ResImg}/></div>
                                <h5>Responsive Web Design</h5></div></li>
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
            </div>
            <div>
                <h4 className='title-top'>Work Experience</h4>
                <div className='my-3'>
                    <Row className='my-3 jobtitle'>
                        <Col>
                            <h6>Software Development Engineer 2</h6>
                            <p>Limestone technologies Pvt Ltd / Noon e-commerce pvt Limited</p>
                        </Col>
                        <Col className='text-end'>
                            <h6> Oct 2017 - Sept 2024</h6>
                            <p> Gurgaon , India</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul className='customize-list'>
                            <li><p>Developed and maintained web applications using HTML/CSS, HTML5/CSS3, Bootstrap, Material UI, Ant UI, and JavaScript.</p></li>
                            <li><p>Expertise in React JS, TypeScript, Next JS to build dynamic, responsive web applications.</p></li>
                            <li><p>Leveraged Git Monorepository for efficient source code management and collaboration.</p></li>
                            <li><p>Specialized in responsive layouts and cross- platform development to ensure seamless user experiences across devices.</p></li>
                            <li><p>Converted Figma designs into React components, enhancing design accuracy and reducing implementation time.</p></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
                <div className='my-3'>
                    <Row className='my-3 jobtitle'>
                        <Col>
                            <h6>Web Developer</h6>
                            <p>InfoIcon Technologies</p>
                        </Col>
                        <Col className='text-end'>

                        <h6> Nov 2016 - Oct 2017</h6>
                            <p> Noida , India</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul className='customize-list'>
                            <li><p>Designed and developed websites using HTML/CSS, HTML5/CSS3, Bootstrap, jQuery, and JavaScript.</p></li>
                            <li><p>Ensured website responsiveness and cross- platform compatibility.</p></li>
                            <li><p>Converted PSD designs into HTML/CSS, maintaining design fidelity while optimizing for performance.</p></li>
                            <li><p>Specialized in responsive layouts and cross- platform development to ensure seamless user experiences across devices.</p></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
                <div className='my-3'>
                    <Row className='my-3 jobtitle'>
                        <Col>
                            <h6>Web Developer</h6>
                            <p>Suffescom solutions pvt ltd</p>
                        </Col>
                        <Col className='text-end'>

                        <h6> March 2016 - Oct 2016</h6>
                            <p> Mohali , India</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul className='customize-list'>
                            <li><p>Worked on HTML/CSS, HTML5/CSS3, Bootstrap, jQuery, and JavaScript for developing responsive websites.</p></li>
                            <li><p>Focused on ensuring cross-platform compatibility and seamless user experience.</p></li>
                            <li><p>Handled PSD to HTML/CSS conversions with a focus on performance optimization and code cleanliness.</p></li>
                            <li><p>Specialized in responsive layouts and cross- platform development to ensure seamless user experiences across devices.</p></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
                <div className='my-3'>
                    <Row className='my-3 jobtitle'>
                        <Col>
                            <h6>Web Developer (Trainee Engineer)</h6>
                            <p>Medma infomatix lucknow</p>
                        </Col>
                        <Col className='text-end'>

                        <h6>Jan 2015 - Jan 2016</h6>
                            <p> Lucknow , India</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul className='customize-list'>
                            <li><p>Developed UI elements using HTML/CSS, HTML5/CSS3, Bootstrap, jQuery, and JavaScript.</p></li>
                            <li><p>Created responsive, cross-platform websites.</p></li>
                            <li><p>Worked on Angular UI development and WordPress theme customization.</p></li>
                            <li><p>Converted PSD designs to HTML/CSS, ensuring pixel-perfect implementation.</p></li>
                            <li><p>Specialized in responsive layouts and cross- platform development to ensure seamless user experiences across devices.</p></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
                <div className='my-3'>
                    <Row className='my-3 jobtitle'>
                        <Col>
                            <h6 >Internship</h6>
                            <p>Jeronone Technologies</p>
                        </Col>
                        <Col className='text-end'>

                        <h6 > 7 Months</h6>
                            <p> Mohali , India</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <ul className='customize-list'>
                            <li><p>Worked with HTML/CSS, HTML5/CSS3, Bootstrap, Shopify, php, liquid, jQuery and JavaScript.</p></li>
                            <li><p>Converted PSD designs into HTML/CSS and customized Shopify themes with additional functionalities.</p></li>
                            <li><p>Specialized in responsive layouts and cross- platform development to ensure seamless user experiences across devices.</p></li>
                        </ul>
                        </Col>
                    </Row>
                </div>
            </div>
            <div>
                <h4 className='title-top'>Projects</h4>
                <ul className='customize-list'>
                    <li>
                        <h6>React Js Projects</h6>
                        <p> <a href='https://www.noon.com/uae-en/' target='_blanck' rel="noopener noreferrer">Noon E-commerce <Link/></a></p>
                        <p><a href='https://www.namshi.com/home/' target='_blanck' rel="noopener noreferrer">Namshi E-commerce <Link/></a></p>
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

            </div>
        </div>
    )
}

export default Details;