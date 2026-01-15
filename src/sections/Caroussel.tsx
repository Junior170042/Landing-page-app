import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { macBooks } from '../constants'
import CarouselCard from './CarouselCard'

const Caroussel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === macBooks.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? macBooks.length - 1 : prev - 1))
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full overflow-hidden rounded-[3rem] glassmorphism cute-shadow">
            <div className="relative h-full flex items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <CarouselCard macBook={macBooks[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                <button
                    onClick={prevSlide}
                    className="p-3 glassmorphism rounded-full cute-shadow text-primary hover:bg-primary hover:text-white soft-transition"
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="flex gap-2">
                    {macBooks.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full soft-transition ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/20"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="p-3 glassmorphism rounded-full cute-shadow text-primary hover:bg-primary hover:text-white soft-transition"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default Caroussel

