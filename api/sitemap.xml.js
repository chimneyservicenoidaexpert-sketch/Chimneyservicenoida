module.exports = (req, res) => {
  const brands = ["faber","elica","bosch","hindware","kaff","glen","siemens","hafele","sunflame"];
  const areas = ["jaypee-greens","lotus-blvd-sec-100","supernova-sec-94","wish-town","klassic-sec-134","panache-sec-110","noida","greater-noida","sector-150-noida","sector-100-noida","ajnara-le-garden","cherry-county","gaur-city-1","gaur-city-2","golf-course","crossing-republik","indrapuram","vaishali","sector-62-noida","sector-18-noida"];
  const base = "https://chimneyservicenoida.vercel.app";
  
  let urls = [];
  urls.push(`<url><loc>${base}/</loc></url>`);
  
  brands.forEach(b => {
    areas.forEach(a => {
      urls.push(`<url><loc>${base}/${b}-chimney-service-${a}</loc></url>`);
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
  
  res.setHeader('Content-Type', 'text/xml');
  res.send(xml);
};
