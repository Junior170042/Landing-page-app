import React from 'react'

const CarouselCard = ({ macBook }) => {
    return (
        <div className=" w-full bg-blue-gray-200 flex mdl:flex-col justify-center items-center">

            <div className="w-1/2 flex h-[500px] mdl:w-full">
                <img className='mdl:w-full mdl:object-fill sml:object-contain object-cover bg-blue-gray-300 h-full rounded-t-lg' src={macBook.img} alt="" />
            </div>

            <div className='w-1/2 pl-4 h-full flex flex-col justify-center mdl:w-full pb-6'>
                <h2 className='text-[50px] text-black font-montserrat'>{macBook.name}</h2>
                <p className='text-xl font-palanquin'>{macBook.description}</p>

            </div>

        </div>
    )
}

export default CarouselCard