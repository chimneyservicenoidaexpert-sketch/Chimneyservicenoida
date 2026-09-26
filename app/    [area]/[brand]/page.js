export const dynamic = 'force-dynamic';

function TitleCase(str){
  if(!str) return "";
  return str.split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
}

export default function Page({ params }){
  const area = params?.area || "noida";
  const brand = params?.brand || "siemens";
  const areaName = TitleCase(area);
  const brandName = TitleCase(brand);

  return (
    <main style={{fontFamily:'system-ui', background:'#fff', minHeight:'100vh'}}>
      <header style={{background:'black', color:'white', padding:'14px 20px', display:'flex', justifyContent:'space-between'}}>
        <b>CHIMNEY EXPERT</b>
        <a href="tel:8744009933" style={{background:'white', color:'black', padding:'8px 14px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold'}}>CALL NOW</a>
      </header>
      <section style={{padding:'40px 20px', background:'#f7f7f7', textAlign:'center'}}>
        <h1 style={{fontSize:'30px', fontWeight:'900'}}>{brandName} Chimney Repair in {areaName}</h1>
        <p>Same Day Service in {areaName} - 90 Days Warranty</p>
      </section>
      <section style={{padding:'20px', maxWidth:'700px', margin:'auto'}}>
        <table style={{width:'100%', borderCollapse:'collapse'}} border="1" cellPadding="12">
          <tr style={{background:'black', color:'white'}}><th>Service</th><th>Price</th></tr>
          <tr><td>{brandName} Repair</td><td>Rs 299</td></tr>
          <tr><td>Deep Cleaning</td><td>Rs 799</td></tr>
        </table>
        <div style={{textAlign:'center', marginTop:'20px'}}>
          <a href="tel:8744009933" style={{background:'black', color:'white', padding:'14px 28px', borderRadius:'30px', textDecoration:'none'}}>CALL 8744009933</a>
        </div>
      </section>
    </main>
  )
}
