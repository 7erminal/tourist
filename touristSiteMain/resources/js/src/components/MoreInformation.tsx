import React, { useEffect, useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from "react-awesome-reveal"

type Props = {
    handleShow: (v: string)=>void
  }

const MoreInformation: React.FC<Props> = ({handleShow}) => {
    const [heightq, setHeightq] = useState()
    const [mainImgLoadedState, setMainImgLoadedState] = useState(false)
    const c1_height = useRef<any>(null)

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        setHeightq(c1_height.current?.clientHeight)
      },[mainImgLoadedState, windowSize.innerWidth])

    useEffect(() => {
    function handleWindowResize() {
        setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    };
    }, []);

    return <Row style={{ paddingTop: '40px'}}>
                <Row className='my-4' style={{textAlign: 'center'}}><h2>SAFARI TO SERENGETI AND NGORONGORO</h2></Row>
                <Col md={12} className="my-4">
                    <Row>
                        <Col md={4} sm={4} xs={12} className="mb-3">
                            <img onClick={()=>handleShow('/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG')} src="/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG" ref={c1_height} width="100%" style={{borderRadius: "9px"}} onLoad={()=>setMainImgLoadedState(!mainImgLoadedState)} />
                        </Col>
                        <Col md={8} sm={8} xs={12}>
                            <Row style={{height: heightq!/2}} className="mb-2">
                                <Col md={12} sm={12} xs={12}>
                                    <div onClick={()=>handleShow('/images/32b6dfd2-e4aa-49fc-9809-52926e806ac4.JPG')} style={{borderRadius: '9px', height: '100%', width: '100%', backgroundImage: `url('/images/32b6dfd2-e4aa-49fc-9809-52926e806ac4.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{height: heightq!/2}} className="my-2">
                                <Col md={6} sm={6} xs={6} className="mb-4">
                                    <div onClick={()=>handleShow('/images/0bbea570-4b0c-42ad-9e5c-727880053536.JPG')} style={{borderRadius: '9px', height: '120%', width: '98%', backgroundImage: `url('/images/0bbea570-4b0c-42ad-9e5c-727880053536.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                    </div>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    <div onClick={()=>handleShow('/images/1c67d251-a14d-4b90-9706-50d847578571.JPG')} style={{borderRadius: '9px', height: '95%', width: '98%', backgroundImage: `url('/images/1c67d251-a14d-4b90-9706-50d847578571.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className='mt-2' md={{span: 7}} sm={{span: 12}} xs={{span: 12}}>
                    <p>
                        <b>Day 1</b>:Pick up from arusha Airport  then drive to Game Drives in Serengeti National Park
Early Morning leaving from Arusha to Serengeti. The name Serengeti originates from the Masai word Siringitu and means “endless plains”. You will see why the Maasai gave this region this name as the grassland savannah stretches to the horizon in the South and is only interrupted by the so-called kopjes. These kopjes are bizarre rock formations formed by the weathering of granite outcrops. The plains are the perfect hunting grounds for leopards and other big cats; you will have a good chance to view these magnificent creatures in their natural habitat through the open roof of the vehicle. In the afternoon, you will reach the destination for the day, the Seronera Valley in the central Serengeti area. You will camp for the night and stay in “safari styled” tents enjoying a good African meal in the middle of the African bush. 
                    <br/>Dinner & Overnight at Seronera campsite 
                    <br/>Dinner & Overnight at Kon tiki Tented Camp/ Similar 
                    </p>
                    <p>
                        <b>Day 2</b>: will do full day Serengeti  game drive  and overnight at KON TIKI TENTED CAMP/SIMILAR
                    </p>
                </Col>
                <Col md={{span: 5}} sm={{span: 12}} xs={{span: 12}}>
                    <Fade triggerOnce duration={1000} delay={100}><video controls muted width='98%' style={{borderRadius: '9px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}} >
                        <source src='/images/301c2dc2-38c3-4c75-ac8a-340be73ca363.MP4' type="video/mp4" />
                    </video></Fade>
                </Col>
                <Col md={12} sm={12} xs={12}>
                <p>
                    <b>Day 3</b>: Game Drive in Serengeti to Ngorongoro
Enjoy another day of wildlife viewing from a second location deep in the Serengeti. Home to literally hundreds of thousands of hoofed animals, the Serengeti is a pristine and unique sanctuary that will give you a glimpse into “the world as it was in the beginning.” Relish the vastness of the Serengeti, “the land that flows on forever,” along with some of the best animal viewing that Africa has to offer. After lunch at a picnic site, you will drive in the direction of the Ngorongoro Crater. As soon as you have reached the edge of the crater, the caldera opens up before you and you will have a remarkable view of this impressive natural wonder. 
Dinner & overnight at OCTAGON SAFARI LODGE/SIMILAR
                    </p>
                    <p>
                    <b>Day 4</b>: Game Drives in Ngorongoro Crater then back to Arusha City
Today, you will visit Ngorongoro Crater, the main feature of which is a large, unbroken, unfolded volcanic caldera. The crater, which formed when a giant volcano exploded and collapsed on itself some two to three million years ago, is mostly open grassland with two small wooded areas dominated by Acacia xanthophloea.
Game drives through the Ngorongoro Crater begin early in the morning in safari vehicles with pop-up roofs. The descent into the crater is one of scenic beauty, as you make your way through lush forests, home to numerous elephants and buffaloes. �As you reach the inside of the crater, marveling at the incredible landscape around you, your guide will take you through the grassy crater floor, the unbelievable fever tree forest, the banks of Lake Magadi and the surrounding marshes. Lunch is served picnic style, surrounded by the natural wonders around you as well as the exceptional wildlife, roaming freely, with which you share this extraordinary paradise. Afternoon drive back to Arusha where you will be dropped at your Beautifully Hotel, Savannah House. End of our Tour, 
Then drive to airport  back to your country 
                    </p>
                </Col>
            </Row>
}

export default MoreInformation