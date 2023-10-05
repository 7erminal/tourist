import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ReactSession } from 'react-client-session';
import Api from '../resources/apis';
import { Dna } from  'react-loader-spinner'
// import { useNavigate } from "react-router-dom";
import './../styles/main.sass'
import './../styles/hex.css'
import './../styles/animate.min.css'
import './../styles/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [successStatus, setSuccessStatus] = useState('null')
    // const navigate = useNavigate();

    const login_ = () => {
        console.log("About to login. Using the details: ")
        console.log(email)
        // console.log(password)

        setLoading(true)

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            password: password, 
            email: email,
        }

        new Api().login(params).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                

               console.log("Successfully added request")

               if(response.status == 200){
                setSuccessStatus('success')
                console.log("Successful login")
                console.log(response.data)

                ReactSession.setStoreType("localStorage");
                ReactSession.set("emailRSession", email);
                ReactSession.set("token", response.data);

                localStorage.setItem("token", response.data)

                setPassword('')
                setEmail('')

                // navigate("/admin");
                window.location.href = "/admin";
               }
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
			case 'email':
				setEmail(e.target.value)
				break;
            case "password":
                setPassword(e.target.value)
                break;
			default:
				return null;
		}
    }

    useEffect(()=>{
        localStorage.setItem("token", "")
    },[])

    return <div style={{position: 'relative', width: '100vw', height: '100vh'}}>
        <div className='centerDiv loginDiv'>
        {successStatus == 'success' ? <div id="form-message-success" className="mb-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Success</div> : successStatus == 'failed' ? <div id="form-message-failed" className="mb-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>Something went wrong. Please wait a few seconds and try again.</div> : <></> }
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name='password' value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} />
                </Form.Group>
                { loading == true ? 
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}><Dna
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                            /></div> : <Button variant="success" onClick={login_}>Login</Button>
                }
        </Form>
        </div>
    <div className='container0'>
        <div className='triangle-top'>
        </div>
        <div className='loginImages'>
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
            <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='80px' height='80px' style={{border: 'white 4px solid'}} />
        </div>
    </div></div>
}

if(document.getElementById('login-root')){
    createRoot(document.getElementById('login-root')!).render(<Login />)
}