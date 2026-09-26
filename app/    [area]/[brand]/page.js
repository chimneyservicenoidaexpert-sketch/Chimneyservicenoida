import Typewriter from "../../components/Typewriter"
export function generateStaticParams(){
  const areas=["jaypee-greens","wish-town-sector-128","sector-150-sports-city","sector-100-lotus-boulevard","sector-93b-supernova","sector-44-jaypee","sector-94-cleo-county","golf-course-sector-36","sector-107-lotus-300","ats-village-noida-extension"];
  const brands=["siemens","elica","hafele","bosch","glen","faber","kaff"];
  const p=[]; areas.forEach(a=>brands.forEach(b=>p.push({area:a,brand:b}))); return p;
}
export default function Page({params}){
  const Brand=params.brand.charAt(0).toUpperCase()+params.brand.slice(1);
  const Area=params.area.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  return(
    <div style={{fontFamily:'system-ui',background:'#f9f9f9',minHeight:'100vh'}}>
      <div style={{background:'#000',color:'#fff',padding:'8px 24px',display:'flex',justifyContent:'space-between',fontSize:'13px'}}><span>Independent {Brand} Repair in {Area}</span><span>📞 9810XXXXXX | 24x7</span></div>
      <div style={{maxWidth:'1150px',margin:'auto',display:'flex',gap:'24px',padding:'24px',flexWrap:'wrap'}}>
        <div style={{flex:'2',minWidth:'320px',background:'#fff',padding:'24px',borderRadius:'12px'}}>
          <div style={{fontSize:'13px',color:'#888'}}>Home / {Area} / {Brand}</div>
          <h1 style={{fontSize:'32px'}}><Typewriter texts={[`${Brand} Chimney Repair in ${Area}`,`${Brand} Service in ${Area}`]} /> - Independent</h1>
          <p>Looking for <b>{Brand} chimney repair in {Area}</b>? We provide independent {Brand} service in {Area} Noida. Same-day doorstep.</p>
          <table style={{width:'100%',borderCollapse:'collapse',margin:'20px 0'}}><tr style={{background:'#f1f1f1'}}><th style={{border:'1px solid #ddd',padding:'10px',textAlign:'left'}}>Service</th><th style={{border:'1px solid #ddd',padding:'10px',textAlign:'left'}}>Our Approach</th></tr><tr><td style={{border:'1px solid #ddd',padding:'10px'}}>Diagnostics</td><td style={{border:'1px solid #ddd',padding:'10px'}}>Airflow & PCB testing</td></tr><tr><td style={{border:'1px solid #ddd',padding:'10px'}}>Parts</td><td style={{border:'1px solid #ddd',padding:'10px'}}>Genuine {Brand} compatible</td></tr><tr><td style={{border:'1px solid #ddd',padding:'10px'}}>Service</td><td style={{border:'1px solid #ddd',padding:'10px'}}>2-Hour in {Area}</td></tr></table>
          <h2>Services in {Area}</h2><ul style={{lineHeight:'2'}}><li>{Brand} suction repair in {Area}</li><li>{Brand} motor & blower repair</li><li>{Brand} PCB repair</li><li>{Brand} filter cleaning</li></ul>
          <div style={{background:'#fff3cd',padding:'12px',borderRadius:'8px',fontSize:'12px'}}>Disclaimer: Independent service for {Brand} in {Area}. NOT authorized center.</div>
        </div>
        <div style={{flex:'1',minWidth:'300px'}}><div style={{background:'#000',color:'#fff',padding:'20px',borderRadius:'12px'}}><h3>Book {Brand} in {Area}</h3><a href="tel:9810XXXXXX" style={{display:'block',background:'#ff3b30',color:'#fff',textAlign:'center',padding:'12px',borderRadius:'6px',textDecoration:'none',marginTop:'10px'}}>CALL NOW - {Area}</a></div></div>
      </div>
    </div>
  )
}
