import React from 'react';
import {Card,ListGroup} from 'react-bootstrap';
import ProfileImg from '../img/IMG-20190301-WA0000.jpg'
import {ReactComponent as PhoneSvg} from '../img/icons/phone.svg'
import {ReactComponent as EmailSvg} from '../img/icons/email.svg'
import {ReactComponent as HomeSvg} from '../img/icons/home.svg'
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <div className='leftFixed'>
            <Card style={{ width: '25rem' }} >
                <div className='imgContainer'>
                    <Card.Img variant="top" src={ProfileImg} alt='Sumi Sinha' />
                </div>
                <Card.Body>
                    <div className='h1'>Sumi Sinha</div>
                    <Card.Text>
                        <p>
                            Software Engineer 2
                        </p>
                        <p>
                            <a href='callTo:+919044600131'>
                                <PhoneSvg/> 9044600131
                            </a>
                        </p>
                        <p>
                            <a href='mailTo:+sumisinha2008@gmail.com'>
                                <EmailSvg/>  sumisinha2008@gmail.com
                            </a>
                        </p>
                        <p><HomeSvg/>  Sitapur , UP , India</p>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><Link to='/resume/about'>Introduction</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/resume/profile-summary">Profile Summary</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/resume/education">Education</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/resume/skills">Skill</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/resume/workexp">Work Experience</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/resume/projects">Projects</Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
    

}

export default Profile;