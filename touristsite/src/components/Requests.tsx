import React, { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Api from '../resources/apis';
import Card from 'react-bootstrap/Card';

const Requests: React.FC = () => {
  const [requests, setRequests] = useState<any>([])
  const [showDetails, setShowDetails] = useState(false)
  const [details, setDetails] = useState<any>()

  const getRequests = () => {

    new Api().getRequests().then(response=>{
        console.log("Getting data")
        console.log(response)
        console.log(response.status)

        if(response.status == 200){
          //  console.log("Successfully added request")
           setRequests(response.data);
        }

    }).catch(error => {
        console.log("Error returned is ... ")
        console.log(error)
    })
}

const updateRequest = (requestid: any) => {

  const params = {
    requestid: requestid, 
}

console.log("sending "+params.requestid)
  new Api().update_request(params).then(response=>{
        console.log("Getting data")
        console.log(response)
        console.log(response.status)

        if(response.status == 200){
          //  console.log("Successfully added request")
        }

    }).catch(error => {
        console.log("Error returned is ... ")
        console.log(error)
    })
}

useEffect(()=>{
  getRequests()
},[])

const showDetails_ = (det: any) => {
  setDetails(det)
  setShowDetails(true)

  console.log("Request is ")
  console.log(det.request_id)
  updateRequest(det.request_id)

  const req_index = requests.findIndex((req: any) => req.request_id == det.request_id)
  const temp_requests = requests
  console.log(temp_requests)
  temp_requests[req_index].status = '1';
  console.log(temp_requests)

  setRequests(temp_requests)
}

    return <Container fluid className='my-4'>
    {
      showDetails == false ?
      <Container fluid>
      <ListGroup>
      {
        requests.filter((req: any) => req.status == '2').map((req: any,i: any)=>{
         return <ListGroup.Item key={i} action style={i%2 != 0 ? {backgroundColor: '#edf5f6'} : {}} onClick={()=>showDetails_(req)}>
        <Container fluid>
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={12} md={12}><b>{ req.name }</b></Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>{ req.number }</Col>
              </Row>
              <Row>
                <Col xs={12} md={12}><small><b>{ req.email }</b></small></Col>
              </Row>
              <Row>
                <Col xs={12} md={12}><p><small><b>Date requested:</b> { req.date_created }</small></p></Col>
              </Row>
            </Col>
            <Col xs={6}>
              <b>{ req.place_of_interest }</b>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
        })
      }
    </ListGroup>
    <hr />
    <ListGroup>
      {
        requests.filter((req: any) => req.status == '1').slice(0).reverse().map((req: any,i: any)=>{
         return <ListGroup.Item key={i} action style={i%2 != 0 ? {backgroundColor: '#edf5f6'} : {}} onClick={()=>showDetails_(req)}>
        <Container fluid>
          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={12} md={12}><b>{ req.name }</b></Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>{ req.number }</Col>
              </Row>
              <Row>
                <Col xs={12} md={12}><small><b>{ req.email }</b></small></Col>
              </Row>
              <Row>
                <Col xs={12} md={12}><p><small><b>Date requested:</b> { req.date_created }</small></p></Col>
              </Row>
            </Col>
            <Col xs={6}>
              <b>{ req.place_of_interest }</b>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
        })
      }
    </ListGroup>
    </Container>:
    <Container>
      <Row className="my-4"><Col className="mt-4"><button className='btn btn-secondary' onClick={()=>setShowDetails(false)}>Back</button></Col></Row>
      <Row style={{justifyContent: 'center', alignItems: 'center', display: 'flex', paddingTop: '20px'}}>
       <Col md={7} sm={10} xs={11} className="my-4">
          <Card>
            <Card.Body>
              <Container>
                <Row className="my-2" style={{float: 'right', display: 'flex'}}>
                  <Col>
                    <Row><p>{ details.name }</p></Row>
                    <Row><small>{ details.number }</small></Row>
                    <Row><b>{ details.email }</b></Row>
                    <Row>
                      <p>{ details.date_created }</p>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <p><b>{ details.place_of_interest }</b></p>
                </Row>
                <Row>
                  <p>{ details.message }</p>
                </Row>
              </Container>
            </Card.Body>
          </Card>
       </Col>
      </Row>
    </Container>
}
    </Container>
}

export default Requests