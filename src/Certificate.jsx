
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1
    },
    1024: {
        items: 2,
        itemsFit: 'contain'
    },
};

const items = [
    <div className="item p-1" data-value="1"><img src="js_cer.webp" alt="" /></div>,
    <div className="item p-1" data-value="1"><img src="react_cer.webp" alt="" /></div>,
    <div className="item p=1" data-value="1"><img src="interview_cer.webp" alt="" /></div>,

];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);

function Certificate() {

    return (
        <div className=" bg-black p-4 text-white " >
            <div className=" flex justify-center items-center mb-5">
                <h2 className=" text-5xl max-[500px]:max-lg:text-4xl border-b-2 py-4  border-white">Certificate</h2>
            </div>
            <Carousel />
        </div>
    )
}

export default Certificate;