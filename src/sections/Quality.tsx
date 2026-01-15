import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Cpu, Battery, Zap } from "lucide-react"
import { smartwatch } from "../assets/images"
import Button from "../components/Button"

const Quality = () => {
    const features = [
        { icon: <Cpu size={20} />, text: "Next-gen processing power" },
        { icon: <Battery size={20} />, text: "72-hour battery life" },
        { icon: <Zap size={20} />, text: "Ultra-fast synchronization" },
    ]

    return (
        <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[3rem] blur-3xl -z-10" />
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative glassmorphism p-8 rounded-[3rem] cute-shadow"
                    >
                        <img
                            src={smartwatch}
                            alt="smartWatch"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Floating highlight */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-6 -right-6 glassmorphism px-6 py-4 rounded-2xl cute-shadow z-20"
                    >
                        <p className="text-primary font-bold text-lg">Premium Build</p>
                        <p className="text-xs text-slate-500 font-medium">Aerospace Grade Materials</p>
                    </motion.div>
                </motion.div>

                {/* Content Side */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                            Elevate Your Lifestyle with <br />
                            <span className="text-gradient">Premium Smartwatches</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Beyond just telling time, our smartwatches are an extension of your digital life. Crafted for performance, style, and endurance.
                        </p>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-3 bg-violet-50 text-primary rounded-xl group-hover:bg-primary group-hover:text-white soft-transition">
                                        {feature.icon}
                                    </div>
                                    <span className="font-medium text-slate-700">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <Button
                                label="Explore Features"
                                variant="primary"
                                icon={<ArrowRight size={20} />}
                            />
                            <Button
                                label="Tech Specs"
                                variant="secondary"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Quality;

