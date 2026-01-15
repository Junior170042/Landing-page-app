import { motion } from "framer-motion"
import { Star, ShoppingCart, ArrowUpRight } from "lucide-react"
import { Supply } from "../constants"
import { useCart } from "../hooks/CartContext"

interface CardProps {
    data: Supply;
}

const Card = ({ data }: CardProps) => {
    const { addToCart, setIsCartOpen } = useCart()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation()
        addToCart({ name: data.name, price: data.price, img: data.img })
        setIsCartOpen(true)
    }

    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="flex flex-col bg-white rounded-[2.5rem] p-5 cute-shadow soft-transition border border-transparent hover:border-primary/10 w-full group"
        >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-50 mb-6">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={data.img}
                    alt={data.name}
                    className="w-full h-full object-cover soft-transition"
                />
                <button className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl text-slate-400 opacity-0 group-hover:opacity-100 soft-transition hover:text-primary hover:bg-white">
                    <ArrowUpRight size={20} />
                </button>
            </div>

            <div className="px-2 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 mb-3">
                    <Star size={14} fill="#fb7185" className="text-accent" />
                    <span className="text-sm font-bold text-slate-400">Top Rated</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight">
                    {data.name}
                </h3>

                <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-1">
                    {data.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Price</p>
                        <p className="text-2xl font-bold text-gradient">${data.price}</p>
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className="p-4 bg-primary text-white rounded-2xl shadow-lg shadow-violet-200 hover:bg-violet-600 soft-transition"
                    >
                        <ShoppingCart size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default Card

