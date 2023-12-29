
const Button = ({ label, bg, icon, size, mT }) => {
    return (
        <button className={`hover:bg-[#aa7ae9] ${mT && mT} transition-all flex justify-center items-center gap-2 p-3 ${bg ? bg : 'bg-[#7443b5]'} rounded-full border-[#7443b5] font-montserrat text-lg text-white ${size && size}`}>{label} {icon && <img className="ml-2 rounded-full w-5 h-5" src={icon} alt="Icon" />}</button>
    )
}

export default Button