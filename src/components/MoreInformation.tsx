import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParallax } from 'react-scroll-parallax';

const MoreInformation: React.FC = () => {

    return <Row style={{ paddingTop: '40px'}}>
                <Col md={7} sm={11}>
                    <h2>SAFARI TO SERENGETI AND NGORONGORO</h2>
                    <p>
                        <b>Day 1</b>:Pick up from arusha Airport  then drive to Game Drives in Serengeti National Park
Early Morning leaving from Arusha to Serengeti. The name Serengeti originates from the Masai word Siringitu and means “endless plains”. You will see why the Maasai gave this region this name as the grassland savannah stretches to the horizon in the South and is only interrupted by the so-called kopjes. These kopjes are bizarre rock formations formed by the weathering of granite outcrops. The plains are the perfect hunting grounds for leopards and other big cats; you will have a good chance to view these magnificent creatures in their natural habitat through the open roof of the vehicle. In the afternoon, you will reach the destination for the day, the Seronera Valley in the central Serengeti area. You will camp for the night and stay in “safari styled” tents enjoying a good African meal in the middle of the African bush. 
                    <br/>Dinner & Overnight at Seronera campsite 
                    <br/>Dinner & Overnight at Kon tiki Tented Camp/ Similar 
                    </p>
                    <p>
                        <b>Day 2</b>: will do full day Serengeti  game drive  and overnight at KON TIKI TENTED CAMP/SIMILAR
                    </p>
                    <p>
                    <b>Day 3</b>: Game Drive in Serengeti to Ngorongoro
Enjoy another day of wildlife viewing from a second location deep in the Serengeti. Home to literally hundreds of thousands of hoofed animals, the Serengeti is a pristine and unique sanctuary that will give you a glimpse into “the world as it was in the beginning.” Relish the vastness of the Serengeti, “the land that flows on forever,” along with some of the best animal viewing that Africa has to offer. After lunch at a picnic site, you will drive in the direction of the Ngorongoro Crater. As soon as you have reached the edge of the crater, the caldera opens up before you and you will have a remarkable view of this impressive natural wonder. 
Dinner & overnight at OCTAGON SAFARI LODGE/SIMILAR
Dinner & overnight at OCTAGON SAFARI LODGE/SIMILAR
                    </p>
                    <p>
                    <b>Day 4</b>: Game Drives in Ngorongoro Crater then back to Arusha City
Today, you will visit Ngorongoro Crater, the main feature of which is a large, unbroken, unfolded volcanic caldera. The crater, which formed when a giant volcano exploded and collapsed on itself some two to three million years ago, is mostly open grassland with two small wooded areas dominated by Acacia xanthophloea.
Game drives through the Ngorongoro Crater begin early in the morning in safari vehicles with pop-up roofs. The descent into the crater is one of scenic beauty, as you make your way through lush forests, home to numerous elephants and buffaloes. �As you reach the inside of the crater, marveling at the incredible landscape around you, your guide will take you through the grassy crater floor, the unbelievable fever tree forest, the banks of Lake Magadi and the surrounding marshes. Lunch is served picnic style, surrounded by the natural wonders around you as well as the exceptional wildlife, roaming freely, with which you share this extraordinary paradise. Afternoon drive back to Arusha where you will be dropped at your Beautifully Hotel, Savannah House. End of our Tour, 
Then drive to airport  back to your country 
                    </p>
                </Col>
                <Col md={5} sm={12}>
                    <video controls autoPlay muted width='340px' >
                        <source src='/images/301c2dc2-38c3-4c75-ac8a-340be73ca363.MP4' type="video/mp4" />
                    </video>
                </Col>
            </Row>
}

export default MoreInformation