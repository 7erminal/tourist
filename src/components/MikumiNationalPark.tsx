import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Mikumi: React.FC = () => {
    return <Row>
        <Col md={5} sm={11}>
            <Row>
                <Col>
                    <div className='bigger-rounder-image'>
                        <div className='rounded-image'>
                            <video autoPlay muted loop width='200%' >
                                <source src='/images/1d5832cf-d32c-44d5-9980-6d8977ac98e5.MP4' type="video/mp4" />
                            </video>
                        </div>
                        <div className="circleIcon2">
                            <img src="/images/531222d8-de36-420a-a34e-d4be919afe68.JPG" className="centerDiv" />
                        </div>
                        <div className="circleIcon2">
                            <img src="/images/2a88dbff-af26-4c12-8798-5e70b5801403.JPG" className="centerDiv" />
                        </div>
                        <div className="circleIcon2">
                            <img src="/images/027b94e1-bc50-46c5-aab2-c174c8104c2e.JPG" className="centerDiv" />
                        </div>
                        <div className="circleIcon2">
                            <img src="/images/531222d8-de36-420a-a34e-d4be919afe68.JPG" className="centerDiv" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
        <Col md={7} sm={12}>
            <h2>3DAYS AND 2NIGHTS  LODGE SAFARI FROM ZANZIBAR TO MIKUMI NATIONAL PARK</h2>
            <p>
                <b>Day 1</b>: ( From Zanzibar to Massai Village)
Pick up at your hotel and drive to Stone town for your Boat to Dar es salaam and drive to Mikumi National park. On the way will stop for lunch and After lunch
Continue with drive to Mikumi National park game enroute to your  lodge and you will check in the Lodge and have a rest of 5-10minutes then start going to Maasai village for culture activities,Massai Dance etc .
In the evening sunset view, you take dinner and overnight at your Lodge.
            </p>
            <p>
                <b>Day 2</b>: (Full Day Game Drive)
06:00am pick up and start early morning Game drive.at 9:30am we stop for breakfast and
then proceed with  game drive up to 1:30pm or 2:00pm have a launch inside the Park restaurant then proceed with Game drive until in evening after sunset , then back to the  lodge for dinner and over night at your Lodge.
            </p>
            <p>
                <b>Day 3</b>: morning game enroute and Back to Zanzibar.
Pick up Around 7:30 after breakfast and we will start drive for game enroute , there you will see diffent animals near to the roads on the park. around 9:30 we Will Start Driving back to Dar es salaam for boat to Zanzibar. We will Stop At Cate Hotel or Msolwa Restaurant For Lunch then Continue with a drive Until Ferry then Take Boat to back Zanzibar. After You drop off from the boat We will transfer you to Your Hotel And Will be The End Of Our Service
            </p>
            <p>
                <b>INCLUDES:</b>
                <ul>
                    <li>Accomodation</li>
                    <li>Ground transport</li>
                    <li>All meals</li>
                    <li>Safari jeep</li>
                    <li>Intrance fees</li>
                    <li>Boat tickets</li>
                </ul>
            </p>
        </Col>
    </Row>
}

export default Mikumi