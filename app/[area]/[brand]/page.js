export async function generateStaticParams() {
  const areas = ["sector-150-sports-city","jaypee-greens","sector-44-jaypee-wishtown","sector-93b-supernova","sector-94-cleo-county","wish-town-sector-128","sector-100","sector-137","sector-134","sector-129","sector-50","sector-18","sector-62","sector-76","sector-78","noida-extension","sector-120","sector-74","sector-143","greater-noida-west"];
  const brands = ["bosch","elica","faber","glen","hafele","hindware","kaff","siemens"];
  const params = [];
  for (const area of areas) { for (const brand of brands) { params.push({ area, brand }); } }
  return params;
}
export async function generateMetadata({ params }) {
  const { area, brand } = await params;
  const pArea = area.replaceAll("-"," ");
  const pBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
  return { title: `${pBrand} Chimney Service in ${pArea} - Same Day @299`, description: `Best ${pBrand} chimney repair & service in ${pArea} Noida. Same day doorstep service.` };
}
export default async function Page({ params }) {
  const { area, brand } = await params;
  const pArea = area.replaceAll("-"," ");
  const pBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
  return (<div style={{padding:"20px"}}><h1>{pBrand} Chimney Service in {pArea}</h1><p>Expert {pBrand} service in {pArea} Noida. Same day repair.</p></div>)
}
