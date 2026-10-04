const fs = require('fs');
const path = require('path');
module.exports = (req, res) => {
  const slug = req.url.replace(/^\/|\/$/g, '').toLowerCase();
  const brands = ["faber","elica","bosch","hindware","kaff","glen","siemens","hafele","sunflame"];
  const areas = {
    "jaypee-greens":"Jaypee Greens (Pari Chowk / Greater Noida)","lotus-blvd-sec-100":"Lotus Blvd Sec 100","supernova-sec-94":"Supernova Sec 94","wish-town":"Wish Town Sec 128","klassic-sec-134":"Klassic Sec 134","panache-sec-110":"Panache Sec 110","kosmos-sec-134":"Kosmos Sec 134","daffodil-sec-137":"Daffodil Sec 137","lotus-zing-sec-168":"Lotus Zing Sec 168","knightsbridge-sec-124":"Knightsbridge Sec 124","paras-tierea":"Paras Tierea","aman-sec-151":"Aman Sec 151","aamantran-sec-119":"Aamantran Sec 119","pavilion-sec-128":"Pavilion Sec 128","espacia-sec-100":"Espacia Sec 100","kensington-park":"Kensington Park","imperial-court":"Imperial Court","kalypso-court":"Kalypso Court","krescent-homes":"Krescent Homes","jaypee-greens-sec-128":"Jaypee Greens Sec 128"
  };
  let foundBrand="Chimney"; let foundBrandSlug=""; let foundArea="Noida";
  brands.forEach(b=>{ if(slug.includes(b)){foundBrand=b.charAt(0).toUpperCase()+b.slice(1); foundBrandSlug=b; } });
  for(let a in areas){ if(slug.includes(a)){foundArea=areas[a]; break;} }
  let html = fs.readFileSync(path.join(process.cwd(),'index.html'),'utf8');
  if(slug && slug !== 'index.html'){
    // --- AUTO GRAMMAR FIX ---
    html = html.replace(/We are NOT authorized service center of/gi, 'We are NOT an authorized service center for');
    html = html.replace(/90 Days Warranty is ONLY on Spare Parts \(Motor, PCB, Touch\) - Not on Service Visit Charges\./gi, '90 Days Warranty applies ONLY to Spare Parts (Motor, PCB, Touch) and does not cover Service Visit Charges.');
    html = html.replace(/Wishtown/gi, 'Wish Town Sec 128');
    html = html.replace(/Jaypee Wish Town/g, 'Wish Town Sec 128');

    const faberGreen = foundBrandSlug==='faber' ? `<span style="color:#16a34a;">${foundBrand}</span>` : foundBrand;
    const heroSlider = `
    <div id="heroSlider" style="margin:18px 0 10px;min-height:85px;position:relative;">
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;transition:opacity .5s;">${faberGreen} Chimney Service in ${foundArea}, Noida</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">Expert ${faberGreen} Repair in ${foundArea}</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">${faberGreen} Deep Cleaning in ${foundArea}</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">90 Days Warranty on ${faberGreen} Service</div>
      <div class="heroSlide" style="font-size:29px;font-weight:900;line-height:34px;color:#fff;position:absolute;width:100%;top:0;left:0;opacity:0;transition:opacity .5s;">30 Min Arrival in ${foundArea}, Noida</div>
    </div>
    <div style="display:flex;gap:6px;margin:8px 0 16px;"><span class="hdot" style="width:22px;height:4px;background:#16a34a;border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span><span class="hdot" style="width:8px;height:4px;background:rgba(255,255,255,.3);border-radius:10px;"></span></div>
    <script>let hi=0;setInterval(()=>{let h=document.getElementsByClassName("heroSlide");let d=document.getElementsByClassName("hdot");for(let i=0;i<h.length;i++){h[i].style.opacity="0";}for(let i=0;i<d.length;i++){d[i].style.background="rgba(255,255,255,.3)";d[i].style.width="8px";}hi=(hi+1)%h.length;h[hi].style.opacity="1";d[hi].style.background="#16a34a";d[hi].style.width="22px";},2500);</script>
    `;
    html = html.replace(/<div id="slideBox"[\s\S]*?<\/script>/g, '');
    html = html.replace(/<div style="width:92%;margin:14px[\s\S]*?<\/script>/g, '');
    html = html.replace(/<h1 id="mainH"[^>]*>.*?<\/h1>/s, heroSlider + '<h1 id="mainH" style="display:none;">'+foundBrand+' Chimney Service in '+foundArea+'</h1>');
    html = html.replace(/<title[^>]*>.*?<\/title>/, `<title>${foundBrand} Chimney Service in ${foundArea}, Noida | 30 Min Arrival</title>`);
  }
  res.setHeader('Content-Type','text/html');
  return res.send(html);
};
