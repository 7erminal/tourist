import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Api from '../resources/apis';
import { ReactSession } from 'react-client-session';

const Users: React.FC = () => {
    const [users, setUsers] = useState<any>([])
    const [email, setEmail] = useState('')
    const [name_, setName_] = useState('')
    const [password, setPassword] = useState('')

    const getUsers = () => {

        new Api().getUsers().then(response=>{
            console.log("Users data")
            console.log(response)
            console.log(response.status)
    
            if(response.status == 200){
              //  console.log("Successfully added request")
              setUsers(response.data);
            }
    
        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const addUser = () => {

        const params = {
            email: email,
            password: password
        }

        new Api().addUser(params).then(response=>{
            console.log("Users data")
            console.log(response)
            console.log(response.status)
    
            if(response.status == 200){
              //  console.log("Successfully added request")
              setEmail('')
            setPassword('')
              getUsers();
            }
    
        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    useEffect(()=>{
        getUsers()
        setEmail('')
        setPassword('')

        const namet = ReactSession.get("nameRSession");

        setName_(namet)
      },[])

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)

		console.log(e.target.getAttribute('name'))

		switch(e.target.getAttribute('name')){
			case 'user_email':
				setEmail(e.target.value)
				break;
            case "user_password":
                setPassword(e.target.value)
                break;
			default:
				return null;
		}

        // email != '' ? setShowError(false) : mobileNumber != '' ? setShowError(false) : setShowError(true)
    }

    return <Container >
        {
            name_ == 'admin' ?
            <Row>
            <Col xs={6} md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} name="user_email" placeholder="name@example.com" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                </Form.Group>
            </Col>
            <Col xs={6} md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} name="user_password" placeholder="********" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>inputChange(e)} required />
                </Form.Group>   
            </Col>
            <Col xs={7} md={5}>
            <Button variant="outline-primary" onClick={addUser}>Add User</Button>
            </Col>
        </Row>
            : ''
        }
        <ListGroup>
            {
                users.map((u: any, i: number) => {
                    return <ListGroup.Item key={i}>{ u.email }</ListGroup.Item>
                })
            }
        </ListGroup>
    </Container>
}

export default Users