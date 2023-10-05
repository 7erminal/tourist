import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from "react-awesome-reveal"

type Props = {
    handleShow: (v: string)=>void
  }

const ZanzibarPackage: React.FC<Props> = ({handleShow}) => {
    return <Row>
        <Col md={12} sm={12} style={{paddingTop: '20px'}}>
            <h2>ZANZIBAR PACKAGE</h2>
        </Col>
        <Col md={12} sm={12}>
            <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '10px', paddingBottom: '10px'}}>
                <Col md={4} sm={6} xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Fade duration={1000}> */}
                    <Fade delay={300} direction='right'>
                        <div className='z_image_box2'>
                            <div className='z_image_box'>
                                <div className='z_image' onClick={()=>handleShow('/images/dabbc626-a376-406c-acd2-13057199bf97.JPG')} style={{borderRadius: '9px', height: '100%', width: '100%', backgroundImage: `url('/images/dabbc626-a376-406c-acd2-13057199bf97.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                    </Fade>
                </Col>
                <Col md={4} sm={6} xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Fade duration={1000}> */}
                    <Fade delay={600} direction='right'>
                        <div className='z_image_box2'>
                            <div className='z_image_box'>
                                <div className='z_image' onClick={()=>handleShow('/images/1c67d251-a14d-4b90-9706-50d847578571.JPG')} style={{borderRadius: '9px', height: '100%', width: '100%', backgroundImage: `url('/images/1c67d251-a14d-4b90-9706-50d847578571.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                    </Fade>
                </Col>
                <Col md={4} sm={6} xs={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Fade duration={1000}> */}
                    <Fade delay={900} direction='right'>
                        <div className='z_image_box2'>
                            <div className='z_image_box'>
                                <div className='z_image' onClick={()=>handleShow('/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG')} style={{borderRadius: '9px', height: '100%', width: '100%', backgroundImage: `url('/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                            </div>
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Col>
        <Col md={12} sm={12} style={{paddingTop: '20px'}}>
            <p>
            <b>DAY 1</b>:
Meet and greet at Zanzibar airport then picked up and drive to stone town  at tembo hotel beach overnight
            </p>
        </Col>
        <Col md={12} sm={12} style={{paddingTop: '20px'}}>
            <p>
            <b>DAY 2</b>:
Morning at 8:30 picked up from hotel to fumba village where you will meet your special boat special Guided safari blue tour: It is about visting three different sand banks and you stop in one of those for Sea food lunch where by later you do snorkeling and having chance of seeing dolphin. It is full day back at 17:30 fumba village and arrives at hotel around 17:30 back to tembo  hotel and overnight
            </p>
        </Col>
        {/* <Col md={12} sm={12} style={{paddingTop: '20px'}}>
            <video controls width='80%' >
                <source src='/images/5ac6282e-ad71-47eb-aa7a-64e7b241b537.MP4' type="video/mp4" />
            </video>
        </Col> */}
        <Col md={6} sm={12} style={{paddingTop: '20px'}}>
            <p>
            <b>DAY 3</b>:
Morning after breakfast pick up at 9:30 to spice farm where you can see different types of spice and how they grow up plus tasting the seasonal fruits and to experience the normal life of the local people in the village then will have lunch at spice farm. After meal will have town tour where you can have amazing history of the heart of the Zanzibar island as known as stone town, whereby you have chance to  see the slave market site, daily market, house of wonder, old fort, palace museum and narrow street then will have chance to do shopping ,this tour will be full day. Then overnight to tembo hotel 
            </p>
            <p>
            <b>DAY 5</b>:
Morning at 8:00am pick up from the hotel for dolphin tour where you will see and swim with dolphin then after the tour will drive then back to hotel at nungwi dream 
            </p>
            <p>
            <b>DAY 6</b>:
            Pick up from the hotel to Zanzibar airport for flight back to your country
            </p>
        </Col>
        <Col md={6} sm={12} style={{paddingTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <video controls muted width='100%' preload="metadata" style={{borderRadius: '9px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                <source src='/images/7d065012-3ae2-421e-b2af-4f7c1da53a27.MP4#t=0.5' type="video/mp4" />
            </video>
        </Col>
    </Row>
}

export default ZanzibarPackage