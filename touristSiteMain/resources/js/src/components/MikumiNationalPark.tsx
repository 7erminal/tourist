import React, { useEffect, useState, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    handleShow: (v: string)=>void
  }

const Mikumi: React.FC<Props> = ({handleShow}) => {
    const [height1, setHeight1] = useState()
    const [height2, setHeight2] = useState()

    const c1_height = useRef<any>(null)
    const c2_height = useRef<any>(null)

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(() => {
        setHeight1(c1_height.current?.clientHeight)
        setHeight2(c2_height.current?.clientHeight)
        
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
        <Row className='my-4'><h2>3DAYS AND 2NIGHTS  LODGE SAFARI FROM ZANZIBAR TO MIKUMI NATIONAL PARK</h2></Row>
        <Col md={{span: 6, order: 1}} sm={{span: 6, order: 1}} xs={{span: 12, order: 1}}>
            <div style={{borderRadius: '9px', height: height1, width: '100%', backgroundImage: `url('/images/ec5c1af7-eee1-4a58-86b5-f6f17cfd9efb.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}></div>
        </Col>
        <Col md={{span: 6, order: 2}} sm={{span: 6, order: 2}} xs={{span: 12, order: 2}} ref={c1_height}>
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
        </Col>
        <Col md={{span: 6, order: 3}} sm={{span: 6, order: 3}} xs={{span: 12, order: 4}} ref={c2_height}>
            <p className='mt-2'>
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
        <Col md={{span: 6, order: 4}} sm={{span: 6, order: 4}} xs={{span: 12, order: 3}}>
        <div style={{borderRadius: '9px', height: height2, width: '100%', backgroundImage: `url('/images/531222d8-de36-420a-a34e-d4be919afe68.JPG')`, backgroundPosition: 'center', backgroundSize: 'cover', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}></div>
        </Col>
    </Row>
}

export default Mikumi