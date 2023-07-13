import React, {useState, useRef, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CustomNavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Masonry from 'react-masonry-css'
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

const images = [
    '/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG',
    '/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG',
    '/images/531222d8-de36-420a-a34e-d4be919afe68.JPG',
    '/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG',
    '/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG',
    '/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG',
    '/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG',
    '/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG',
    '/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG',
    '/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG',
    '/images/ec5c1af7-eee1-4a58-86b5-f6f17cfd9efb.JPG',
    '/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG',
    '/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG',
    '/images/dabbc626-a376-406c-acd2-13057199bf97.JPG',
]

const videos = [
    '/images/landingVIdeo.MP4#t=0.5',
    '/images/1d5832cf-d32c-44d5-9980-6d8977ac98e5.MP4#t=0.5',
    '/images/3bdab675-1a90-4198-892a-a2dd4571b6d7.MP4#t=0.5',
    '/images/5ac6282e-ad71-47eb-aa7a-64e7b241b537.MP4#t=0.5',
    '/images/7d065012-3ae2-421e-b2af-4f7c1da53a27.MP4#t=0.5',
    '/images/52a5779a-7822-4466-b868-0e6210cb93ee.MP4#t=0.5',
    '/images/73add2d3-16fb-49a7-bbed-a48d409145b8.MP4#t=0.5',
    '/images/88a0c547-0619-4086-8b6f-ede3f590c18c.MP4#t=0.5',
    '/images/97ed4d3a-deb5-48e4-83f3-a59e746f7796.MP4#t=0.5',
    '/images/301c2dc2-38c3-4c75-ac8a-340be73ca363.MP4#t=0.5',
    '/images/383a7c14-9c5c-466d-8570-ea8bda27b80e.MP4#t=0.5',
    '/images/80638532-0651-4fcd-9994-e5e5e5766d70.MP4#t=0.5',
    '/images/a38dabbc-ff65-4564-b3b7-7081d6aea3f7.MP4#t=0.5',
    '/images/be5af71a-479d-4216-a4eb-0f03e268d358.MP4#t=0.5',
    '/images/c7588777-23b6-4812-8d70-e3b38b2ad71d.MP4#t=0.5',
    '/images/c8377076-2c8d-4944-89ad-e9331ddd4a5c.MP4#t=0.5',
    '/images/d8fd727a-be11-4f2e-8da8-eaa4039b9cea.MP4#t=0.5',
    '/images/f0a0d678-e759-48c7-a42d-6c43bdb9dddd.MP4#t=0.5',
    '/images/fafd1aa3-3b6f-418e-b9d7-75bcfbadd64f.MP4#t=0.5',
]

const Gallery: React.FC = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2
      };

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

    const imagesRefTag  = useRef<null | HTMLDivElement>(null)
    const videosRefTag  = useRef<null | HTMLDivElement>(null)

    const scrollToView = (type_: string) => {
        if(type_=="images"){
            imagesRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="videos"){
            videosRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return <div style={{ position: 'relative', width: '100%' }}>
        <CustomNavBar />
    <Container>
        <div ref={imagesRefTag}></div>
        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px'}}>  
                    <Col md={8} style={{textAlign: 'center', color: '#AEB6BF'}}>
                        <span className='mx-2 info-link' onClick={()=>scrollToView('images')}>Images</span>
                        <span className='mx-2 info-link' onClick={()=>scrollToView('videos')}>Videos</span>
                    </Col>   
        </Row>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                <div className='gallery-img-container' onClick={()=>handleShow(images[0])}>
                    <img src={images[0]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[1])}>
                    <img src={images[1]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[2])}>
                    <img src={images[2]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[3])}>
                    <img src={images[3]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[4])}>
                    <img src={images[4]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[5])}>
                    <img src={images[5]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[6])}>
                    <img src={images[6]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[7])}>
                    <img src={images[7]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[8])}>
                    <img src={images[8]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[9])}>
                    <img src={images[9]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[10])}>
                    <img src={images[10]} width='100%' />
                </div>

                <div className='gallery-img-container' onClick={()=>handleShow(images[11])}>
                    <img src={images[11]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[12])}>
                    <img src={images[12]} width='100%' />
                </div>
                <div className='gallery-img-container' onClick={()=>handleShow(images[13])}>
                    <img src={images[13]} width='100%' />
                </div>
        </Masonry>
        <hr/>
        <div ref={videosRefTag}></div>
        <Navbar sticky="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link className="mx-4" href="#home"><Link to="#images" className="navLink" onClick={()=>scrollToView('images')}>Images</Link></Nav.Link>
                    <Nav.Link className="mx-4" href="#gallery"><Link to="#videos" className="navLink" onClick={()=>scrollToView('videos')}>Videos</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px'}} data-masonry='{"percentPosition": true }'>  
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                <div className='gallery-img-container'>
                    <video controls muted width='400px' preload="metadata">
                        <source src={videos[0]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                    <video controls width='400px' preload="metadata">
                        <source src={videos[1]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[2]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[3]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[4]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[5]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[6]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[7]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[8]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container'>
                <video controls width='400px' preload="metadata">
                        <source src={videos[9]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                <video controls width='400px' preload="metadata">
                        <source src={videos[10]} type="video/mp4" />
                    </video>
                </div>

                <div className='gallery-img-container' >
                <video controls width='400px' preload="metadata">
                        <source src={videos[11]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                <video controls width='400px' preload="metadata">
                        <source src={videos[12]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                    <video controls width='400px' preload="metadata">
                        <source src={videos[13]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                    <video controls muted width='400px' preload="metadata">
                        <source src={videos[14]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                    <video controls width='400px' preload="metadata">
                        <source src={videos[15]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                    <video controls width='400px' preload="metadata">
                        <source src={videos[16]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                    <video controls width='400px' preload="metadata">
                        <source src={videos[17]} type="video/mp4" />
                    </video>
                </div>
                <div className='gallery-img-container' >
                    <video controls width='400px' preload="metadata">
                        <source src={videos[18]} type="video/mp4" />
                    </video>
                </div>
        </Masonry>
        </Row>
    </Container>
    <Modal show={show} onHide={handleClose} centered>
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
              
                    <img src={modalImage} />
            </Modal>
    <Footer scrollToView={scrollToView}/>
</div>
}

export default Gallery