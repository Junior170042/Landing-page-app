import PopularCard from "../components/PopularCard";
import { products } from "../constants";


const Popular = () => {
    return (
        <section id="products">

            <div className="max-container max-sm:mt-12">
                <div className="flex flex-col s:text-start  gap-5">
                    <h2 className="text-4xl font-palanquin font-bold s:text-[40px] x:text-[54px]">All Popular <span className="text-coral-red">phones!</span></h2>
                    <p className="mt-2 l:text-start text-xl s:text-2xl text-center font-montserrat text-slate-gray">A mobile phone (or cellphone) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone)</p>
                </div>

                <div className=" px-10  md:px-2 mds:grid-cols-2 mds:pl-[40px]  mt-16 grid lg:grid-cols-4 l:grid-cols-3  md:gap-4 gap-8 sm:flex sm:flex-wrap x:pl-[30px] xx:pl-[6px]">
                    {products.map((product, index) => <PopularCard key={index} {...product} />)}
                </div>

            </div>

        </section>
    );
}

export default Popular;
