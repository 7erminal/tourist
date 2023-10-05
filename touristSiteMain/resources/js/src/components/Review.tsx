import React from "react";
import './../styles/main.sass'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

type Props = {
    reviewBy: string
    review: string
}

const Review: React.FC<Props> = ({review, reviewBy}) => {
    return <Row>
        <Container>
            <Row style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Col style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="avatar" style={{backgroundImage: "url('/images/profile.png')", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        {/* <img src="/images/profile.png" /> */}
                    </div>
                </Col>
            </Row>
            <Row className="mt-2" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <Col style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span><h6>{reviewBy}</h6></span>
                </Col>
            </Row>
            <Row className="my-2"><div className="review-text">{review}</div></Row>
        </Container>
    </Row>
}

export default Review