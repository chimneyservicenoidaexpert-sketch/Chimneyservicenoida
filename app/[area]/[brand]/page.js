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
  return {
    title: `${pBrand} Chimney Service in ${pArea} - Same Day @299`,
    description: `Best ${pBrand} chimney repair & service in ${pArea} Noida. Same day doorstep service for ${pBrand} in ${pArea}. 90 days warranty.`,
  };
}

export default async function Page({ params }) {
  const { area, brand } = await params;
  const pArea = area.replaceAll("-"," ");
  const pBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
  return (
    <div style={{padding:"20px", maxWidth:"800px", margin:"auto", lineHeight:"1.7"}}>
      <h1>{pBrand} Chimney Service Center in {pArea}, Noida</h1>
      <p>Looking for <b>{pBrand} chimney service in {pArea}</b>? We offer expert {pBrand} chimney repair, cleaning & installation in {pArea}. Our team in {pArea} is specialist for {pBrand}.</p>
      <h2>Our {pBrand} Services in {pArea}</h2>
      <ul>
        <li>{pBrand} Filter Cleaning in {pArea}</li>
        <li>{pBrand} Motor Repair in {pArea}</li>
        <li>{pBrand} Installation in {pArea}</li>
        <li>{pBrand} Suction Problem Fix in {pArea}</li>
      </ul>
      <p>Trusted by 1500+ homes in {pArea} for {pBrand} chimney service. Call now for fast 60-min service in {pArea}.</p>
      <a href="tel:9999999999" style={{padding:"12px 25px", background:"black", color:"white", borderRadius:"6px", textDecoration:"none"}}>Book {pBrand} Service in {pArea}</a>
    </div>
  )
}
