export function generateStaticParams(){
  const brands=["hafele","siemens","faber","elica","kaff","hindware","glen","bosch"];
  const areas=["south-delhi","jaypee-greens","wish-town-sector-128","sector-150-sports-city","sector-100-lotus-boulevard","sector-93b-supernova","sector-44-jaypee","sector-94-cleo-county","golf-course-sector-36","sector-107-lotus-300"];
  const pages=[]; for(const a of areas){ for(const b of brands){ pages.push({area:a, brand:b}) } } return pages;
}

export default async function Page({params}){
  const {area, brand} = await params;
  const areaName = area.replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase());
  const brandName = brand.toUpperCase();

  return (
    <div className="bg-white text-[#111] font-sans">
      {/* SAME TOP BAR AS 24x7 */}
      <div className="bg-[#0f0f0f] text-white text-[11px] text-center py-2 tracking-wide">
        INDEPENDENT SERVICE CENTER | 24X7 SERVICE HELP | CALL: 8744009933
      </div>

      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-black text-[22px] tracking-tight">24X7<span className="text-orange-500">SERVICE</span>HELP</div>
          <div className="flex gap-2">
            <a href="tel:8744009933" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold">8744009933</a>
          </div>
        </div>
      </header>

      <div className="max-w-[1150px] mx-auto px-4 py-8 grid lg:grid-cols-[1fr_340px] gap-8">
        {/* LEFT - SAME AS YOUR LINK */}
        <div>
          <div className="text-xs text-gray-500">Home / {areaName} / {brandName} Chimney Repair</div>
          <h1 className="text-[32px] md:text-[40px] font-bold leading-[1.1] mt-3">
            {brandName} Chimney Repair Service in {areaName}
          </h1>

          <div className="mt-6 text-[15px] leading-7 text-gray-700 space-y-4">
            <p>
              Modern kitchens in upscale urban residences of <b>{areaName}</b> are designed as architectural centerpieces, combining minimalist aesthetics with high-performance culinary spaces. However, the heavy integration of traditional Indian tadka, deep-frying, and aromatic spices creates immense airborne grease, oil particulate, and smoke densities. At the heart of this culinary environment sits your <b>{brandName} chimney</b>, engineered to extract smoke and purify indoor air. When you encounter a sudden <b>{brandName} chimney suction problem in {areaName}</b>, your entire cooking zone fills with lingering fumes, greasy haze, and unpleasant odors.
            </p>
            <p>
              Residents across {areaName} frequently face severe operational disruptions due to accumulated grease buildup, motor failures, electrical faults, and choked filter assemblies. Ignoring a declining airflow problem accelerates wear and tear on internal components. A failing blower motor, a clogged baffle filter cleaning requirement, or a neglected oil collector cleaning schedule can cause the unit to run continuously at maximum power while delivering zero actual extraction. Furthermore, electronic glitches such as a non-responsive control panel, a damaged PCB repair need, or a failing auto-clean repair mechanism can render your appliance completely dead.
            </p>
          </div>

          {/* SAME BOX DESIGN */}
          <div className="mt-8 border rounded-xl p-6 bg-[#fafafa]">
            <h2 className="text-xl font-bold">Common {brandName} Chimney Problems in {areaName}</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm list-disc pl-5">
              <li>{brandName} chimney suction problem / weak suction</li>
              <li>{brandName} chimney motor not working / noise</li>
              <li>{brandName} chimney oil leakage / dripping</li>
              <li>{brandName} chimney touch panel not responding</li>
              <li>{brandName} chimney auto-clean not working</li>
              <li>{brandName} chimney PCB / wiring fault</li>
              <li>{brandName} chimney LED light not working</li>
              <li>{brandName} chimney filter / duct choked</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10">Comprehensive {brandName} Chimney Services in {areaName}</h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-bold text-[17px]">1. Suction & Blower Optimization</h3>
              <p className="text-sm text-gray-600 mt-2 leading-6">When suction disrupts routine, we measure static air pressure. Weak draw is caused by grease film on impeller blades. We execute thorough blower repair, dismantling housing to clean and rebalance. This is the core of {brandName} chimney repair service in {areaName}.</p>
            </div>
            <div>
              <h3 className="font-bold text-[17px]">2. Electrical Circuit, PCB, and Control Panel Restoration</h3>
              <p className="text-sm text-gray-600 mt-2 leading-6">When unit becomes non-responsive, we carry out {brandName} chimney PCB repair and circuit diagnostics. We test transformers, relays, and provide switch repair and touch panel repair for {areaName} customers.</p>
            </div>
            <div>
              <h3 className="font-bold text-[17px]">3. Filtration, Ductwork, and Grease Management</h3>
              <p className="text-sm text-gray-600 mt-2 leading-6">Grease accumulation is primary obstacle. We specialize in rigorous baffle filter cleaning, carbon filter replacement, duct cleaning and oil collector cleaning to ensure smooth exhaust discharge.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10">Price List - {areaName}</h2>
          <div className="mt-4 border rounded-xl overflow-hidden text-sm">
            <div className="flex justify-between p-4 border-b bg-gray-50"><span>Service Visit & Inspection</span><b>Rs 299</b></div>
            <div className="flex justify-between p-4 border-b"><span>Deep Cleaning & Filter Cleaning</span><b>Rs 799</b></div>
            <div className="flex justify-between p-4 border-b bg-gray-50"><span>Motor / Capacitor Repair</span><b>Rs 1499 Onwards</b></div>
            <div className="flex justify-between p-4"><span>PCB / Touch Panel Repair</span><b>Rs 1299 Onwards</b></div>
          </div>

          <h2 className="text-2xl font-bold mt-10">FAQs - {brandName} in {areaName}</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="border p-4 rounded-lg"><b>Q. Auto-clean not working?</b><br/>Grease solidifies around heating element or thermal fuse blows. We do heating element repair.</div>
            <div className="border p-4 rounded-lg"><b>Q. How often deep cleaning?</b><br/>For Indian cooking, every 3-6 months to prevent motor strain.</div>
            <div className="border p-4 rounded-lg"><b>Q. Do you provide emergency service in {areaName}?</b><br/>Yes, 30 min rapid emergency doorstep service in {areaName}.</div>
          </div>

          <div className="mt-10 p-6 bg-black text-white rounded-xl text-center">
            <h3 className="text-xl font-bold">Don't let a faulty chimney compromise your kitchen</h3>
            <p className="text-sm text-white/60 mt-2">Book {brandName} repair in {areaName} now. Genuine parts, 90 days warranty.</p>
            <a href="tel:8744009933" className="inline-block mt-4 bg-white text-black px-8 py-3 rounded-full font-bold">Call 8744009933</a>
          </div>
        </div>

        {/* RIGHT - SAME STICKY FORM AS 24x7 */}
        <div className="h-fit sticky top-[70px] space-y-4">
          <div className="bg-black text-white p-6 rounded-xl">
            <h3 className="font-bold text-lg">Book Service in {areaName}</h3>
            <p className="text-xs text-white/50 mt-1">Technician in 30 Min | Same Day Repair</p>
            <input placeholder="Your Name" className="w-full mt-5 p-3 rounded-lg text-black text-sm"/>
            <input placeholder="Mobile Number" className="w-full mt-3 p-3 rounded-lg text-black text-sm"/>
            <div className="mt-3 p-3 bg-white/10 rounded-lg text-xs">{brandName} - {areaName}</div>
            <a href="https://wa.me/918744009933" className="block mt-3 bg-[#25D366] text-center p-3 rounded-lg font-bold text-sm">Book on WhatsApp</a>
            <a href="tel:8744009933" className="block mt-2 bg-white text-black text-center p-3 rounded-lg font-bold text-sm">Call Now</a>
            <div className="mt-4 text-[11px] text-white/40">✓ 90 Days Warranty ✓ Genuine Parts ✓ 10k+ Customers</div>
          </div>
          <div className="bg-white border p-5 rounded-xl">
            <h4 className="font-bold text-sm">Areas We Serve</h4>
            <div className="mt-3 text-sm text-blue-600 space-y-2">
              <a className="block hover:underline">Jaypee Greens</a>
              <a className="block hover:underline">Wish Town Sector 128</a>
              <a className="block hover:underline">Sector 150 Sports City</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white/30 text-[11px] py-6 text-center mt-10">
        Independent Service Center - Not Authorized by {brandName} - {areaName} Noida
      </footer>
    </div>
  );
}
