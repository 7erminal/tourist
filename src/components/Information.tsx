import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParallax } from 'react-scroll-parallax';

const Information: React.FC = () => {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 360],
      });

    return <Row>
            <Row className='my-2' style={{textAlign: 'center'}}><h2>BEKA ZANZIBAR TOUR AND SAFARI</h2></Row>
            <Col md={5} sm={12}>
                <Row className='spin-position my-4' >
                    <Col>
                        <div ref={parallax.ref} className="spinner">
                            <div className="circleIcon">
                                <img src="/images/2a88dbff-af26-4c12-8798-5e70b5801403.JPG" className="centerDiv" />
                            </div>
                            <div className="circleIcon">
                                <img src="/images/152cf2c2-b5fa-4cdd-badf-995578582c13.JPG" className="centerDiv" />
                            </div>
                            <div className="circleIcon">
                                <img src="/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG" className="centerDiv" />
                            </div>
                            <div className="circleIcon">
                                <img src="/images/ec5c1af7-eee1-4a58-86b5-f6f17cfd9efb.JPG" className="centerDiv" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingTop: '130px'}} className="mb-4">
                    <Col md={6} sm={6} xs={6} className='mt-1'>
                        <img src="/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG" width='100%' className="info-pics" />
                    </Col>
                    <Col md={6} sm={6} xs={6} className='mt-1'>
                        <img src="/images/dabbc626-a376-406c-acd2-13057199bf97.JPG" width='100%' className="info-pics" />
                    </Col>
                    <Col md={6} sm={6} xs={6} className='mt-1'>
                        <img src="/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG" width='100%' className="info-pics" />
                    </Col>
                    <Col md={6} sm={6} xs={6} className='mt-1'>
                        <img src="/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG" width='100%' className="info-pics" />
                    </Col>
                </Row>
            </Col>
            <Col className="zanzibar-text" md={7} sm={12}>
                <p> 
                    EXCURSION PACKAGE 06 DAYS ON THE ISLAND OF ZANZIBAR: (Discover all the incredible places of Zanzibar with this package)
                </p>
                <h4>ITENERARY</h4>
                <p>
                    DAY 01 #mnembaisland #dolphin & #snorkeling
                </p>
                <p>
                    <b>07:00</b>: Pick up from your hotel to Muyuni beach and boat ride to dolphin sports, enjoy swimming, watching and even touching them, then to mnemba island for snorkeling. Snorkeling just off the island owned by bilget, enjoy the moments then to the beach for a seafood BBQ lunch with drinks then transfer to hotel.
                </p>
                <p>
                    DAY 02 #JozaniForest Tour and the #rockrestaurant trip
                </p>
                <p>
                    <b>07:30</b>: Pick up from your hotel and transfer to Jozani forest, the only national park in Zanzibar with flora and fauna, enjoy the moments with friendly monkeys then to the rock restaurant for the meal or just to take pictures (if you have the meal, you must book before) then to kae beach for the view of the sunset with refreshments and entertainment on board then after, transfer to the hotel
                </p>
                <p>
                    DAY 03 #Spicetour, $stonetown tour and #prisonisland tour
                </p>
                <p>
                    <b>8:00</b>: pick up from your hotel and transfer directly to Spice Farm for Spice tour then Stone Town for boat ride to Prison Island then finish the city tour in Stone Town these are  historical tours that you will know all about Zanzibar, its people, food, culture etc.
                </p>
                <p>
                    DAY 04 #tutlesanctuary, #Swim with #turtles in the natural lagoon, #fukuchanicaves tour + #kendwaBeach visit
                </p>
                <p>
                    <b>9:00</b>: pick up from your hotel and transfer to Fukuchani, enjoy swimming with the tutles in the natural lagoon, feed them, touch them, etc.  then to the caves to swim in the natural caves with fresh water with a story then to kendwa beach the best beach with lots of sports you can do jet ski horse riding etc what  you prefer to do is available.
                </p>
                <p>
                    DAY 05 #Safariblueseaadventure
                </p>
                <p>
                    <b>8:00</b>: pick up from your hotel and transfer to Kizimkazi beach, boat ride to the Safariblue, this is a full day adventure which includes snorkeling, sand bathing and BBQ seafood lunch at the  center of the ocean (Sandbank) with fruits and drinks, then after the return to the beach for a transfer to the hotel.
                </p>
                <p>
                    DAY 06 (#hidden beach,#usumba rock & #kaebeachtrip for sunset)
                </p>
                <p>
                    Pick up from your hotel to mtende beach to relax on the hidden beach, enjoy the scenery with beach view, hang out at usumba restaurant for lunch then kae fank beacg for view of the  sunset with lots of entertainment, after transfer to your hotel.
                </p>
            </Col>
        </Row>
}

export default Information