export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  
  const brands = ["faber","elica","hindware","glen","kaff","bosch","sunflame","prestige","haier"];
  const areas = ["noida","sector-18-noida","sector-62-noida","indrapuram","vaishali","crossing-republik","golf-course-noida","greater-noida","jaypee-greens","wish-town","supernova-sec-94","ajnara-le-garden","cherry-county","gaur-city","golf-city","kingsbury","nipuna","palm-olympia","supertech-ecovillage","tech-zone-4"];
  const base = "https://chimneyservicenoida.vercel.app";

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  xml += `  <url><loc>${base}/</loc></url>\n`;

  brands.forEach(b => {
    areas.forEach(a => {
      xml += `  <url><loc>${base}/${b}-chimney-service-${a}</loc></url>\n`;
    });
  });

  xml += '</urlset>';

  res.status(200).send(xml);
}
