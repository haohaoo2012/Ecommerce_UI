import React, {FC} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";

const sliderItems = [
    {
        id: "5",
        name: "Photo 1",
        url: "https://i.ibb.co/h959YxM/nuoc-hoa-dior.jpg"
    },
    {
        id: "4",
        name: "Photo 2",
        url: "https://i.ibb.co/2qJy7jK/10-dong-nuoc-hoa-dior-thom-nhat-vhh-16-jpg-1563508602-19072019105642-1.jpg"
    },
    {
        id: "4",
        name: "Photo 2",
        url: "https://i.ibb.co/XzxMk8B/nuoc-hoa-dior-5ml-gia-bao-nhieu-top-7-mui-thom-ban-chay-nhat-07072020161611.jpg"
    },

];

const CarouselImageSlider: FC = () => {
    const settings = {
        indicators: false,
        fade: true,
        infinite: true,
        interval: 3000
    }

    return (
        <div>
            <Carousel {...settings}>
                {sliderItems.map((item, index) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <img className="d-block w-100" src={item.url} alt={item.name}/>
                            </Link>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CarouselImageSlider;
