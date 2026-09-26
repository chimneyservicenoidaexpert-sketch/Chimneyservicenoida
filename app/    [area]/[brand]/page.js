mexport const dynamic = 'force-dynamic';

import Typewriter from "../../components/Typewriter";

const brands = ["siemens","hafele","elica","hindware","faber","glen","kaff"];
const areas = ["jaypee-greens","jaypee-wishtown","lotus-boulevard","sector-150","sector-107-lotus-300","ajnara-daffodil"];

function TitleCase(str){
  if(!str) return "";
  return str.split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
}

export default function Page({ params }){
  const area = params?.area || "jaypee-greens";
  const brand = params?.brand || "siemens";
  const areaName = TitleCase(area);
  const brandName = TitleCase(brand);

  return (
    <main style={{fontFamily:'system-ui'}}>
      {/* HEADER */}
      <header style={{background:'black', color:'white', padding:'14px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <b>CHIMNEY EXPERT</b>
        <a href="tel:8744009933" style={{background:'white', color:'black', padding:'8px 14px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold'}}>CALL NOW</a>
      </header>

      {/* HERO */}
      <section style={{padding:'40px 20px', background:'#f7f7f7', textAlign:'center'}}>
        <h1 style={{fontSize:'28px', fontWeight:'900', minHeight:'80px'}}>
          <Typewriter texts={[`${brandName} Chimney Repair in ${areaName}`, `Service in 90 Mins`, `Call 8744009933`]} />
        </h1>
        <p style={{marginTop:'10px'}}>Same Day Service in {areaName} • 90 Days Warranty</p>
      </section>

      {/* TABLE */}
      <section style={{padding:'20px', maxWidth:'700px', margin:'auto'}}>
        <table style={{width:'100%', borderCollapse:'collapse'}} border="1" cellPadding="10">
          <tr style={{background:'black', color:'white'}}><th>Service</th><th>Price</th></tr>
          <tr><td>{brandName} Repair in {areaName}</td><td>Rs 299</td></tr>
          <tr><td>Deep Cleaning</td><td>Rs 799</td></tr>
          <tr><td>Filter Replacement</td><td>Rs 1499</td></tr>
        </table>
        <div style={{textAlign:'center', marginTop:'20px'}}>
          <a href="tel:8744009933" style={{background:'black', color:'white', padding:'14px 28px', borderRadius:'30px', textDecoration:'none', fontWeight:'bold'}}>CALL 8744009933</a>
        </div>
      </section>
    </main>
  )
}
