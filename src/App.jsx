import AsideNave from "./components/AsideNave";
import NavBar from "./components/NavBar"
import useIsInViewport from "./hooks/UseInView";
import { Hero, Offers, Quality, Popular, Product, Footer, Services } from "./sections"


function App() {

  const { targetRef } = useIsInViewport({ treshold: 0, rootMargin: "-50%" });
  return (
    <main className="relative">
      <NavBar />
      <AsideNave />
      <section className=" padding-b" >
        <Hero />
      </section>

      <section className="p-4" >
        < Popular />
      </section>
      <section className="p-4">
        <Quality />
      </section>

      <section className="px-2">
        <Offers />
      </section>


      {/* other section */}

      <section className="pl-12 sm:py-32 py-16 w-full xsm:pl-4" >
        <Product />
      </section>

      <section className="flex flex-col mt-8 mb-12" >
        <h2 className=" text-center text-semibold font-serif text-[60px] mdl:text-[50px] mt-4 mb-6" > We also bring you our free services</h2>
        <div className=" bg-pale-blue">
          <Services />

        </div>
      </section>


      <section ref={targetRef} className=" bg-[#041530] flex flex-col justify-center items-center pb-6 min-h-[90vh]" id="toContacts">
        <Footer />
      </section>

    </main>
  )
}

export default App
