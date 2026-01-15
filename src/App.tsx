import NavBar from "./components/NavBar";
import { Hero, Offers, Quality, Popular, Product, Footer, Services } from "./sections"
import { CartProvider } from "./hooks/CartContext";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <CartProvider>
      <main className="relative bg-[#f8fafc]">
        <NavBar />
        <CartDrawer />

        <section className="pb-16">
          <Hero />
        </section>

        <section className="py-16">
          <Popular />
        </section>

        <section className="py-16">
          <Quality />
        </section>

        <section className="py-16">
          <Offers />
        </section>

        <section className="py-16">
          <Product />
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Premium <span className="text-gradient">Services</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We provide the best care for your devices and a seamless shopping experience.</p>
          </div>
          <Services />
        </section>

        <section className="bg-[#0f172a] py-16">
          <Footer />
        </section>
      </main>
    </CartProvider>
  )
}

export default App

