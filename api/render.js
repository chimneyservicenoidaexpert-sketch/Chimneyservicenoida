const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const slug = req.url.replace(/^\/|\/$/g, '').toLowerCase();

  const brands = ["faber","elica","bosch","hindware","kaff","glen","siemens","hafele","sunflame"];
  const brandColors = {
    "faber": "#16a34a", // GREEN FOR FABER
    "elica": "#000000",
    "bosch": "#dc2626",
    "hindware": "#2563eb",
    "kaff": "#000000",
    "glen": "#ea580c",
    "siemens": "#009999",
    "hafele": "#7c3aed",
    "sunflame": "#dc2626"
  };
  const areas = {
    "jaypee-greens":"Jaypee Greens", "lotus-blvd-sec-100":"Lotus Blvd Sec 100",
    "supernova-sec-94":"Supernova Sec 94", "wish-town":"Wish Town",
    "klassic-sec-134":"Klassic Sec 134", "panache-sec-110":"Panache Sec 110",
    "kosmos-sec-134":"Kosmos Sec 134", "daffodil-sec-137":"Daffodil Sec 137",
    "lotus-zing-sec-168":"Lotus Zing Sec 168", "knightsbridge-sec-124":"Knightsbridge Sec 124",
    "paras-tierea":"Paras Tierea", "aman-sec-151":"Aman Sec 151",
    "aamantran-sec-119":"Aamantran Sec 119", "pavilion-sec-128":"Pavilion Sec 128",
    "espacia-sec-100":"Espacia Sec 100", "kensington-park":"Kensington Park",
    "imperial-court":"Imperial Court", "kalypso-court":"Kalypso Court",
    "krescent-homes":"Krescent Homes", "jaypee-greens-sec-128":"Jaypee Greens Sec 128"
  };

  let foundBrand = "Chimney";
  let foundBrandSlug = "";
  let foundArea = "Noida";
  brands.forEach(b => { if(slug.includes(b)){ foundBrand = b.charAt(0).toUpperCase()+b.slice(1); foundBrandSlug=b; } });
  for(let a in areas){ if(slug.includes(a)){ foundArea = areas[a]; break; } }

  let filePath = path.join(process.cwd(), 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');

  if(slug && slug!== 'index.html'){
    html = html.replace(/<title id="seoTitle">.*?<\/title>/, `<title id="seoTitle">${foundBrand} Chimney Service in ${foundArea} | Repair, Deep Cleaning in ${foundArea} | 90 Days Warranty</title>`);
    html = html.replace(/<title>.*?<\/title>/, `<title>${foundBrand} Chimney Service in ${foundArea} | Repair, Deep Cleaning in ${foundArea} | 90 Days Warranty</title>`);
    html = html.replace(/<h1 id="mainH".*?<\/h1>/s, `<h1 id="mainH" style="font-size:29px;font-weight:900;line-height:34px;margin:18px 0 4px;color:#fff">${foundBrand} Chimney Service in ${foundArea}, Noida</h1>`);

    // FABER GREEN LOGIC
    if(foundBrandSlug === 'faber'){
      let green = brandColors['faber'];
      html = html.replace(/FABER CARE NOIDA - INDEPENDENT SERVICE PROVIDER FOR FABER - JAYPEE GREENS/g, `FABER CARE NOIDA - INDEPENDENT SERVICE PROVIDER FOR FABER - ${foundArea.toUpperCase()}`);
      // top bar ko green karo
      html = html.replace(/background:#000;color:#fff;padding:8px/g, `background:${green};color:#fff;padding:8px`);
      // H1 ke Faber word ko green karo
      html = html.replace(new RegExp(`<h1 id="mainH"`, 'g'), `<h1 id="mainH" style="font-size:29px;font-weight:900;line-height:34px;margin:18px 0 4px;color:#fff"><span style="color:${green};background:#fff;padding:2px 8px;border-radius:8px;">Faber</span> Chimney Service in ${foundArea}, Noida</h1><h1 style="display:none;"`);
    }
  }

  res.setHeader('Content-Type', 'text/html');
  return res.send(html);
};
