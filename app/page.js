export default function Home(){
  const areas = [
    {slug:"jaypee-greens", name:"Jaypee Greens"},
    {slug:"wish-town-sector-128", name:"Wish Town Sector 128"},
    {slug:"sector-150-sports-city", name:"Sector 150 Sports City"},
    {slug:"sector-100-lotus-boulevard", name:"Sector 100 Lotus Boulevard"},
    {slug:"sector-93b-supernova", name:"Sector 93B Supernova"},
    {slug:"sector-44-jaypee", name:"Sector 44 Jaypee"},
    {slug:"sector-94-cleo-county", name:"Sector 94 Cleo County"},
    {slug:"golf-course-sector-36", name:"Golf Course Sector 36"},
    {slug:"sector-107-lotus-300", name:"Sector 107 Lotus 300"},
    {slug:"ats-village-noida-ext", name:"ATS Village Noida Ext"},
  ];
  const brands=["Siemens","Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele"];

  return (
    <div className="bg-white text-[#111]">
      <div className="bg-[#0f0f0f] text-white text-[11px] text-center py-2 tracking-wide">
        INDEPENDENT SERVICE CENTER | 24X7 SERVICE HELP | CALL: 8744009933
      </div>

      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-black text-[22px]">24X7<span className="text-orange-500">SERVICE</span>HELP</div>
          <a href="tel:8744009933" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold">8744009933</a>
        </div>
      </header>

      <div className="max-w-[1150px] mx-auto px-4 py-10 grid lg:grid-cols-[1fr_340px] gap-8">
        <div>
          <h1 className="text-[38px] font-bold leading-[1.1]">Chimney Service Noida - Live</h1>
          <p className="mt-4 text-gray-600">Professional chimney repair in 10 posh areas of Noida. Same day service, 90 days warranty, genuine spare parts. We cover all brands.</p>

          <div className="mt-8 grid grid-cols-4 gap-3">
            {brands.map(b=><div key={b} className="border rounded-lg p-3 text-center text-sm font-bold bg-gray-50">{b}</div>)}
          </div>

          <h2 className="text-2xl font-bold mt-10">We Serve in 10 Posh Areas of Noida</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-3">
            {areas.map(a=>(
              <a key={a.slug} href={`/${a.slug}/siemens`} className="border rounded-xl p-4 hover:bg-black hover:text-white transition text-sm font-medium">
                Chimney Repair in {a.name} →
              </a>
            ))}
          </div>

          <div className="mt-8 p-6 bg-black text-white rounded-xl">
            <h3 className="font-bold text-lg">Call 8744009933 - 30 Min Service</h3>
            <p className="text-sm text-white/60 mt-2">Website is now working. 80 pages added. Independent service, not authorized center.</p>
          </div>
        </div>

        <div className="h-fit sticky top-[70px]">
          <div className="bg-black text-white p-6 rounded-xl">
            <h3 className="font-bold text-lg">Book Chimney Service</h3>
            <p className="text-xs text-white/50 mt-1">Technician in 30 Min</p>
            <div className="mt-5 space-y-2 text-sm">
              <div className="p-3 bg-white/10 rounded-lg">✓ Suction Problem</div>
              <div className="p-3 bg-white/10 rounded-lg">✓ Motor / PCB Repair</div>
              <div className="p-3 bg-white/10 rounded-lg">✓ Deep Cleaning - Rs 799</div>
            </div>
            <a href="https://wa.me/918744009933" className="block mt-5 bg-[#25D366] text-center p-3 rounded-lg font-bold text-sm">Book on WhatsApp</a>
            <a href="tel:8744009933" className="block mt-2 bg-white text-black text-center p-3 rounded-lg font-bold text-sm">Call 8744009933</a>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white/30 text-[11px] py-6 text-center mt-10">
        Independent Chimney Repair | Not Authorized Center | Call 8744009933
      </footer>
    </div>
  );
}
