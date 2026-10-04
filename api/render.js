const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const slug = req.url.replace(/^\/|\/$/g, '').toLowerCase();
  const brands = ["faber","elica","bosch","hindware","kaff","glen","siemens","hafele","sunflame"];
  
  const areas = {
    "jaypee-greens-sec-128": {name:"Jaypee Greens Sec 128", city:"Greater Noida", full:"Jaypee Greens Sec 128, Greater Noida"},
    "jaypee-greens": {name:"Jaypee Greens", city:"Greater Noida", full:"Jaypee Greens (Pari Chowk / Greater Noida)"},
    "lotus-blvd-sec-100": {name:"Lotus Blvd Sec 100", city:"Noida", full:"Lotus Blvd Sec 100, Noida"},
    "supernova-sec-94": {name:"Supernova Sec 94", city:"Noida", full:"Supernova Sec 94, Noida"},
    "wish-town": {name:"Wish Town Sec 128", city:"Noida", full:"Wish Town Sec 128, Noida"},
    "klassic-sec-134": {name:"Klassic Sec 134", city:"Noida", full:"Klassic Sec 134, Noida"},
    "panache-sec-110": {name:"Panache Sec 110", city:"Noida", full:"Panache Sec 110, Noida"},
    "kosmos-sec-134": {name:"Kosmos Sec 134", city:"Noida", full:"Kosmos Sec 134, Noida"},
    "daffodil-sec-137": {name:"Daffodil Sec 137", city:"Noida", full:"Daffodil Sec 137, Noida"},
    "lotus-zing-sec-168": {name:"Lotus Zing Sec 168", city:"Noida", full:"Lotus Zing Sec 168, Noida"},
    "knightsbridge-sec-124": {name:"Knightsbridge Sec 124", city:"Noida", full:"Knightsbridge Sec 124, Noida"},
    "paras-tierea": {name:"Paras Tierea Sec 137", city:"Noida", full:"Paras Tierea Sec 137, Noida"},
    "aman-sec-151": {name:"Aman Sec 151", city:"Noida", full:"Aman Sec 151, Noida"},
    "aamantran-sec-119": {name:"Aamantran Sec 119", city:"Noida", full:"Aamantran Sec 119, Noida"},
    "pavilion-sec-128": {name:"Pavilion Sec 128", city:"Noida", full:"Pavilion Sec 128, Noida"},
    "espacia-sec-100": {name:"Espacia Sec 100", city:"Noida", full:"Espacia Sec 100, Noida"},
    "kensington-park": {name:"Kensington Park", city:"Noida", full:"Kensington Park, Noida"},
    "imperial-court": {name:"Imperial Court", city:"Noida", full:"Imperial Court, Noida"},
    "kalypso-court": {name:"Kalypso Court", city:"Noida", full:"Kalypso Court, Noida"},
    "krescent-homes": {name:"Krescent Homes", city:"Noida", full:"Krescent Homes, Noida"}
  };

  let foundBrand="Chimney"; 
  let foundBrandSlug=""; 
  let foundAreaObj={name:"Noida", city:"Noida", full:"Noida"};

  brands.forEach(b=>{ if(slug.includes(b)){foundBrand=b.charAt(0).toUpperCase()+b.slice(1); foundBrandSlug=b; } });
  for(let a in areas){ if(slug.includes(a)){foundAreaObj=areas[a]; break;} }

  let html = fs.readFileSync(path.join(process.cwd(),'index.html'),'utf8');

  if(slug && slug !== 'index.html' && slug !== ''){
    
    // 1. GRAMMAR FIX - Jo Google ne bola tha
    html = html.replace(/We are NOT authorized service center of/gi, 'We are NOT an authorized service center for');
    html = html.replace(/90 Days Warranty is ONLY on Spare Parts \(Motor, PCB, Touch\) - Not on Service Visit Charges\./gi, '90 Days Warranty applies ONLY to Spare Parts (Motor, PCB, Touch) and does not cover Service Visit Charges.');

    // 2. SEO TITLE & DESCRIPTION - City wise
    const seoTitle = `${foundBrand} Chimney Service in ${foundAreaObj.full} | 30 Min Arrival | 90 Days Warranty`;
    const seoDesc = `Professional ${foundBrand} Chimney Repair, Deep Cleaning & Service in ${foundAreaObj.full}. Same Day Service in ${foundAreaObj.city}. Call Now for 30 Min Arrival. We are NOT an authorized service center for ${foundBrand}.`;
    html = html.replace(/<title[^>]*>.*?<\/title>/, `<title>${seoTitle}</title>`);
    if(html.includes('name="description"')){
      html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${seoDesc}">`);
    } else {
      html = html.replace(/<\/title>/, `</title>\n<meta name="description" content="${seoDesc}">`);
    }

    // 3. HERO SLIDESHOW - Bina black box ke, Faber hara
    const faberGreen = foundBrandSlug==='faber' ? `<span style="color:#16a34a;">${foundBrand}</span>` : foundBrand;
    
    const heroSlider = `
    <div id="heroSlider" style="margin:18px 0 10px;min-height:85px;position:relative;">
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;transition:opacity .5s;">${faberGreen} Chimney Service in ${foundAreaObj.full}</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">Expert ${faberGreen} Repair in ${foundAreaObj.name}</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">${faberGreen} Deep Cleaning in ${foundAreaObj.full}</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">90 Days Warranty on ${faberGreen} Service</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">30 Min Arrival in ${foundAreaObj.full}</div>
    </div>
    <div style="display:flex;gap:6px;margin:8px 0 16px;"><span class="hdot" style="width:22px;height:4px;background:#16a34a;border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span></div>
    <script>
      let hi=0;
      setInterval(()=>{
        let h=document.getElementsByClassName("heroSlide");
        let d=document.getElementsByClassName("hdot");
        if(!h.length) return;
        for(let i=0;i<h.length;i++){h[i].style.opacity="0";}
        for(let i=0;i<d.length;i++){d[i].style.background="rgba(255,255,255,.3)";d[i].style.width="8px";}
        hi=(hi+1)%h.length;
        h[hi].style.opacity="1";
        d[hi].style.background="#16a34a";d[hi].style.width="22px";
      },2500);
    </script>
    `;

    // Purane slideshow / H1 ko hatao
    html = html.replace(/<div id="slideBox"[\s\S]*?<\/script>/g, '');
    html = html.replace(/<div style="width:92%;margin:14px[\s\S]*?<\/script>/g, '');
    html = html.replace(/<div id="heroSlider"[\s\S]*?<\/script>/g, '');
    html = html.replace(/<div id="txt.*?<\/script>/gs, '');
    html = html.replace(/<h1 id="mainH"[^>]*>.*?<\/h1>/s, heroSlider + '<h1 id="mainH" style="display:none;">'+foundBrand+' Chimney Service in '+foundAreaObj.full+'</h1>');
  }

  res.setHeader('Content-Type','text/html');
  return res.send(html);
};
