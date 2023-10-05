import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from "./Review";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from '../resources/apis';
import { Dna } from  'react-loader-spinner'
import AdminReview from "./AdminReview";

const AdminReviews: React.FC = () => {
    const [show, setShow] = useState(false);
    const [reviewBy, setReviewBy] = useState('')
    const [review, setReview] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')
    const [reviews, setReviews] = useState<Array<any>>()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getReviews = () => {
        console.log("Getting reviews")

        new Api().getReviews(token).then(response=>{
            console.log("Getting review data")
            console.log(response)
            console.log(response.status)
    
            if(response.status == 200 && response.data.success == true){
              //  console.log("Successfully added request")

              console.log("Shuffled array is ")
              setReviews(response.data.data);
            }
    
        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }

    useEffect(()=>{
        getReviews()
    },[])


    const addReview = () => {

        setLoading(true)

        console.log("Formulating request")

        // users.map((user,i)=>{
        //     console.log("comparing "+username+" and password "+password)
        //     console.log("with "+user[0]+" : "+user[1])
        //     user[0] == username ? user[1] == password ? navigate('/dashboard') : showError('Invalid credentials') : showError('Username does not exist')
        // }) 

        const params = {
            name: name, 
            review_by: reviewBy,
            review: review,
        }

        new Api().addReview(params, token).then(response=>{
            console.log("Getting data")
            console.log(response)
            console.log(response.status)

            setLoading(false)

            if(response.status == 200){
                setReview('')
                setReviewBy('')
               console.log("Successfully added request")

               handleClose()
               getReviews()
            }

        }).catch(error => {
            console.log("Error returned is ... ")
            console.log(error)
        })
    }
    
    return <section>
        <Container>
            <Row>
                {/* Reviews */}
            </Row>
            <Row className="review-card my-4">
                {
                    reviews?.filter((rev_)=>rev_.active == '1').map((rev: any, i: number) => {
                        return <Col xs={12} md={12}>
                                <AdminReview getReviews={getReviews} reviewid={rev.review_id} review={rev.review} reviewBy={rev.review_by} isShowing={rev.show} active={rev.active} date={rev.created_at} />
                                <hr/>
                            </Col>
                    })
                }
            </Row>
            <Row>
                <Col>
                    <input type="button" value="Add Review" onClick={handleShow} className="btn btn-primary float-right"  />
                </Col>
            </Row>
            <hr/>
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control size="lg" type="text" placeholder="Review by..." value={reviewBy} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setReviewBy(e.target.value)} />
            <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Add your review" value={review} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setReview(e.target.value)} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={addReview}>
            Add Review
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
}

export default AdminReviews