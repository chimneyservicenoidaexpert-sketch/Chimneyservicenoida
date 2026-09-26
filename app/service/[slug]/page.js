export function generateStaticParams() {
  const brands = ["hafele","bosch","siemens","glen","faber","elica","kaff","robam"];
  const areas = ["jaypee-greens","lotus-boulevard","lotus-espacia","supernova-spira","ats-knightsbridge","mahagun-mezzaria","jaypee-wish-town","lotus-panache","eldeco-aamantran","ace-golfshire","mahagun-moderne","ats-village","sector-44","sector-36","sector-150","sector-128","sector-93b","golf-course-road","sector-50","greater-noida-west"];
  const params = [];
  brands.forEach(b => areas.forEach(a => params.push({ slug: `${b}-chimney-service-in-${a}` })));
  return params;
}
export default async function ServicePage({params}) {
  const { slug } = await params;
  const title = slug.replaceAll("-"," ").toUpperCase();
  const brand = title.split(" ")[0];
  const area = title.replace(brand+" CHIMNEY SERVICE IN ","");
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-black mt-10">{brand} CHIMNEY SERVICE IN {area}</h1>
      <p className="mt-4 text-gray-600">24x7 {brand} Service in {area}. 30 Mins Response. Call 9971088007</p>
      <a href="tel:+919971088007" className="mt-8 block bg-yellow-400 text-black text-center py-5 rounded-full font-black text-xl">CALL 9971088007</a>
    </main>
  )
}
