import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Menu, X } from "lucide-react"
import Logo from "../assets/images/Logo.ico"
import { navLinks } from "../constants"
import { useCart } from "../hooks/CartContext"

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { totalCount, setIsCartOpen } = useCart()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 soft-transition ${isScrolled ? "py-3" : "py-6"
                }`}
        >
            <nav className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}>
                <div className={`glassmorphism rounded-3xl px-6 py-3 flex justify-between items-center cute-shadow`}>
                    <motion.a
                        href="/"
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-xl" />
                        <span className="font-bold text-xl text-gradient block sm:hidden">PhoneWeb</span>
                    </motion.a>

                    {/* Desktop Links */}
                    <ul className="flex md:hidden items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <motion.a
                                    href={link.href}
                                    className="text-sm font-medium text-slate-600 hover:text-primary soft-transition"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.label}
                                </motion.a>
                            </li>
                        ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 rounded-xl bg-violet-50 text-primary hover:bg-violet-100 soft-transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ShoppingCart size={22} />
                            {totalCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                    {totalCount}
                                </span>
                            )}
                        </motion.button>

                        <motion.button
                            className="hidden md:block p-2 rounded-xl bg-slate-50 text-slate-600"
                            onClick={() => setIsMobileMenuOpen(true)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Menu size={22} />
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2"
                            >
                                <img src={Logo} alt="Logo" className="w-10 h-10 rounded-xl" />
                                <span className="font-bold text-xl text-gradient">PhoneWeb</span>
                            </motion.div>
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-3 bg-slate-50 rounded-2xl text-slate-400"
                            >
                                <X size={28} />
                            </motion.button>
                        </div>
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl xs:text-4xl font-bold text-slate-800 hover:text-primary soft-transition block py-2 border-b border-slate-50"
                                    >
                                        <span className="text-sm font-bold text-primary/40 mr-4">0{index + 1}</span>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto pt-12"
                        >
                            <p className="text-slate-400 font-medium mb-4">Express your style</p>
                            <div className="flex gap-4">
                                {['Lavender', 'Mint', 'Rose'].map(color => (
                                    <div key={color} className={`w-10 h-10 rounded-full bg-${color.toLowerCase()} border-4 border-white cute-shadow`} />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default NavBar;
