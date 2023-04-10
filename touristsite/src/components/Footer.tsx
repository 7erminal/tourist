import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer: React.FC = () => {
    return <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px', paddingBottom: '60px'}}>
        <hr/>
        <div className='footer'>
            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px'}}>Copyright 2023</Row>
        </div>
    </Row>
}

export default Footer