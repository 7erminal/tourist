import React, { useState,useRef, useEffect } from 'react'
import LandingHeader from '../components/LandingHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavBar from '../components/NavBar';
import Information from '../components/Information';
import MoreInformation from '../components/MoreInformation';
import Footer from '../components/Footer';
import ZanzibarPackage from '../components/ZanzibarPackage';
import Mikumi from '../components/MikumiNationalPark';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import ContactUs from '../components/ContactUs';
import SliderImages from '../components/SliderImages';


const HomePage: React.FC = () => {
    const [show, setShow] = useState(false);
    const [modalImage, setModalImage] = useState('')

    const handleClose = () => {
        setShow(false)
      };
    const handleShow = (src_: string) => {
        setShow(true)
        setModalImage(src_)
    };

    useEffect(()=>{
        scrollToView("")
    })

    const bekaZanzibarRefTag  = useRef<null | HTMLDivElement>(null)
    const serengetiRefTag  = useRef<null | HTMLDivElement>(null)
    const zanzibarRefTag  = useRef<null | HTMLDivElement>(null)
    const mikumiRefTag  = useRef<null | HTMLDivElement>(null)

    const scrollToView = (type_: string) => {
        if(type_=="bekaZanzibar"){
            bekaZanzibarRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="serengeti"){
            serengetiRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="zanzibar"){
            zanzibarRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="mikumi"){
            mikumiRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    const navRefTag  = useRef<null | HTMLDivElement>(null)

    // if(el_autohide){
    //     var last_scroll_top = 0;
    //     window.addEventListener('scroll', function() {
    //           let scroll_top = window.scrollY;
    //          if(scroll_top < last_scroll_top) {
    //               el_autohide.classList.remove('scrolled-down');
    //               el_autohide.classList.add('scrolled-up');
    //           }
    //           else {
    //               el_autohide.classList.remove('scrolled-up');
    //               el_autohide.classList.add('scrolled-down');
    //           }
    //           last_scroll_top = scroll_top;
    //     }); 
    //     // window.addEventListener
    //   }
    

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <CustomNavBar />
                <SliderImages />
                <div className="fullwidth-block features-section">
					<div className="container">
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="feature left-icon" onClick={()=>scrollToView('bekaZanzibar')}>
									<i className="icon-ticket"></i>
									<h3 className="feature-title">BEKA ADVENTURE</h3>
									<p>Muyuni beach, mnemba island, Jozani Forest, kae beach, Fukuchani, Kizimkazi beach, mtende beach, kae fank beacg</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="feature left-icon" onClick={()=>scrollToView('serengeti')}>
									<i className="icon-plane"></i>
									<h3 className="feature-title">SAFARI TO SERENGETI AND NGORONGORO</h3>
									<p>Game Drives in Serengeti National, Serengeti, leopards and other big cats, Seronera Valley in the central Serengeti area, unfolded volcanic caldera</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="feature left-icon" onClick={()=>scrollToView('zanzibar')}>
									<i className="icon-jetski"></i>
									<h3 className="feature-title">ZANZIBAR PACKAGE</h3>
									<p>Guided safari blue tour, spice farm, house of wonder, old fort, palace museum</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<div className="feature left-icon" onClick={()=>scrollToView('mikumi')}>
									<i className="icon-shuttelcock"></i>
									<h3 className="feature-title">MIKUMI NATIONAL PARK</h3>
									<p>Massai Village, Dar es salaam</p>
								</div>
							</div>
						</div>
					</div>
				</div>
            <Container fluid>
                {/* <Navbar className="homeNav" expand="lg" ref={navRefTag}>
                    <Row className="mx-auto" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px'}}>  
                        <Col md={8} className="mx-auto" style={{textAlign: 'center', color: '#AEB6BF'}}>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('bekaZanzibar')}>BEKA ADVENTURE</span>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('serengeti')}>SAFARI TO SERENGETI AND NGORONGORO</span>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('zanzibar')}>ZANZIBAR PACKAGE</span>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('mikumi')}>MIKUMI NATIONAL PARK</span>
                        </Col>   
                    </Row>
                </Navbar> */}
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px'}}>
                    <Col md={8} sm={12}>
                        <LandingHeader handleShow={handleShow} />
                    </Col>
                </Row>
            </Container>
            <div className="fullwidth-block offers-section" data-bg-color="#f1f1f1">
					<div className="container">
						<h2 className="section-title">The newest holiday offers</h2>
						<div className="row">
							<div className="col-md-3 col-sm-6 col-xs-12">
								<article className="offer">
									<figure className="featured-image"><img src="/images/ec5c1af7-eee1-4a58-86b5-f6f17cfd9efb.JPG" alt="" /></figure>
									<h2 className="entry-title"><a href="">Massai Village</a></h2>
									<p>Visit the Massai village and interact with the locals</p>
									<a href="#" className="button" onClick={()=>scrollToView('mikumi')}>See details</a>
								</article>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<article className="offer" data-wow-delay=".2s">
									<figure className="featured-image"><img src="/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG" alt="" /></figure>
									<h2 className="entry-title"><a href="">Beach experience</a></h2>
									<p>Enjoy our beautiful beaches with great views</p>
									<a href="#" className="button">See details</a>
								</article>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<article className="offer" data-wow-delay=".4s">
									<figure className="featured-image"><img src="/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG" alt="" /></figure>
									<h2 className="entry-title"><a href="">Game reserves</a></h2>
									<p>Visit game reserves around the country to have a view of all the different animals.</p>
									<a href="#" className="button">See details</a>
								</article>
							</div>
							<div className="col-md-3 col-sm-6 col-xs-12">
								<article className="offer" data-wow-delay=".6s">
									<figure className="featured-image"><img src="/images/dabbc626-a376-406c-acd2-13057199bf97.JPG" alt="" /></figure>
									<h2 className="entry-title"><a href="">Unforgettable experience</a></h2>
									<p>We promise you an unforgettable experience.</p>
									<a href="#" className="button">See details</a>
								</article>
							</div>
						</div>
					</div>
				</div>
            <Container fluid>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px', paddingBottom: '70px'}}>
                    <div ref={bekaZanzibarRefTag}></div>
                    <Col md={8} sm={12}>
                        <Information handleShow={handleShow} />
                    </Col>
                </Row>
                {/* <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row> */}
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px', backgroundColor: '#f1f1f1'}}>
                    <div ref={serengetiRefTag}></div>
                    <Col md={8} sm={12} className="my-4">
                        <MoreInformation handleShow={handleShow} />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#f1f1f1'}}>
                    <Col md={12} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <video controls width='100%' style={{borderRadius: '8px'}} preload="metadata" >
                            <source src='/images/landingVIdeo.MP4#t=0.5' type="video/mp4" />
                        </video>
                    </Col>
                </Row>
                <Row className="my-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <div ref={zanzibarRefTag}></div>
                    <Col md={8} sm={12} className="my-4">
                        <ZanzibarPackage handleShow={handleShow} />
                    </Col>
                </Row>
                {/* <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row> */}
                <Row className="my-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px', backgroundColor: '#f1f1f1'}}>
                    <div ref={mikumiRefTag}></div>
                    <Col md={8} sm={12} className="my-4">
                        <Mikumi handleShow={handleShow} />
                    </Col>
                </Row>
                <ContactUs/>
            </Container>
            <Footer scrollToView={scrollToView}/>
            <Modal show={show} onHide={handleClose} centered>
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
              
                    <img src={modalImage} />
            </Modal>
        </div>
    )
}

export default HomePage
