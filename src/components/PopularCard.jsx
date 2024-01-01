import React from 'react';
import { star } from '../assets/icons';
import animateObserve from '../hooks/AnimationObserver';

const PopularCard = ({ imgURL, name, price }) => {

    const { animateRef } = animateObserve({}, "animate__zoomIn")

    return (
        <div ref={animateRef} className='mdl:w-[230px] flex flex-col w-[270px] h-[400px] border-0 border-brown-400 shadow-lg rounded-sm pb-4 hover:scale-110 mds:w-[300px] sml:w-[250px] sm-s:w-[230px] s:w-[400px] xs:min-w-[350px] popular-card' >
            <div className='bg-card bg-center flex justify-center items-center rounded-[20px] w-full h-[250px] '>
                <img src={imgURL} alt={name} className='w-full h-[240px] object-contain' />

            </div>

            <div className='mt-8 flex gap-2.5 justify-start ml-3'>

                <img src={star} alt="rating" width={24} height={24} />
                <p className='font-montserrat text-xl leading-normal text-slate-800'>4.5</p>

            </div>
            <h3 className='ml-3 mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p className='ml-3 mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red'>{price}</p>
        </div>
    );
}

export default PopularCard;
