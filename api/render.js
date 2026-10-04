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
    // Word Slideshow - NO PHOTO, only design box
    const wordSlider = `
    <div style="width:92%;margin:14px auto;background:linear-gradient(135deg,#111,#222);border:1.5px solid #16a34a;border-radius:16px;padding:14px 16px;min-height:70px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
      <div id="txt0" class="txtSlide" style="color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:23px;">${foundBrand} Chimney Service in ${foundArea}, Noida</div>
      <div id="txt1" class="txtSlide" style="color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:23px;display:none;"><span style="color:#16a34a;">30 Min Arrival</span> in ${foundArea}</div>
      <div id="txt2" class="txtSlide" style="color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:23px;display:none;">Expert ${foundBrand} Repair in ${foundArea}</div>
      <div id="txt3" class="txtSlide" style="color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:23px;display:none;">Deep Cleaning Service<br>${foundArea}, Noida</div>
      <div id="txt4" class="txtSlide" style="color:#fff;font-weight:900;font-size:18px;text-align:center;line-height:23px;display:none;">90 Days Warranty on ${foundBrand}</div>
      <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;gap:5px;">
        <span class="tdot" style="width:6px;height:6px;background:#16a34a;border-radius:50%;"></span><span class="tdot" style="width:6px;height:6px;background:rgba(255,255,255,.3);border-radius:50%;"></span><span class="tdot" style="width:6px;height:6px;background:rgba(255,255,255,.3);border-radius:50%;"></span><span class="tdot" style="width:6px;height:6px;background:rgba(255,255,255,.3);border-radius:50%;"></span><span class="tdot" style="width:6px;height:6px;background:rgba(255,255,255,.3);border-radius:50%;"></span>
      </div>
    </div>
    <script>
      let ti=0;
      setInterval(()=>{
        let t=document.getElementsByClassName("txtSlide");
        let d=document.getElementsByClassName("tdot");
        for(let i=0;i<t.length;i++) t[i].style.display="none";
        for(let i=0;i<d.length;i++) d[i].style.background="rgba(255,255,255,.3)";
        ti=(ti+1)%t.length;
        t[ti].style.display="block";
        d[ti].style.background="#16a34a";
      },2000);
    </script>
    <style>#mainH .green{color:#16a34a!important}</style>
    `;

    // Inject slideshow before H1
    html = html.replace(/<h1 id="mainH"/, wordSlider + '<h1 id="mainH"');

    // Faber ko green - sab jagah strong replace
    if(foundBrandSlug==='faber'){
      html = html.replace(/Faber Chimney Service/g, '<span style="color:#16a34a !important;">Faber</span> Chimney Service');
      html = html.replace(/>Faber Chimney/g, '><span class="green">Faber</span> Chimney');
      html = html.replace(/Is your Faber/g, 'Is your <span style="color:#16a34a;">Faber</span>');
    }
  }

  res.setHeader('Content-Type','text/html');
  return res.send(html);
};
