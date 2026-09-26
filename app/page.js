export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="font-bold text-xl">CHIMNEY SERVICE NOIDA EXPERT</h1>
        <a href="tel:+919971088007" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">Call Now</a>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">24x7 Chimney Service in Noida</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Expert Repair, Cleaning & Installation for All Brands - Faber, Elica, Hindware, Kaff, Glen. Same Day Service.</p>
        <div className="flex gap-4 justify-center">
          <a href="tel:+919971088007" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg">Call: 9971088007</a>
          <a href="https://wa.me/919971088007" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp</a>
        </div>
        <p className="mt-6 text-sm text-gray-400">✅ 30 Mins Response in Noida, Ghaziabad, Delhi</p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 shadow hover:shadow-lg"><h4 className="font-bold text-xl mb-2">Chimney Repair</h4><p className="text-gray-600">Motor, PCB, Switch, Filter issue fixed at home.</p></div>
          <div className="border rounded-2xl p-6 shadow hover:shadow-lg"><h4 className="font-bold text-xl mb-2">Deep Cleaning</h4><p className="text-gray-600">Oil & grease cleaning with chemical wash.</p></div>
          <div className="border rounded-2xl p-6 shadow hover:shadow-lg"><h4 className="font-bold text-xl mb-2">Installation</h4><p className="text-gray-600">New chimney installation & ducting service.</p></div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Why 1000+ Customers Trust Us?</h3>
        <p className="max-w-3xl mx-auto text-gray-600">✔️ 10+ Years Experience ✔️ Genuine Spare Parts ✔️ 90 Days Warranty ✔️ No Visiting Charge</p>
      </section>

      {/* Footer CTA */}
      <footer className="bg-black text-white text-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Book Your Service Today</h2>
        <a href="tel:+919971088007" className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-extrabold text-xl">Call Now - 9971088007</a>
        <p className="mt-6 text-gray-400 text-sm">Chimney Service Noida Expert | Service in Noida, Greater Noida, Ghaziabad, Delhi</p>
      </footer>
    </main>
  )
}
