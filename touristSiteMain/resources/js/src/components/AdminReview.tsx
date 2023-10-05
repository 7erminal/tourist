import React, { useState, useEffect } from "react";
import './../styles/main.sass'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import Api from '../resources/apis';
import { Dna } from  'react-loader-spinner'

type Props = {
    reviewBy: string
    review: string
    isShowing: string
    active: string
    date: string
    reviewid: number
    getReviews: ()=>void
}

const AdminReview: React.FC<Props> = ({review, reviewBy, isShowing, active, date, reviewid, getReviews}) => {
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')

    const showOnDashboard = (review_id: number, showStatus: string) => {

        setLoading(true)

        console.log("Formulating request")

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            review_id: review_id, 
            show: showStatus
        }

        new Api().updateShowReview(params, token).then(response=>{
            console.log("Getting update data")
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                getReviews()
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    const deleteReview = (reviewid: number) => {

        setLoading(true)

        console.log("Formulating request")

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            review_id: reviewid
        }

        new Api().deleteReview(params, token).then(response=>{
            console.log("Getting delete data")
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                getReviews()
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

    return <Container>
            <Row>
                <Col >
                    <span className="float-left"><b>{isShowing == '1' ? 'Showing on main site' : 'Not showing on main site'}</b></span>
                    <Button className="float-right mx-2" onClick={()=>showOnDashboard(reviewid, isShowing == '1' ? 'noShow' : 'show')}>{isShowing == '1' ? 'Hide' : 'Show'}</Button>
                    <Button className="float-right" variant="danger" onClick={()=>deleteReview(reviewid)}>Delete</Button>
                </Col>
            </Row>
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
            <Row className="mt-2 mb-4"><div className="review-text">{review}</div></Row>
            <Row className="my-2"><Col><span className="float-right"><small>{date}</small></span></Col></Row>
        </Container>
}

export default AdminReview