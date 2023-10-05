import React, { useEffect, useState } from 'react'
import { Slide, Fade } from "react-awesome-reveal"

const SliderImages: React.FC = () => {
//     return <div className="slider">
//     <ul className="slides">
//         <li data-background="/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG">
//             <div className="container">
//                 <div className="slide-caption col-md-4">
//                     <h2 className="slide-title">Beka Adventure</h2>
//                     <p>Visit all the beautiful places in Tanzania.</p>
//                 </div>
//             </div>
//         </li>
//         <li data-background="/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG">
//             <div className="container">
//                 <div className="slide-caption col-md-4">
//                     <h2 className="slide-title">Highly Economical</h2>
//                     <p>Have fun at affordable costs</p>
//                 </div>
//             </div>
//         </li>
//         <li data-background="/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG">
//             <div className="container">
//                 <div className="slide-caption col-md-4">
//                     <h2 className="slide-title">Hospitability</h2>
//                     <p>Meet lots of great people on your tour</p>
//                 </div>
//             </div>
//         </li>
//     </ul>
//     <div className="flexslider-controls">
//         <div className="container">
//             <ol className="flex-control-nav">
//                 <li><a>1</a></li>
//                 <li><a>2</a></li>
//                 <li><a>3</a></li>
//             </ol>
//         </div>
//     </div>
// </div>
return <header>
<div className="overlay"></div>
<video playsInline={true} autoPlay={true} muted={true} loop={true}>
  <source src="/images/landingVIdeo.MP4" type="video/mp4" />
</video>
<div className="container h-100">
  <div className="d-flex h-100 text-center align-items-center">
    <div className="w-100 text-white">
      <Fade direction="down" delay={500}><h1 className="display-3">Beka Adventure</h1></Fade>
      <Fade direction="up" delay={700}><p className="lead mb-0">Tour Tanzania</p></Fade>
    </div>
  </div>
</div>
</header>
}

export default SliderImages