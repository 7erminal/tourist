import React, { useEffect, useState } from 'react'

const images = [
    '/images/1c67d251-a14d-4b90-9706-50d847578571.JPG',
    '/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG',
    '/images/2dff53b2-8ff2-4841-a358-9507ee76eb11.JPG',
    '/images/531222d8-de36-420a-a34e-d4be919afe68.JPG',
    '/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG',
    '/images/ca36a2b0-bc0f-4583-a32a-292d41182b80.JPG',
    '/images/39351349-1807-47ea-bb18-c5aa45a48bf4.JPG',
    '/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG',
    '/images/0bbea570-4b0c-42ad-9e5c-727880053536.JPG'
]

type Props = {
  handleShow: (v: string)=>void
}

const LandingHeader: React.FC<Props> = ({handleShow}) => {

    return     <div className="grid">
    <ul id="hexGrid">
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[0]})`}} onClick={()=>handleShow(images[0])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
        
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
                <div className='img' style={{backgroundImage:`url(${images[1]})`}} onClick={()=>handleShow(images[1])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[2]})`}} onClick={()=>handleShow(images[2])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[3]})`}} onClick={()=>handleShow(images[3])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[4]})`}} onClick={()=>handleShow(images[4])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
         <div className='img' style={{backgroundImage:`url(${images[5]})`}} onClick={()=>handleShow(images[5])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[6]})`}} onClick={()=>handleShow(images[6])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[7]})`}} onClick={()=>handleShow(images[7])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[8]})`}} onClick={()=>handleShow(images[8])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
      
     <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[0]})`}} onClick={()=>handleShow(images[0])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
        <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[4]})`}} onClick={()=>handleShow(images[4])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
          <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
                <div className='img' style={{backgroundImage:`url(${images[6]})`}} onClick={()=>handleShow(images[6])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
        <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[2]})`}} onClick={()=>handleShow(images[2])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
        <li className="hex">
        <div className="hexIn">
          <a className="hexLink" href="#">
            <div className='img' style={{backgroundImage:`url(${images[3]})`}} onClick={()=>handleShow(images[3])}></div>
            {/* <h1 id="demo1">This is a title</h1>
            <p id="demo2">Some sample text about the article this hexagon leads to</p> */}
          </a>
        </div>
      </li>
    </ul>
      </div>
}

export default LandingHeader