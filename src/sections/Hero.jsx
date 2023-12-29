import Button from "../components/Button";
import PhoneCard from "../components/PhoneCard";
import { arrowRight } from "../assets/icons"
import bigPhone1 from "../assets/images/bigPhone1.png"
import { statistics, phones } from "../constants";
import { useState } from "react";
import useIsInViewport from "../hooks/UseInView";

const Hero = () => {
    const [phoneImage, setPhone] = useState(bigPhone1)
    const { targetRef } = useIsInViewport()
    const handleChange = (phoneImage) => setPhone(phoneImage)

    return (
        <section ref={targetRef} className="l:pl-4 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2 max-w-full w-full" id="toHome">
            <div className="relative xl:w-2/4 w-full max-xl:padding-x ml-[20px] pt-28 flex flex-col justify-center items-start">
                <p className=" font-montserrat mdl:text-[36px] sm-s:text-[30px] s:text-[25px] text-red-800 md:text-[20px] l:text-[45px] l:pb-2 ">Our selected product collections</p>
                <h1 className="text-[60px] sml:text-[50px] s:text-[40px] font-palanquin"><span className=" relative z-10 pr-10 hero-text  xs:text-[35px]">Our New SmartPhones!</span>
                    <br />
                    <span className="text-red-800 inline-block mt-3">iPhone </span> Beauty
                </h1>


                <p className="mt-10 mb-10 font-mono text-slate-700 sm:max-w-sm">Discorver our new SmartPhones that make your life looks better and simple!</p>

                <Button label="Shop Now" icon={arrowRight} />

                <div className="flex justify-start l:justify-around items-start flex-wrap w-full mt-20 gap-16 s:justify-evenly">
                    {statistics.map((stat, index) => (<div key={index}>
                        <p className="text-4xl font-bold font-mono x:text-[54px]">{stat.value}</p>
                        <p className="text-slate-700 text-lg font-serif ">{stat.label}</p>
                    </div>))}
                </div>
            </div>

            <div className=" flex  max-xl:py-40 bg-slate-400 bg-cover -bg-center bg-hero flex-1 justify-center items-center relative xl:min-h-screen rounded-sm x:min-w-full">
                <img className="object-contain
                relative hover:scale-95 
                transition-all" width={600}
                    height={500} src={phoneImage}
                    alt="heroPhone" />

                <div className="flex sm:gap-5 gap-3 absolute xxl:-bottom-2 -bottom-[10%] sm:left-[2%] max-sm:px-6">
                    {phones.map((phone, idx) => <div key={idx}>
                        <PhoneCard phoneImage={phone} changePhone={handleChange} currentPhone={phoneImage} />
                    </div>)}
                </div>

            </div>

        </section>
    );
}

export default Hero;
