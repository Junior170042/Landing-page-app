import { createContext, useContext, useState, ReactNode } from "react"

interface CartItem {
    name: string;
    price: string;
    img: string;
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (name: string) => void;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    totalCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const addToCart = (item: Omit<CartItem, "quantity">) => {
        setCartItems((prev) => {
            const exists = prev.find((i) => i.name === item.name)
            if (exists) {
                return prev.map((i) =>
                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                )
            }
            return [...prev, { ...item, quantity: 1 }]
        })
    }

    const removeFromCart = (name: string) => {
        setCartItems((prev) => prev.filter((i) => i.name !== name))
    }

    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isCartOpen, setIsCartOpen, totalCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error("useCart must be used within a CartProvider")
    return context
}
