import React, { useEffect, useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParallax } from 'react-scroll-parallax';
import { Fade } from "react-awesome-reveal"

type Props = {
    handleShow: (v: string)=>void
  }

const Information: React.FC<Props> = ({handleShow}) => {
    const [heightc, setHeightc] = useState()
    const [heightq, setHeightq] = useState()
    const c1_height = useRef<any>(null)
    const q_height = useRef<any>(null)

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        setHeightc(c1_height.current?.clientHeight)
        setHeightq(q_height.current?.clientHeight)
        
      },[windowSize.innerWidth])

    useEffect(() => {
    function handleWindowResize() {
        setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
    }, []);

    return <Row>
            <Row className='my-2' style={{textAlign: 'center'}}><h2>BEKA ZANZIBAR TOUR AND SAFARI</h2></Row>
            <Col md={12} sm={12}>
                <h4>ITENERARY</h4>
                <p>
                    DAY 01 #mnembaisland #dolphin & #snorkeling
                </p>
                <p>
                    <b>07:00</b>: Pick up from your hotel to Muyuni beach and boat ride to dolphin sports, enjoy swimming, watching and even touching them, then to mnemba island for snorkeling. Snorkeling just off the island owned by bilget, enjoy the moments then to the beach for a seafood BBQ lunch with drinks then transfer to hotel.
                </p>
                <p> 
                    EXCURSION PACKAGE 06 DAYS ON THE ISLAND OF ZANZIBAR: (Discover all the incredible places of Zanzibar with this package)
                </p>
            </Col>
            <Col md={5} sm={12} style={{height: heightq}}>
                <Row style={{paddingTop: '10px'}} className="mb-4">
                    <Col md={6} sm={6} xs={6}>
                        <Row>
                            <Col xs={12} sm={12} md={12} className='mt-1'>
                                <Fade triggerOnce direction="left" delay={200}><div onClick={()=>handleShow('/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG')} style={{borderRadius: '9px', height: heightq!/2, width: '100%', backgroundImage: `url('/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                </div></Fade>
                            </Col>
                            <Col xs={12} sm={12} md={12} className='mt-1'>
                                <Fade triggerOnce direction="left" delay={500}><div onClick={()=>handleShow('/images/dabbc626-a376-406c-acd2-13057199bf97.JPG')} style={{borderRadius: '9px', height: heightq!/2, width: '100%', backgroundImage: `url('/images/dabbc626-a376-406c-acd2-13057199bf97.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                </div></Fade>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                        <Row>
                            <Col xs={12} sm={12} md={12} className='mt-1'>
                                <Fade triggerOnce direction="right" delay={200}><div onClick={()=>handleShow('/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG')} style={{borderRadius: '9px', height: heightq!/2, width: '100%', backgroundImage: `url('/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                </div></Fade>
                            </Col>
                            <Col xs={12} sm={12} md={12} className='mt-1'>
                                <Fade triggerOnce direction="right" delay={500}><div onClick={()=>handleShow('/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG')} style={{borderRadius: '9px', height: heightq!/2, width: '100%', backgroundImage: `url('/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                </div></Fade>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            <Col className="zanzibar-text" md={7} sm={12} ref={q_height}>
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
            </Col>
            <Col md={12} sm={12} style={{marginTop: '30px'}}>
                <p>
                    DAY 04 #tutlesanctuary, #Swim with #turtles in the natural lagoon, #fukuchanicaves tour + #kendwaBeach visit
                </p>
                <p>
                    <b>9:00</b>: pick up from your hotel and transfer to Fukuchani, enjoy swimming with the tutles in the natural lagoon, feed them, touch them, etc.  then to the caves to swim in the natural caves with fresh water with a story then to kendwa beach the best beach with lots of sports you can do jet ski horse riding etc what  you prefer to do is available.
                </p>
            </Col>
            <Col md={6} sm={12} xs={12} ref={c1_height}>
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
                    Pick up from your hotel to mtende beach to relax on the hidden beach, enjoy the scenery with beach view, hang out at usumba restaurant for lunch then kae fank beach for view of the  sunset with lots of entertainment, after transfer to your hotel.
                </p>
            </Col>
            <Col md={6} sm={12} xs={12}>
                <Row>
                    <Col xs={12} sm={12} md={12} className='mt-1'>
                        <Fade triggerOnce direction="right" delay={100}><div onClick={()=>handleShow('/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG')} style={{borderRadius: '9px', height: heightc!*0.45, width: '100%', backgroundImage: `url('/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                        </div></Fade>
                    </Col>
                    <Col xs={12} sm={12} md={12} className='mt-1'>
                        <Fade triggerOnce direction="right" delay={500}><div onClick={()=>handleShow('/images/dabbc626-a376-406c-acd2-13057199bf97.JPG')} style={{borderRadius: '9px', height: heightc!*0.45, width: '100%', backgroundImage: `url('/images/dabbc626-a376-406c-acd2-13057199bf97.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                        </div></Fade>
                    </Col> 
                </Row>
            </Col>
        </Row>
}

export default Information