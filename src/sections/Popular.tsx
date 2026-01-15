import { motion } from "framer-motion"
import PopularCard from "../components/PopularCard"
import { products } from "../constants"

const Popular = () => {
    return (
        <section id="products" className="py-24 px-6 lg:px-12 bg-white/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Experience the <span className="text-gradient">Best Sellers</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Discover the most loved smartphones of the season. Merging cutting-edge technology with unmatched style, these devices are crafted to perfection.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden lg:block"
                    >
                        <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 soft-transition">
                            View All Products <span>&rarr;</span>
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <PopularCard {...product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Popular;

