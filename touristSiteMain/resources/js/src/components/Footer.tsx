import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from '../resources/apis';

type Props = {
    scrollToView: (v: string)=>void
  }

const Footer: React.FC<Props> = ({scrollToView}) => {
    const [systemEmail, setSystemEmail] = useState('')
    const [systemNumber, setSystemNumber] = useState('')
    const [systemAddress, setSystemAddress] = useState('')
    const [systemDetails, setSystemDetails] = useState<any>([])
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(false)

    const getToken = async () => {
        const token_ = await localStorage.getItem("token");

        console.log("Initial token content is "+token_) 

        if(token_=='' || token_ == undefined){
            // navigate("/login");
            console.log("Token empty")
            window.location.href = "/login";
        }

        console.log("Was able to get token")
        console.log(token_)

        setToken(token_ ?? "")
    }

    useEffect(()=>{
        getToken()
    },[])

    useEffect(()=>{
        getConfigurations()
    },[token])

    const getConfigurations = () => {
        console.log("Contact us div configurations call")
        new Api().getConfigurations(token).then(response=>{
            console.log("Configurations data is ")
            console.log(response.data)
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                setSystemDetails(response.data)
                setSystemAddress('')
                setSystemNumber('')
                setSystemEmail('')
               console.log("Successfully updated")

               response.data.data.map((r: any)=>{
                switch(r.config_name){
                    case 'email':
                        setSystemEmail(r.config_value)
                        break;
                    case 'address':
                        setSystemAddress(r.config_value)
                        break;
                    case 'number':
                        setSystemNumber(r.config_value)
                        break;
                    default:
                        setSystemNumber(r.config_value)
                        break;
                }
               })
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

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
                            <p>{systemNumber} <br/> <a href="mailto:">{systemEmail}</a></p>
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
                <a href="#"><i className="fa fa-map-marker"></i> {systemAddress}</a>
                <a href={"tel:"+systemNumber}><i className="fa fa-phone"></i> {systemNumber}</a>
                <a href={"mailto:"+systemEmail}><i className="fa fa-envelope"></i> {systemEmail}</a>
            </div>
        </div>
    </div>
    <div className="colophon">
        <div className="container">
            <p className="copy">Copyright {new Date().getFullYear()} Beka Adventure, All right reserved.</p>
        </div>
    </div>
</footer>
}

export default Footer