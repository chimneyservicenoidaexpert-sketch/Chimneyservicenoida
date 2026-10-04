const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const slug = req.url.replace(/^\/|\/$/g, '').toLowerCase();
  const brands = ["faber","elica","bosch","hindware","kaff","glen","siemens","hafele","sunflame"];
  const areas = {
    "jaypee-greens":"Jaypee Greens","lotus-blvd-sec-100":"Lotus Blvd Sec 100","supernova-sec-94":"Supernova Sec 94","wish-town":"Wish Town","klassic-sec-134":"Klassic Sec 134","panache-sec-110":"Panache Sec 110","kosmos-sec-134":"Kosmos Sec 134","daffodil-sec-137":"Daffodil Sec 137","lotus-zing-sec-168":"Lotus Zing Sec 168","knightsbridge-sec-124":"Knightsbridge Sec 124","paras-tierea":"Paras Tierea","aman-sec-151":"Aman Sec 151","aamantran-sec-119":"Aamantran Sec 119","pavilion-sec-128":"Pavilion Sec 128","espacia-sec-100":"Espacia Sec 100","kensington-park":"Kensington Park","imperial-court":"Imperial Court","kalypso-court":"Kalypso Court","krescent-homes":"Krescent Homes","jaypee-greens-sec-128":"Jaypee Greens Sec 128"
  };
  let foundBrand="Chimney"; let foundBrandSlug=""; let foundArea="Noida";
  brands.forEach(b=>{ if(slug.includes(b)){foundBrand=b.charAt(0).toUpperCase()+b.slice(1); foundBrandSlug=b; } });
  for(let a in areas){ if(slug.includes(a)){foundArea=areas[a]; break;} }

  let html = fs.readFileSync(path.join(process.cwd(),'index.html'),'utf8');

  if(slug && slug !== 'index.html'){
    // TITLE
    html = html.replace(/<title[^>]*>.*?<\/title>/, `<title>${foundBrand} Chimney Service in ${foundArea}, Noida | 30 Min Arrival</title>`);
    
    // H1 - Sirf Faber word green
    if(foundBrandSlug==='faber'){
      html = html.replace(/<h1 id="mainH"[^>]*>.*?<\/h1>/s, `<h1 id="mainH" style="font-size:28px;font-weight:900;line-height:33px;margin:18px 0 4px;color:#fff"><span style="color:#16a34a;">Faber</span> Chimney Service in ${foundArea}, Noida</h1>`);
    } else {
      html = html.replace(/<h1 id="mainH"[^>]*>.*?<\/h1>/s, `<h1 id="mainH" style="font-size:28px;font-weight:900;line-height:33px;margin:18px 0 4px;color:#fff">${foundBrand} Chimney Service in ${foundArea}, Noida</h1>`);
    }

    // SLIDESHOW WITH BLUR + TEXT - 5 slides
    const slides = `
    <div id="slideBox" style="position:relative;width:92%;height:185px;border-radius:20px;overflow:hidden;margin:14px auto;">
      <div class="mySlides" style="width:100%;height:185px;position:relative;">
        <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" style="width:100%;height:185px;object-fit:cover;filter:blur(1.5px) brightness(0.55);">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:22px;text-shadow:0 2px 10px rgba(0,0,0,.9);width:90%;">${foundBrand} Chimney Service<br>in ${foundArea}, Noida</div>
      </div>
      <div class="mySlides" style="width:100%;height:185px;position:relative;display:none;">
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600" style="width:100%;height:185px;object-fit:cover;filter:blur(1.5px) brightness(0.55);">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:22px;text-shadow:0 2px 10px rgba(0,0,0,.9);width:90%;">Expert ${foundBrand} Repair<br>in ${foundArea}</div>
      </div>
      <div class="mySlides" style="width:100%;height:185px;position:relative;display:none;">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" style="width:100%;height:185px;object-fit:cover;filter:blur(1.5px) brightness(0.55);">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:22px;text-shadow:0 2px 10px rgba(0,0,0,.9);width:90%;">Deep Cleaning Service<br>${foundArea}, Noida</div>
      </div>
      <div class="mySlides" style="width:100%;height:185px;position:relative;display:none;">
        <img src="https://images.unsplash.com/photo-1629237680348-4f9376c5c1e2?w=600" style="width:100%;height:185px;object-fit:cover;filter:blur(1.5px) brightness(0.55);">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:22px;text-shadow:0 2px 10px rgba(0,0,0,.9);width:90%;">90 Days Warranty on<br>${foundBrand} Service</div>
      </div>
      <div class="mySlides" style="width:100%;height:185px;position:relative;display:none;">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" style="width:100%;height:185px;object-fit:cover;filter:blur(1.5px) brightness(0.55);">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:22px;text-shadow:0 2px 10px rgba(0,0,0,.9);width:90%;">30 Min Arrival in<br>${foundArea}</div>
      </div>
      <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;gap:6px;">
        <span class="dot" style="width:8px;height:8px;background:#fff;border-radius:50%;"></span><span class="dot" style="width:8px;height:8px;background:rgba(255,255,255,.4);border-radius:50%;"></span><span class="dot" style="width:8px;height:8px;background:rgba(255,255,255,.4);border-radius:50%;"></span><span class="dot" style="width:8px;height:8px;background:rgba(255,255,255,.4);border-radius:50%;"></span><span class="dot" style="width:8px;height:8px;background:rgba(255,255,255,.4);border-radius:50%;"></span>
      </div>
    </div>
    <script>let si=0;setInterval(()=>{let s=document.getElementsByClassName("mySlides"),d=document.getElementsByClassName("dot");for(let i=0;i<s.length;i++)s[i].style.display="none";for(let i=0;i<d.length;i++)d[i].style.background="rgba(255,255,255,.4)";si=(si+1)%s.length;s[si].style.display="block";d[si].style.background="#fff";},2500);</script>
    `;
    // H1 ke upar inject karo
    html = html.replace(/<h1 id="mainH"/, slides + '<h1 id="mainH"');
  }

  res.setHeader('Content-Type','text/html');
  return res.send(html);
};
