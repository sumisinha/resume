import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Education (){
    return(<div>
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
    </div>)
}
export default Education;