import { motion } from "framer-motion"
import { ArrowRight, Star, Sparkles, TrendingUp } from "lucide-react"
import Button from "../components/Button"
import PhoneCard from "../components/PhoneCard"
import bigPhone1 from "../assets/images/bigPhone1.png"
import { statistics, phones } from "../constants"
import { useState } from "react"

const Hero = () => {
    const [phoneImage, setPhone] = useState(bigPhone1)
    const handleChange = (phoneImg: string) => setPhone(phoneImg)

    return (
        <section className="relative w-full min-h-screen pt-32 pb-16 px-6 lg:px-12 flex flex-col xl:flex-row items-center justify-between gap-12 overflow-hidden" id="toHome">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 max-w-2xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 text-primary text-sm font-semibold mb-6"
                >
                    <Sparkles size={16} />
                    <span>New Arrival Collection 2026</span>
                </motion.div>

                <h1 className="text-4xl xs:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                    Discover Our <span className="text-gradient">Next-Gen</span> <br />
                    Smart <span className="text-accent">Beauty</span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                    Experience the perfect blend of technology and aesthetics. Our new collection of smartphones is designed to elevate your lifestyle.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Button
                        label="Shop Now"
                        variant="primary"
                        icon={<ArrowRight size={20} />}
                    />
                    <Button
                        label="View Gallery"
                        variant="secondary"
                    />
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {statistics.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Right Content - 3D Phone Display */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex-1 flex flex-col items-center justify-center min-h-[500px] w-full"
            >
                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 p-4 glassmorphism rounded-2xl cute-shadow z-20 hidden lg:block"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Popularity</p>
                            <p className="text-sm font-bold">+25% Growth</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 left-0 p-4 glassmorphism rounded-2xl cute-shadow z-20 hidden lg:block"
                >
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-rose-100 text-accent rounded-lg">
                            <Star size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Rating</p>
                            <p className="text-sm font-bold">4.9 / 5.0</p>
                        </div>
                    </div>
                </motion.div>

                {/* Main Phone Image */}
                <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl"
                        animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.img
                        key={phoneImage}
                        initial={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        src={phoneImage}
                        alt="Phone"
                        className="relative z-10 w-full h-auto max-h-[500px] drop-shadow-2xl"
                    />
                </div>

                {/* Selection Cards */}
                <div className="mt-12 flex gap-4">
                    {phones.map((phone, idx) => (
                        <PhoneCard
                            key={idx}
                            phoneImage={phone}
                            changePhone={handleChange}
                            currentPhone={phoneImage}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;

