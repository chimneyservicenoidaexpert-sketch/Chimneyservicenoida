export default function handler(req, res) {
  const base = "https://chimneyservicenoida.vercel.app";
  const brands = ["elica","faber","hindware","glen","kaff","sunflame","bosch","kutchina","whirlpool"];
  const areas = ["jaypee-greens","lotus-blvd-sec-100","wish-town","paras-tierea","jaypee-wishtown","lotus-boulevard","3c-lotus-boulevard","supernova-spira","jaypee-kosmos","mahagun-modern","antriksh-nature","lotus-panache","mahagun-manor","ats-one-hamlet","amrapali-princely-estate","jaypee-kensington-boulevard","jaypee-kasa-isles","jaypee-pavilion-court","jaypee-pavilion-heights","jaypee-krescent-homes"];
  const urls = ["",...brands.flatMap(b => areas.map(a => `/${b}-chimney-service-${a}`))];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(u => `<url><loc>${base}${u}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>`).join("")}</urlset>`;
  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(xml);
}
