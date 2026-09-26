export default function Home() {
  const areas = [
    "sector-150-sports-city",
    "jaypee-greens",
    "sector-44-jaypee-wishtown",
    "sector-93b-supernova",
    "sector-94-cleo-county",
    "wish-town-sector-128",
    "sector-100",
    "sector-137",
    "sector-134",
    "sector-129",
    "sector-50",
    "sector-18",
    "sector-62",
    "sector-76",
    "sector-78",
    "noida-extension",
    "sector-120",
    "sector-74",
    "sector-143",
    "greater-noida-west"
  ];

  const brands = ["bosch","elica","faber","glen","hafele","hindware","kaff","siemens"];

  return (
    <main style={{fontFamily:"sans-serif"}}>
      <div style={{padding:"30px", textAlign:"center", background:"#f5f5f5"}}>
        <h1>Chimney Service Center Noida</h1>
        <p>Expert Kitchen Chimney Repair & Service in Noida - All Brands</p>
        <a href="tel:9999999999" style={{padding:"10px 20px", background:"black", color:"white", borderRadius:"5px", textDecoration:"none"}}>Call Now</a>
      </div>

      {/* 20 Area x 8 Brands Links Section */}
      <div style={{padding:"20px", maxWidth:"1100px", margin:"auto"}}>
        <h2>Our Service Areas & Brands in Noida (160 Services)</h2>
        {areas.map(area => (
          <div key={area} style={{marginBottom:"25px", padding:"15px", border:"1px solid #eee", borderRadius:"8px"}}>
            <h3 style={{textTransform:"capitalize", marginBottom:"10px"}}>{area.replaceAll("-"," ")}</h3>
            <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
              {brands.map(brand => (
                <a 
                  key={`${area}-${brand}`} 
                  href={`/${area}/${brand}`} 
                  style={{padding:"6px 14px", border:"1px solid #ccc", borderRadius:"20px", textTransform:"capitalize", textDecoration:"none", color:"black", background:"white"}}
                >
                  {brand}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{padding:"20px", textAlign:"center", background:"#111", color:"white"}}>
        <p>© 2026 Chimney Service Noida - All 20 Areas Covered</p>
      </div>
    </main>
  );
}
