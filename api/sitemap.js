module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'no-store');

  const domain = "https://chimneyservicenoida.vercel.app";
  
  const brands = ["faber", "elica", "hindware", "bosch", "kaff", "glen", "siemens", "sunflame", "hafele"];
  
  const areas = [
    "jaypee-greens", "lotus-blvd-sec-100", "supernova-sec-94", "wish-town", 
    "klassic-sec-134", "panache-sec-110", "kosmos-sec-134", "daffodil-sec-137", 
    "lotus-zing-sec-168", "knightsbridge-sec-124", "paras-tierea", "aman-sec-151", 
    "aamantran-sec-119", "pavilion-sec-128", "espacia-sec-100", "kensington-park", 
    "imperial-court", "kalypso-court", "krescent-homes", "jaypee-greens-sec-128"
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
