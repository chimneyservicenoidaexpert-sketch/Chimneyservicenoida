import Link from "next/link"
export default function Footer(){
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
    {slug:"ats-village-noida-extension", name:"ATS Village Noida Ext"}
  ];
  return(
    <footer style={{background:'black',color:'white',padding:'40px 24px',marginTop:'50px'}}>
      <h3>We Serve in 10 Posh Areas of Noida</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}}>
        {areas.map(a=>(
          <div key={a.slug}><Link href={`/${a.slug}/siemens`} style={{color:'#ccc',textDecoration:'none',fontSize:'14px'}}>Chimney Repair in {a.name} →</Link></div>
        ))}
      </div>
      <div style={{borderTop:'1px solid #333',marginTop:'30px',paddingTop:'15px',fontSize:'11px',color:'#888'}}>
        <p>Independent Chimney Repair | Not Authorized Center.</p>
        <p>© 2026 Chimney Repair Noida</p>
      </div>
    </footer>
  )
}
