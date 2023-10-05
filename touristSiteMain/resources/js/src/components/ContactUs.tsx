import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import '../styles/style.css'
import Api from '../resources/apis';
import { Dna } from  'react-loader-spinner'

const ContactUs: React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact_number, setContact_number] = useState('')
    const [message, setMessage] = useState('')
    const [placeOfInterest, setPlaceOfInterest] = useState('')
    const [loading, setLoading] = useState(false)
    const [successStatus, setSuccessStatus] = useState('null')
    const [systemEmail, setSystemEmail] = useState('')
    const [systemNumber, setSystemNumber] = useState('')
    const [systemAddress, setSystemAddress] = useState('')
    const [systemDetails, setSystemDetails] = useState<any>([])
    const [token, setToken] = useState('')
 
    const sendRequest = () => {

        setLoading(true)

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            name: name, 
            email: email,
            number: contact_number,
            message: message,
            placeOfInterest: placeOfInterest
        }

        new Api().sendRequest(params, token).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                setSuccessStatus('success')
                setName('')
                setContact_number('')
                setEmail('')
                setMessage('')
               console.log("Successfully added request")
            }

        }).catch(error => {
            setLoading(false)
            setSuccessStatus('failed')
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

		switch(e.target.getAttribute('name')){
			case 'name':
				setName(e.target.value)
				break;
			case 'email':
				setEmail(e.target.value)
				break;
            case "contact_number":
                setContact_number(e.target.value)
                break;
            case "message":
                setMessage(e.target.value)
                break;
			default:
				return null;
		}

        // email != '' ? setShowError(false) : mobileNumber != '' ? setShowError(false) : setShowError(true)
    }

    const selectInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value)

		switch(e.target.getAttribute('name')){
			case "place_of_interest":
				setPlaceOfInterest(e.target.value)
				break;
			default:
				return null
		}

		console.log(e.target.getAttribute('name'))
    }

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
        getConfigurations()
        // getToken()
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
                        setEmail(r.config_value)
                        break;
                }
               })
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    return <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">Contact Us</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="wrapper">
                        <div className="row mb-5">
                            <div className="col-md-3">
                                <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-map-marker"></span>
                            </div>
                            <div className="text">
                            <p><span>Address:</span> { systemAddress != '' ? systemAddress : 'Tanzania' }</p>
                        </div>
                    </div>
                            </div>
                            <div className="col-md-3">
                                <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-phone"></span>
                            </div>
                            <div className="text">
                            <p><span>Phone:</span> <a href={"tel://"+systemNumber}>{ systemNumber != '' ? systemNumber : '+25578028485' }</a></p>
                        </div>
                    </div>
                            </div>
                            <div className="col-md-3">
                                <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="text">
                            <p><span>Email:</span> <a href={"mailto:"+systemEmail}>{ systemEmail != '' ? systemEmail : 'bekabakari900@gmail.com' }</a></p>
                        </div>
                    </div>
                            </div>
                            <div className="col-md-3">
                                <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-globe"></span>
                            </div>
                            <div className="text">
                            <p><span>Website</span> <a href="https://www.bekaadventure.com">https://www.bekaadventure.com</a></p>
                        </div>
                    </div>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-md-7">
                                <div className="contact-wrap w-100 p-md-5 p-4">
                                    <h3 className="mb-4">Contact Us</h3>
                                    <div id="form-message-warning" className="mb-4"></div> 
                            {
                                successStatus == 'success' ? <div id="form-message-success" className="mb-4">
                            Your message was sent, thank you!
                            </div> : successStatus == 'failed' ? <div id="form-message-failed" className="mb-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Something went wrong. Please wait a few seconds and try again.</div> : <></>
                            }
                            { loading == true ? 
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}><Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                            /></div> : ''
                            }
                                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="name">Full Name</label>
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                                                </div>
                                            </div>
                                            <div className="col-md-6"> 
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">Email Address</label>
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">Contact Number</label>
                                                    <input type="text" className="form-control" name="contact_number" id="contact-number" value={contact_number} placeholder="Contact Number" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">Place of Interest</label>
                                                    <Form.Select className="form-control" aria-label="Default select example" name="place_of_interest" onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>selectInputChange(e)}>
                                                        <option value="0">Select Place of Interest</option>
                                                        <option value="0">GENERAL</option>
                                                        <option value="1">BEKA ZANZIBAR TOUR AND SAFARI</option>
                                                        <option value="2">SAFARI TO SERENGETI AND NGORONGORO</option>
                                                        <option value="3">ZANZIBAR PACKAGE</option>
                                                        <option value="4">MIKUMI NATIONAL PARK</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="#">Message</label>
                                                    <Form.Control name="message" as="textarea" rows={3} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} value={message} />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="button" value="Send Message" className="btn btn-primary" onClick={sendRequest} />
                                                    <div className="submitting"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-stretch info-wrap">
                                <div className="w-100 p-5 img" style={{backgroundImage: `url('/images/img.jpg')`}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
}

export default ContactUs