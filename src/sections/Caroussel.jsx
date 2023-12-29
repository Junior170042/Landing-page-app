
import { Carousel } from "@material-tailwind/react";
import { macBooks } from '../constants';
import CarouselCard from './CarouselCard';

const Caroussel = () => {
    return (
        <Carousel transition={{ duration: .8 }} className="rounded-xl">

            {macBooks.map((macBook) => <CarouselCard key={macBook.price} macBook={macBook} />)}

        </Carousel>
    );
}

export default Caroussel
