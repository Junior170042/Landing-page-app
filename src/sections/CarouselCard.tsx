import { motion } from "framer-motion"
import { MacBook } from '../constants'
import Button from '../components/Button'

interface CarouselCardProps {
    macBook: MacBook;
}

const CarouselCard = ({ macBook }: CarouselCardProps) => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex-1 relative group"
            >
                <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 soft-transition" />
                <img
                    className="relative z-10 w-full h-auto max-h-[400px] object-contain drop-shadow-2xl soft-transition group-hover:scale-105"
                    src={macBook.img}
                    alt={macBook.name}
                />
            </motion.div>

            <div className="flex-1 flex flex-col items-start text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4"
                >
                    Limited Time Offer
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    {macBook.name}
                </h2>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {macBook.description}
                </p>

                <div className="flex items-center gap-6">
                    <Button
                        label="Claim Offer"
                        variant="accent"
                    />
                    <p className="text-2xl font-bold text-slate-400 line-through decoration-primary/30">
                        {macBook.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarouselCard
