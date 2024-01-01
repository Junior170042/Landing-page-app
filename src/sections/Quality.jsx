import { arrowRight } from "../assets/icons";
import { smartwatch } from "../assets/images";
import Button from "../components/Button";
import animateObserve from "../hooks/AnimationObserver";



const Quality = () => {
    const refOfferText = animateObserve({}, "animate__fadeIn");
    const refOfferImage = animateObserve({}, "animate__fadeIn");
    return (
        <section id="about" className="flex  justify-between items-center mdl:flex-col mt-12  gap-20">

            <div ref={refOfferText.animateRef} className="flex-1 flex flex-col offer-text">
                <h2 className="text-4xl xs:text-3xl font-montserrat leading-normal font-bold text-slate-900">
                    We also bring you our popular <span className="text-coral-red"> smartWatches!</span>
                </h2>
                <p className="text-slate-gray font-palanquin mt-2 leading-normal text-lg">A smartwatch is a wearable electronic device designed to be worn on the wrist, much like a traditional wristwatch. However, unlike traditional watches, a smartwatch incorporates advanced computing and communication capabilities, making it a versatile and multifunctional device</p>

                <p className="text-slate-gray font-palanquin mt-2 leading-normal text-lg">They can receive and display notifications for calls, messages, emails, social media updates, and more. Users can often respond to these notifications directly from the watch.</p>

                <Button label="See more" size="w-1/2 xx:w-full" mT="mt-8" icon={arrowRight} />
            </div>

            <div ref={refOfferImage.animateRef} className="img-offer flex-1 xx:ml-[50px] xx:w-[320px] bg-card bg-center bg-cover smd:mt-32 rounded-lg flex items-center justify-center hover:scale-105">
                <img src={smartwatch} alt="smartWatch" className="object-cover" width={560} />
            </div>

        </section>
    );
}

export default Quality;
