module.exports = (req, res) => {
  const brands = ["faber","elica","bosch","hindware","kaff","glen","siemens","hafele","sunflame"];
  const areas = ["jaypee-greens","lotus-blvd-sec-100","supernova-sec-94","wish-town","klassic-sec-134","panache-sec-110","kosmos-sec-134","daffodil-sec-137","lotus-zing-sec-168","knightsbridge-sec-124","paras-tierea","aman-sec-151","aamantran-sec-119","pavilion-sec-128","espacia-sec-100","kensington-park","imperial-court","kalypso-court","krescent-homes","jaypee-greens-sec-128"];
  const base = "https://chimneyservicenoida.vercel.app";
  let urls = [`<url><loc>${base}/</loc></url>`];
  brands.forEach(b=>{ areas.forEach(a=>{ urls.push(`<url><loc>${base}/${b}-chimney-service-${a}</loc></url>`); }); });
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
  res.setHeader('Content-Type','text/xml');
  res.send(xml);
};
