import React, { useEffect, useState } from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

type Props={
    imageUrl: string
}

const LandingImages: React.FC<Props> = ({imageUrl}) => {
    return <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
        <ParallaxBannerLayer image={imageUrl} speed={-10} />
    </ParallaxBanner>
}

export default LandingImages