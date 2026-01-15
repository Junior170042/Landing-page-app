import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "../hooks/CartContext"
import Button from "./Button"

const CartDrawer = () => {
    const { cartItems, removeFromCart, isCartOpen, setIsCartOpen } = useCart()

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""))
        return acc + price * item.quantity
    }, 0)

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
                    >
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-primary" />
                                <h2 className="text-xl font-bold text-slate-800">Your Cart</h2>
                                <span className="bg-violet-50 text-primary text-xs font-bold px-2 py-1 rounded-lg">
                                    {cartItems.length} Items
                                </span>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-slate-50 rounded-xl soft-transition"
                            >
                                <X size={24} className="text-slate-400" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                        <ShoppingBag size={40} className="text-slate-200" />
                                    </div>
                                    <p className="text-slate-500 font-medium">Your cart is empty</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-primary font-bold mt-2"
                                    >
                                        Start Shopping &rarr;
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.name} className="flex gap-4 group">
                                        <div className="w-20 h-20 bg-slate-50 rounded-2xl overflow-hidden shrink-0">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                                            <p className="text-primary font-bold">{item.price}</p>
                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1">
                                                    <button className="p-1 hover:bg-white rounded-md soft-transition"><Minus size={14} /></button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button className="p-1 hover:bg-white rounded-md soft-transition"><Plus size={14} /></button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.name)}
                                                    className="text-slate-300 hover:text-accent soft-transition"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-slate-100 bg-slate-50/50">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-slate-500 font-medium">Total Amount</span>
                                    <span className="text-2xl font-bold text-gradient">${totalPrice.toFixed(2)}</span>
                                </div>
                                <Button
                                    label="Proceed to Checkout"
                                    className="w-full py-4 text-lg"
                                    variant="primary"
                                />
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default CartDrawer
