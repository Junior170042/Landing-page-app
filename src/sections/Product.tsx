import { motion } from "framer-motion"
import { suplies } from "../constants"
import Card from "./Card"

const Product = () => {
    return (
        <section id="toProduct" className="py-24 px-6 lg:px-12 bg-slate-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-3xl lg:text-5xl font-bold mb-6"
                    >
                        Essential <span className="text-gradient">Accessories</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Complete your tech ecosystem with our curated selection of high-quality electronics and supplies. High performance, beautifully designed.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {suplies.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card data={data} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Product

