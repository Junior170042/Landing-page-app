import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Logo from "../assets/images/Logo.ico"

const Footer = () => {
    return (
        <footer className="w-full text-slate-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <img src={Logo} alt="Logo" className="w-10 h-10 rounded-xl" />
                            <span className="font-bold text-2xl text-white">PhoneWeb</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Redefining the way you experience technology. Premium smartphones and accessories for a modern lifestyle.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary soft-transition"
                                >
                                    <Icon size={20} className="text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'Products', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary soft-transition">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                        <ul className="space-y-4">
                            {['FAQ', 'Shipping', 'Returns', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-primary soft-transition">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+1 (555) 000-1234</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>hello@phoneweb.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; 2026 PhoneWeb. All rights reserved.</p>
                    <p>Designed with ❤️ by J7coder</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

