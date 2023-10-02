import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import '../styles/style.css'
import Api from '../resources/apis';
import { Dna } from  'react-loader-spinner'

const ContactDetails: React.FC = () => {
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [contact_number, setContact_number] = useState('')
    const [loading, setLoading] = useState(false)
    const [successStatus, setSuccessStatus] = useState('null')
    const [editMode, setEditMode] = useState(false)
    const [systemDetails, setSystemDetails] = useState([])
    const [token, setToken] = useState('')

    const saveConfiguration = () => {

        setLoading(true)
        setEditMode(false)

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            address: address, 
            email: email,
            number: contact_number,
        }

        new Api().updateConfigs(params, token).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                setSuccessStatus('success')
                setSystemDetails(response.data.data)
               console.log("Successfully updated")
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

		switch(e.target.getAttribute('name')){
			case 'email':
				setEmail(e.target.value)
				break;
            case "contact_number":
                setContact_number(e.target.value)
                break;
            case "address":
                setAddress(e.target.value)
                break;
			default:
				return null;
		}

        // email != '' ? setShowError(false) : mobileNumber != '' ? setShowError(false) : setShowError(true)
    }

    const getConfigurations = () => {
        new Api().getConfigurations(token).then(response=>{
            console.log("Configurations data is ")
            console.log(response.data)
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200 && response.data.success == true){
                setSystemDetails(response.data.data)
                setAddress('')
                setContact_number('')
                setEmail('')
               console.log("Successfully updated")

               response.data.data.map((r: any)=>{
                switch(r.config_name){
                    case 'email':
                        setEmail(r.config_value)
                        break;
                    case 'address':
                        setAddress(r.config_value)
                        break;
                    case 'number':
                        setContact_number(r.config_value)
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

    return <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">Contact Us</h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <span><button className='btn btn-link' type='button' onClick={()=> setEditMode(!editMode)}>edit</button></span>
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
                        <p><span>Address:</span> { editMode == false ? <span>{ address }</span> : <input type="text" className="form-control" name="address" id="address" value={address} placeholder="Address" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> }</p>
                      </div>
                  </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone"></span>
                        </div>
                        <div className="text">
                        <p><span>Phone:</span> { editMode == false ? <a href={"tel://"+contact_number}>{ contact_number }</a> : <input type="text" className="form-control" name="contact_number" id="contact-number" value={contact_number} placeholder="Contact Number" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> }</p>
                      </div>
                  </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text">
                        <p><span>Email:</span> { editMode == false ? <a href={"mailto:"+email}>{ email }</a> : <input type="text" className="form-control" name="email" id="email" value={email} placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} /> } </p>
                      </div>
                  </div>
                        </div>
                        <div className="col-md-3">
                            <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-globe"></span>
                        </div>
                        <div className="text">
                        <p><span>Website</span> <a href="#">site.com</a></p>
                      </div>
                  </div>
                        </div>
                    </div>
                    { editMode == false ? '' : <div className='row justify-content-center'>
                        <div className='col-md-4 col-sm-10'><button className='btn btn-primary' onClick={()=>saveConfiguration()}>Save</button></div>
                    </div> }
                    <div className='row no-gutters justify-content-center'>
                        <div className="col-md-5 d-flex align-items-stretch">
                            <img src='/images/img.jpg' width='100%' style={{borderRadius: '15px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
}

export default ContactDetails