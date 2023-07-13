import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    scrollToView: (v: string)=>void
  }

const Footer: React.FC<Props> = ({scrollToView}) => {
    // return <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '50px', paddingBottom: '60px'}}>
    //     <hr/>
    //     <div classNameName='footer'>
    //         <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px'}}>Copyright 2023</Row>
    //     </div>
    // </Row>
    return <footer className="site-footer">
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="widget">
                        <h3 className="widget-title">About us</h3>
                        <p>We are a travel and tour company focused on satisfying tourists who have come to have a great experience. We provide options that give our customers the experience they are looking for.</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="widget">
                        <h3 className="widget-title">Helpful Links</h3>
                        <ul className="list-arrow">
                            <li><a href="#" onClick={()=>scrollToView('bekaZanzibar')}>Beka Adventure</a></li>
                            <li><a href="#" onClick={()=>scrollToView('serengeti')}>Safari to Serengeti and Ngorongoro</a></li>
                            <li><a href="#" onClick={()=>scrollToView('zanzibar')}>Zanzibar Package</a></li>
                            <li><a href="#" onClick={()=>scrollToView('mikumi')}>Mikumi National Park</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="widget">
                        <h3 className="widget-title">Helpful Links</h3>
                        <ul className="list-arrow">
                            <li><a href="#" onClick={()=>scrollToView('bekaZanzibar')}>Beka Adventure</a></li>
                            <li><a href="#" onClick={()=>scrollToView('serengeti')}>Safari to Serengeti and Ngorongoro</a></li>
                            <li><a href="#" onClick={()=>scrollToView('zanzibar')}>Zanzibar Package</a></li>
                            <li><a href="#" onClick={()=>scrollToView('mikumi')}>Mikumi National Park</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="widget widget-customer-info">
                        <h3 className="widget-title">Customer Service</h3>
                        <img src="/images/dummy/footer-customer-service.jpg" alt="" className="pull-left" />
                        <div className="cs-info">
                            <p>If you have any complaints or concerns please feel free to contact management.</p>
                            <p>+25578028485 <br/> <a href="mailto:bekabakari900@gmail.com">bekabakari900@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="branding pull-left">
                <img src="/images/images/logo-footer.png" alt="Company Name" className="logo" />
                <h1 className="site-title"><a href="/">Beka Adventure</a></h1>
                <small className="site-description">Tour Tanzania</small>
            </div>

            <div className="contact-links pull-right">
                <a href="https://goo.gl/maps/oQKxg"><i className="fa fa-map-marker"></i> Tanzania Street, Tanzania</a>
                <a href="tel:+25578028485"><i className="fa fa-phone"></i> +25578028485</a>
                <a href="mailto:bekabakari900@gmail.com"><i className="fa fa-envelope"></i> bekabakari900@gmail.com</a>
            </div>
        </div>
    </div>
    <div className="colophon">
        <div className="container">
            <p className="copy">Copyright 2023 Beka Adventure, All right reserved.</p>
        </div>
    </div>
</footer>
}

export default Footer