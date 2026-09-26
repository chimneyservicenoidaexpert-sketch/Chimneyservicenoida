export const dynamic = 'force-dynamic';

function Title(s){
  if(!s) return "";
  return s.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default async function BrandPage({ params }) {
  const p = await params;
  const area = Title(p.area);
  const brand = Title(p.brand);

  const titleList = [
    `${brand} Chimney Service in ${area} | Same Day Service`,
    `Best ${brand} Chimney Service Center in ${area} Noida`,
    `${brand} Chimney Cleaning & Repair in ${area} - 90 Days Warranty`,
    `Expert ${brand} Chimney Service in ${area} | Call 8744009933`
  ];

  const uniqueTitle = titleList[(area.length + brand.length) % titleList.length];

  return (
    <main style={{ fontFamily: 'system-ui', padding: '20px', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '26px', fontWeight: '900' }}>{uniqueTitle}</h1>
      <p>We provide specialized <b>{brand} Chimney Service in {area}</b>. Same day expert visit.</p>
      <ul>
        <li>{brand} Chimney Deep Cleaning in {area}</li>
        <li>{brand} Chimney Motor Repair in {area}</li>
        <li>{brand} Chimney Filter & Installation in {area}</li>
      </ul>
      <div style={{ background: '#000', color: '#fff', padding: '14px', borderRadius: '10px', textAlign: 'center', marginTop: '25px', fontWeight: '700' }}>
        {brand} Service in {area} - Call: 8744009933<br/>90 Days Warranty
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href={`/${p.area}`}>← Back to {area}</a> | <a href="/">Home</a>
      </div>
    </main>
  );
}
