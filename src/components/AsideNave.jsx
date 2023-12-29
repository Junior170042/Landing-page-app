
import { close } from "../assets/icons"
import { navLinks } from "../constants"
import { NavContext } from "../hooks/NaveContext"



const AsideNave = () => {

    const { isMenu, setIsMenu } = NavContext()

    return (
        <div className={`${isMenu ? " hidden absolute bg-[rgba(7,6,6,0.9)] z-40 top-0 bottom-0 left-0 xx:-right-6 -right-3 md:flex justify-end m-w-full" : "hidden"}`}>
            <div className="w-[50%] bg-blue-gray-100 z-50 asolute right-0 h-[400px]">
                <span onClick={() => setIsMenu(false)} className="absolute z-50 top-0 right-6 "><img className="w-8 h-8" src={close} alt="Icon_close" /></span>
                <ul className=" flex flex-col justify-center items-center w-full">

                    {navLinks.map(link => (
                        <li onClick={() => setIsMenu(false)} key={link.label}><a className={` ${link.class} font-montserrat w-full flex flex-col justify-between mt-8 leading-normal text-lg text-slate-gray hover:text-deep-orange-500`} href={link.href}>{link.label}</a></li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default AsideNave
