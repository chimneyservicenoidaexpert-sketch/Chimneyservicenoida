module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'no-store');

  const domain = "https://chimneyservicenoida.vercel.app";
  
  const brands = ["faber", "elica", "hindware", "bosch", "kaff", "glen", "siemens", "sunflame", "hafele"];
  
  const areas = [
    "noida", "jaypee-greens", "sector-150", "greater-noida", "noida-extension",
    "sector-50", "sector-62", "sector-18", "sector-137", "sector-76",
    "indirapuram", "vaishali", "vasundhara", "crossings-republik", "kaushambi",
    "gaur-city-1", "gaur-city-2", "tech-zone-4", "sector-135", "sector-52"
  ];

  let urls = `<url><loc>${domain}/</loc></url>`;
  
  brands.forEach(brand => {
    areas.forEach(area => {
      urls += `<url><loc>${domain}/${brand}-chimney-service-${area}</loc></url>`;
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.status(200).send(xml);
}
