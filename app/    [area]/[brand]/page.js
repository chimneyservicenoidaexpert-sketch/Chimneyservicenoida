export function generateStaticParams(){
  const brands=["siemens","faber","elica","kaff","hindware","glen","bosch","sunflame"];
  const areas=["jaypee-greens","wish-town-sector-128","sector-150-sports-city","sector-100-lotus-boulevard","sector-93b-supernova","sector-44-jaypee","sector-94-cleo-county","golf-course-sector-36","sector-107-lotus-300","ats-village-noida-ext"];
  const p=[]; for(let a of areas) for(let b of brands) p.push({area:a, brand:b}); return p;
}
export async function generateMetadata({params}){
  const {area,brand}=await params;
  const A=area.replace(/-/g,' '); const B=brand.toUpperCase();
  return { title: `${B} Chimney Repair Service in ${A} Noida | 24x7 Service`, description: `${B} chimney service in ${A} Noida. Same day repair, cleaning, motor, PCB repair. Call 8744009933` }
}

function Title(s){ return s.split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ') }

export default async function Page({params}){
  const {area, brand} = await params;
  const areaName = Title(area);
  const brandName = brand.toUpperCase();

  return (
    <main className="bg-[#f8f9fa] text-[#222] font-sans">
      {/* TOP BAR */}
      <div className="bg-black text-white text-xs py-2 text-center">Independent Service Center | Same Day Service in {areaName} | Call: 8744009933</div>

      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-black text-xl">CHIMNEY<span className="text-orange-500">CARE</span> NOIDA</div>
          <a href="tel:8744009933" className="bg-black text-white px-5 py-2 rounded-full font-bold text-sm">8744009933</a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-[2fr_1fr] gap-6">
        {/* LEFT CONTENT - SAME AS 24x7 DESIGN */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
          <div className="text-xs text-gray-500">Home / {areaName} / {brandName} Chimney Repair</div>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 leading-tight">{brandName} Chimney Repair Service in {areaName} Noida</h1>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Modern kitchens in upscale residences of {areaName} are designed as architectural centerpieces. However heavy integration of traditional Indian tadka, deep-frying, and aromatic spices creates immense airborne grease. At the heart sits your {brandName} chimney, engineered to extract smoke. When you face a sudden <strong>{brandName} chimney suction problem in {areaName}</strong>, your cooking zone fills with lingering fumes and greasy haze.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Residents across {areaName} frequently face severe operational disruptions due to accumulated grease buildup, motor failures, electrical faults, and choked filters. Ignoring a declining airflow or smoke suction issue accelerates wear on internal components. A failing blower motor or clogged baffle filter can cause the unit to run at maximum power with zero extraction.
          </p>

          <div className="mt-8 bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-bold">Common {brandName} Chimney Problems in {areaName}</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm list-disc pl-5">
              <li>Weak suction / Smoke not going</li><li>Motor not starting</li><li>Excessive noise / Vibration</li><li>Oil dripping from chimney</li><li>Touch panel not working</li><li>Auto-clean not working</li><li>LED light not working</li><li>PCB / Wiring fault</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10">Comprehensive {brandName} Chimney Services We Offer in {areaName}</h2>

          <div className="mt-4 space-y-6">
            <div><h3 className="font-bold">1. Suction Problem & Blower Optimization</h3><p className="text-sm text-gray-600 mt-1">When suction problem disrupts routine, we measure static air pressure. Weak draw is caused by grease film on impeller blades. We execute thorough blower repair, dismantling housing to clean and rebalance.</p></div>
            <div><h3 className="font-bold">2. Electrical Circuit, PCB, and Control Panel Restoration</h3><p className="text-sm text-gray-600 mt-1">When unit becomes non-responsive, we carry out {brandName} PCB repair and circuit diagnostics. We test transformers, relays, and provide switch repair and touch panel repair.</p></div>
            <div><h3 className="font-bold">3. Filtration, Ductwork, and Grease Management</h3><p className="text-sm text-gray-600 mt-1">We specialize in rigorous baffle filter cleaning, carbon filter replacement, duct cleaning and oil collector cleaning to ensure smooth exhaust discharge.</p></div>
          </div>

          <h2 className="text-2xl font-bold mt-10">Price List for {areaName}</h2>
          <div className="mt-4 border rounded-lg overflow-hidden">
            <div className="flex justify-between p-3 border-b bg-gray-50"><span>Service Visit Charge</span><b>Rs 299</b></div>
            <div className="flex justify-between p-3 border-b"><span>Deep Cleaning / Filter Cleaning</span><b>Rs 799</b></div>
            <div className="flex justify-between p-3 border-b bg-gray-50"><span>Motor Repair</span><b>Rs 1499 Onwards</b></div>
            <div className="flex justify-between p-3"><span>PCB Repair</span><b>Rs 1299 Onwards</b></div>
          </div>
        </div>

        {/* RIGHT STICKY FORM - SAME AS 24x7 */}
        <div className="h-fit sticky top-[70px]">
          <div className="bg-black text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold">Book Service in {areaName}</h3>
            <p className="text-sm text-white/60 mt-1">Same day technician visit in 30 min</p>
            <div className="mt-5 space-y-3">
              <input placeholder="Your Name" className="w-full p-3 rounded-lg text-black"/>
              <input placeholder="Mobile Number" className="w-full p-3 rounded-lg text-black"/>
              <div className="p-3 rounded-lg bg-white/10 text-sm">{brandName} - {areaName}</div>
              <a href="https://wa.me/918744009933" className="block text-center bg-green-500 p-3 rounded-lg font-bold">Book on WhatsApp</a>
              <a href="tel:8744009933" className="block text-center bg-white text-black p-3 rounded-lg font-bold">Call 8744009933</a>
            </div>
            <div className="mt-4 text-xs text-white/40">✓ 90 Days Warranty ✓ Genuine Parts ✓ 10k+ Customers</div>
          </div>

          <div className="bg-white mt-4 p-5 rounded-xl border">
            <h4 className="font-bold text-sm">We Serve in 10 Posh Areas</h4>
            <div className="mt-3 text-sm space-y-2 text-blue-600">
              <a href="/jaypee-greens" className="block hover:underline">Jaypee Greens</a>
              <a href="/wish-town-sector-128" className="block hover:underline">Wish Town Sec 128</a>
              <a href="/sector-150-sports-city" className="block hover:underline">Sector 150 Sports City</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white/30 text-xs py-6 text-center mt-10">Independent Chimney Repair Service in Noida | Not Authorized by {brandName} | Service in {areaName}</footer>
    </main>
  )
}
