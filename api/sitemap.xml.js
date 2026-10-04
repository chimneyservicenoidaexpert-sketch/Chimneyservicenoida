export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  const brands = ["faber","elica","hindware","glen","kaff","bosch","sunflame","prestige","haier"];
  const areas = ["jaypee-greens","lotus-blvd-sec-100","supernova-sec-94","wish-town","klassic-sec-134","panache-sec-110","kosmos-sec-134","daffodil-sec-137","lotus-zing-sec-168","knightsbridge-sec-124","paras-tierea","aman-sec-151","aamantran-sec-119","pavilion-sec-128","espacia-sec-100","kensington-park","imperial-court","kalypso-court","krescent-homes","jaypee-greens-sec-128"];
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
