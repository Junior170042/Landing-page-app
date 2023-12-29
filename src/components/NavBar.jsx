import Logo from "../assets/images/Logo.ico"
import menuIcon from "../assets/icons/hamburger.svg"
import { navLinks } from "../constants";
import { NavContext } from "../hooks/NaveContext";
const NavBar = () => {

    const { setIsMenu } = NavContext()

    return (
        <header className=" z-10 p-5 w-full fixed top-0 left-0 right-0">

            <nav className=" flex justify-between max-container items-center relative">
                <a href="/" className="l:absolute l:left-1 l:top-0">
                    <img src={Logo} alt="Logo" width={40} height={40} />
                </a>
                <ul className="-mt-12 l:mt-2 flex-1 flex justify-end items-center gap-16 md:hidden pr-10">
                    {navLinks.map(link => (
                        <li key={link.label}><a className={` ${link.class} font-montserrat leading-normal text-lg text-slate-gray hover:text-deep-orange-500`} href={link.href}>{link.label}</a></li>
                    ))}
                </ul>

                <div className="hidden md:block md:absolute md:top-1 md:right-3">
                    <a href="#toHome"><img src={menuIcon} onClick={() => setIsMenu(true)} alt="Hamburger" width={25} height={25} /></a>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
