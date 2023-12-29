import { copyrightSign } from "../assets/icons";
import { socialMedia } from "../constants";
const Footer = () => {



    return (
        <div className="flex flex-col">
            <h2 className=" text-gray-400 font-palanquin text-[60px] s:text-[54px] xs:text-[48px] x:text-[38px] xx:text-[28px]">Our social medias</h2>
            <div className="flex justify-between mt-12 xx:gap-8">{socialMedia.map((value, index) => (<div
                key={index} className=" rounded-full p-4 bg-white w-[100px] h-[100px] x:w-[70px] xx:h-[60px]  xx:w-[60px] x:h-[70px]">
                <img className="w-full object-cover" src={value.src} alt={value.alt} />
            </div>
            ))}
            </div>

            <div className="flex mt-12 gap-4">
                <img src={copyrightSign} alt="copy right" />
                <p className="text-xl font-palanquin text-blue-gray-100 italic">J7coder designer</p>
            </div>

        </div>

    );
}

export default Footer;
