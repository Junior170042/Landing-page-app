
import { Carousel } from "@material-tailwind/react";
import { macBooks } from '../constants';
import CarouselCard from './CarouselCard';
import animateObserve from "../hooks/AnimationObserver";



const Caroussel = () => {

    const { animateRef } = animateObserve({}, "animate__fadeIn")

    return (
        <Carousel ref={animateRef} transition={{ duration: .8 }} className="rounded-x carousel">

            {macBooks.map((macBook) => <CarouselCard key={macBook.price} macBook={macBook} />)}

        </Carousel>
    );
}

export default Caroussel
