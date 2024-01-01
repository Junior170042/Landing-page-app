
import animateObserve from "../hooks/AnimationObserver";
import Caroussel from "./Caroussel";

const Offers = () => {
    const { animateRef } = animateObserve({}, "animate__flipInX")
    return (
        <div className="flex flex-col w-full">
            <h2 ref={animateRef} className="text-[60px] xs:text-[50px] x:text-start x:text-[40px] xx:text-[32px] text-center pb-8 font-serif font-semibold text-zinc-950 xx:text-center">Our new offers!</h2>

            <Caroussel />


        </div>
    );
}

export default Offers;
