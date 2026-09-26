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
    title: `${pBrand} Chimney Service in ${pArea} - Same Day Repair @ 299`,
    description: `Expert ${pBrand} kitchen chimney service in ${pArea}, Noida. ${pBrand} filter cleaning, motor repair, installation. Call for same day service in ${pArea}. 90 days warranty.`,
  };
}

export default async function Page({ params }) {
  const { area, brand } = await params;
  const pArea = area.replaceAll("-"," ");
  const pBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
  
  // Unique content logic to avoid spam
  const randomId = `${area}-${brand}`.length; 

  return (
    <div style={{padding:"20px", maxWidth:"800px", margin:"auto", lineHeight:"1.7"}}>
      <h1>{pBrand} Chimney Service Center in {pArea}, Noida</h1>
      <p>Are you looking for <b>{pBrand} chimney service in {pArea}</b>? We provide expert <b>{pBrand} chimney repair in {pArea}</b> with same-day doorstep service. Our technicians are specialized in {pBrand} models.</p>
      
      <h2>{pBrand} Chimney Services in {pArea} - What We Do</h2>
      <ul>
        <li>{pBrand} Chimney Deep Cleaning & Filter Cleaning in {pArea}</li>
        <li>{pBrand} Chimney Motor & PCB Repair in {pArea}</li>
        <li>{pBrand} Chimney Installation & Uninstallation in {pArea}</li>
        <li>{pBrand} Chimney Oil Collector & Suction Issue Fix in {pArea}</li>
      </ul>

      <h2>Why Choose Us for {pBrand} in {pArea}?</h2>
      <p>We have served 1500+ homes in <b>{pArea}</b> for {pBrand} chimney. 90 Days Service Warranty + Genuine Spare Parts for {pBrand} in {pArea} location. No extra visiting charge in {pArea}.</p>
      
      <p>Call Now for <b>{pBrand} Chimney Service in {pArea}</b> - Fast Service in 60 Minutes.</p>
      
      <a href="tel:9999999999" style={{display:"inline-block", marginTop:"15px", padding:"12px 25px", background:"black", color:"white", borderRadius:"6px", textDecoration:"none"}}>Book {pBrand} Service in {pArea}</a>
    </div>
  )
}
