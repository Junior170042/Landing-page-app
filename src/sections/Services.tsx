import { motion } from "framer-motion"
import { services } from "../constants"

const Services = () => {
    return (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group p-10 bg-white rounded-[2.5rem] cute-shadow soft-transition border border-transparent hover:border-primary/20"
                    >
                        <div className="w-16 h-16 bg-violet-50 text-primary rounded-2xl flex items-center justify-center mb-8 soft-transition group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                            <img
                                src={service.imgURL}
                                alt={service.label}
                                className="w-8 h-8 object-contain brightness-0 invert group-hover:invert-0"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                            {service.label}
                        </h3>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            {service.subtext}
                        </p>

                        <motion.div
                            className="mt-8 flex items-center gap-2 text-primary font-bold cursor-pointer opacity-0 group-hover:opacity-100 soft-transition"
                            whileHover={{ x: 5 }}
                        >
                            Learn More <span className="text-xl">&rarr;</span>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Services;

