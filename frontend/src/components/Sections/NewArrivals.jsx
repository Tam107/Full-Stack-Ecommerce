import React from 'react'
import SectionHeading from "./SectionsHeading/SectionHeading";
import Card from "../Card/Card";
import Jeans from '../../assets/img/jeans.jpg'
import Shirts from '../../assets/img/shirts.jpg'
import TShirts from '../../assets/img/tshirts.jpeg'
import Dress from '../../assets/img/dresses.jpg'
import CarouselItems from "react-multi-carousel/lib/CarouselItems";
import Carousel from "react-multi-carousel";
import {responsive} from "../../utils/Section.constants";
import "./NewArrival.css"

const items = [{
    'title': 'Jeans',
    imagePath: Jeans
}, {
    'title': 'Shirts',
    imagePath: Shirts
}, {
    'title': 'Dresses',
    imagePath: Dress
},
    {
        'title': 'T-Shirts',
        imagePath: TShirts
    }, {
        'title': 'Dresses',
        imagePath: Dress
    }, {
        'title': 'Jeans',
        imagePath: Jeans
    }, {
        'title': 'Shirts',
        imagePath: Shirts
    }

];

const NewArrivals = () => {
    return (
        <>
            <SectionHeading title={"New Arrivals"}/>
            <Carousel responsive={responsive}
                      autoPlay={false}
                      swipeable={true}
                      draggable={false}
                      showDots={false}
                      infinite={false}
                      partialVisbile={false}
                      itemClass={'react-slider-custom-item'}
                      className="px-8"
            >
                {items && items?.map((item, index) =>
                    <Card
                        key={item?.title + index} title={item.title} imagePath={item.imagePath}/>)}

            </Carousel>
            {/*<div className={"flex flex-wrap gap-8 items-center justify-center "}>*/}

            {/*</div>*/}

        </>
    )
}
export default NewArrivals
