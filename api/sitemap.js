export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  
  const baseUrl = 'https://chimneyservicenoida.vercel.app';
  
  const BRANDS = ["siemens","hafele","kaff","glen","elica","bosch","faber","hindware","sunflame"];
  const AREAS = ["jaypee-greens","lotus-blvd-sec-100","supernova-sec-94","wish-town","klassic-sec-134","panache-sec-110","kosmos-sec-134","daffodil-sec-137","lotus-zing-sec-168","knightsbridge-sec-124","paras-tierea","aman-sec-151","aamantran-sec-119","pavilion-sec-128","espacia-sec-100","kensington-park","imperial-court","kalypso-court","krescent-homes","jaypee-greens-sec-128"];

  let urls = `<url><loc>${baseUrl}/</loc><lastmod>2026-10-04</lastmod><priority>1.0</priority></url>`;

  BRANDS.forEach(brand => {
    AREAS.forEach(area => {
      urls += `<url><loc>${baseUrl}/${brand}-chimney-service-${area}</loc><lastmod>2026-10-04</lastmod><priority>0.8</priority></url>`;
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.status(200).send(xml);
}
