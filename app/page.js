"use client";
import { useState, useEffect } from "react";

const BRANDS = ["Hafele","Bosch","Siemens","Glen","Faber","Elica","Kaff","Robam"];
const AREAS = ["Jaypee Greens","Lotus Boulevard","Lotus Espacia","Supernova Spira","ATS Knightsbridge","Mahagun Mezzaria","Jaypee Wish Town","Lotus Panache","Eldeco Aamantran","Ace Golfshire","Mahagun Moderne","ATS Village","Sector 44","Sector 36","Sector 150","Sector 128","Sector 93B","Golf Course Road","Sector 50","Greater Noida West"];

export default function Home() {
  const [i, setI] = useState(0);
  useEffect(()=>{ const t=setInterval(()=>setI(p=>(p+1)%BRANDS.length),1200); return()=>clearInterval(t)},[]);

  return (
    <main className="bg-white text-gray-900">
      <header className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="font-bold text-xl">CHIMNEY SERVICE NOIDA EXPERT</h1>
        <a href="tel:+919971088007" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">Call Now</a>
      </header>

      <section className="bg-gradient-to-br from-gray-900 to-black text-white text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">24x7 {BRANDS[i]} Chimney Service in Noida</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Expert Repair, Cleaning & Installation for All Brands - {BRANDS.join(" • ")}</p>
        <div className="flex gap-4 justify-center">
          <a href="tel:+919971088007" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg">Call: 9971088007</a>
          <a href="https://wa.me/919971088007" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg">WhatsApp</a>
        </div>
        <p className="mt-6 text-sm text-gray-400">✅ 30 Mins Response in Noida, Ghaziabad, Delhi</p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">8 Brands Expert - Locked</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {BRANDS.map(b=> <div key={b} className="border rounded-2xl p-6 shadow hover:shadow-lg"><h4 className="font-bold text-xl mb-2">{b} Chimney</h4><p className="text-sm text-gray-600">Motor, PCB, Cleaning Service in Noida</p><a href={`tel:+919971088007`} className="mt-3 inline-block text-sm font-bold">Book {b} →</a></div>)}
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">20 Posh Areas - Locked (160 Pages)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {AREAS.map(a=> <div key={a} className="bg-white border rounded-full px-4 py-3 text-center text-sm font-bold shadow-sm">{a}</div>)}
        </div>
        <div className="text-center mt-8">
          <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm">Total Pages: 8 Brands x 20 Areas = 160 Pages Locked</div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Book Your Service Today</h2>
        <a href="tel:+919971088007" className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-extrabold text-lg">CALL 9971088007</a>
        <p className="mt-6 text-gray-400 text-sm">Chimney Service Noida Expert | Service in Noida, Greater Noida, Ghaziabad | Brands: {BRANDS.join(", ")}</p>
      </footer>
    </main>
  )
}
