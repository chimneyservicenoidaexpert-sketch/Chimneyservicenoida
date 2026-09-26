export function generateStaticParams(){
  const brands=["hafele","siemens","faber","elica","kaff","hindware","glen","bosch"];
  const areas=["jaypee-greens","wish-town-sector-128","sector-150-sports-city","sector-100-lotus-boulevard","sector-93b-supernova","sector-44-jaypee","sector-94-cleo-county","golf-course-sector-36","sector-107-lotus-300","south-delhi"];
  const pages=[];
  for(const a of areas){
    for(const b of brands){
      pages.push({area:a, brand:b});
    }
  }
  return pages;
}

export function generateMetadata({params}){
  const area = params?.area || "noida";
  const brand = params?.brand || "chimney";
  const aName = area.replace(/-/g," ");
  const bName = brand.toUpperCase();
  return {
    title: `${bName} Chimney Repair in ${aName} - 30 Min Service`,
    description: `${bName} chimney service in ${aName}. Call 8744009933`
  };
}

export default function Page({params}){
  const area = params?.area || "jaypee-greens";
  const brand = params?.brand || "siemens";

  const areaName = area.split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  const brandName = brand.toUpperCase();

  return (
    <div className="bg-white text-[#111]">
      <div className="bg-[#0f0f0f] text-white text-[11px] text-center py-2">
        24X7 SERVICE HELP | CALL: 8744009933 | {areaName}
      </div>
      <header className="border-b">
        <div className="max-w-[1150px] mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-black text-[20px]">24X7<span className="text-orange-500">SERVICE</span>HELP</div>
          <a href="tel:8744009933" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold">8744009933</a>
        </div>
      </header>

      <div className="max-w-[1150px] mx-auto px-4 py-8 grid lg:grid-cols-[1fr_340px] gap-8">
        <div>
          <div className="text-xs text-gray-500">Home / {areaName} / {brandName}</div>
          <h1 className="text-[34px] font-bold leading-[1.1] mt-3">{brandName} Chimney Repair Service in {areaName}</h1>

          <div className="mt-6 text-[15px] leading-7 text-gray-700 space-y-4">
            <p>Modern kitchens in <b>{areaName}</b> need high-performance <b>{brandName} chimney</b>. If you face <b>{brandName} chimney suction problem in {areaName}</b>, our expert team provides same day repair with genuine parts.</p>
            <p>We handle motor failure, filter choked, PCB fault, touch panel not working, auto-clean not working, oil leakage and noise issues. We provide 90 days warranty and 30 min arrival in {areaName}.</p>
          </div>

          <div className="mt-8 border rounded-xl p-6 bg-[#fafafa]">
            <h2 className="font-bold text-lg">Common {brandName} Problems in {areaName}</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm list-disc pl-5">
              <li>Suction problem</li><li>Motor noise / not working</li>
              <li>Oil leakage</li><li>Touch panel / PCB fault</li>
              <li>Auto-clean not working</li><li>Light / Filter choked</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10">Price List - {areaName}</h2>
          <div className="mt-4 border rounded-xl overflow-hidden text-sm">
            <div className="flex justify-between p-4 border-b bg-gray-50"><span>Visit Charge</span><b>Rs 299</b></div>
            <div className="flex justify-between p-4 border-b"><span>Deep Cleaning</span><b>Rs 799</b></div>
            <div className="flex justify-between p-4"><span>Motor Repair</span><b>Rs 1499+</b></div>
          </div>

          <div className="mt-10 p-6 bg-black text-white rounded-xl text-center">
            <h3 className="font-bold text-xl">Book {brandName} Service in {areaName}</h3>
            <a href="tel:8744009933" className="inline-block mt-4 bg-white text-black px-8 py-3 rounded-full font-bold">Call 8744009933</a>
          </div>
        </div>

        <div className="h-fit sticky top-[20px]">
          <div className="bg-black text-white p-6 rounded-xl">
            <h3 className="font-bold">Book Service in {areaName}</h3>
            <p className="text-xs text-white/50 mt-1">30 Min Arrival | Same Day Repair</p>
            <a href="https://wa.me/918744009933" className="block mt-5 bg-[#25D366] text-center p-3 rounded-lg font-bold text-sm">Book on WhatsApp</a>
            <a href="tel:8744009933" className="block mt-2 bg-white text-black text-center p-3 rounded-lg font-bold text-sm">Call 8744009933</a>
          </div>
        </div>
      </div>
    </div>
  );
}
