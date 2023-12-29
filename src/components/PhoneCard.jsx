
const PhoneCard = ({ phoneImage, changePhone, currentPhone }) => {

    const handleClick = () => {
        if (currentPhone !== phoneImage.bigPhone) { changePhone(phoneImage.bigPhone); }
    }
    return (
        <div className={`border-2 rounded-xl

            ${currentPhone === phoneImage.bigPhone ? 'border-coral-red' : 'border-transparent'}
            cursor-pointer max-sm:flex-1
        `}
            onClick={handleClick}
        >
            <div className='flex justify-center items-center bg-card bg-center 
            bg-cover 
             rounded-xl max-sm:p-4'>
                <img src={phoneImage.thumbnail} alt="litlePhone"
                    width={150}
                    height={150}
                    className='object-cover'
                />
            </div>
        </div>
    );
}

export default PhoneCard;
