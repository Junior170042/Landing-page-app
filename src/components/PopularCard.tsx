import { motion } from "framer-motion"
import { Star, ShoppingCart, Info } from "lucide-react"
import { useCart } from "../hooks/CartContext"

interface PopularCardProps {
    imgURL: string;
    name: string;
    price: string;
}

const PopularCard = ({ imgURL, name, price }: PopularCardProps) => {
    const { addToCart, setIsCartOpen } = useCart()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation()
        addToCart({ name, price, img: imgURL })
        setIsCartOpen(true)
    }

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative flex flex-col bg-white rounded-[2rem] p-4 cute-shadow soft-transition border border-transparent hover:border-primary/20"
        >
            <div className="relative bg-violet-50 rounded-[1.5rem] p-6 mb-6 aspect-square flex items-center justify-center overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    src={imgURL}
                    alt={name}
                    className="w-full h-full object-contain drop-shadow-xl"
                />

                {/* Floating Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={handleAddToCart}
                        className="p-2 bg-white rounded-xl shadow-sm text-primary hover:bg-primary hover:text-white soft-transition"
                    >
                        <ShoppingCart size={18} />
                    </button>
                    <button className="p-2 bg-white rounded-xl shadow-sm text-slate-400 hover:bg-slate-100 soft-transition">
                        <Info size={18} />
                    </button>
                </div>
            </div>

            <div className="px-2">
                <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-400">4.8</span>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight group-hover:text-primary soft-transition">
                    {name}
                </h3>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-2xl font-bold text-gradient">{price}</p>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={handleAddToCart}
                        className="text-primary font-bold text-sm underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                    >
                        Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default PopularCard;


