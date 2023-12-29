import { suplies } from "../constants"
import useIsInViewport from "../hooks/UseInView"
import Card from "./Card"


const Product = () => {

    const { targetRef } = useIsInViewport({ rootMargin: "-200px" })

    return (
        <div ref={targetRef} className="flex flex-col min-w-full" id="toProduct">
            <h2 className="text-[60px] x:text-[45px] xx:text-[34px] font-semibold font-serif text-black text-center mb-10">Electronic suplies</h2>
            <div className="flex  w-full flex-wrap smd:gap-4 gap-8 smd:-pl-[50px]">{suplies.map(data => (<Card key={data.price} data={data} />))}</div>
        </div>
    )
}

export default Product
