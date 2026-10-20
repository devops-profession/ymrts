(()=>{
const WA='971588070262';
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ic=n=>`<svg class="i" aria-hidden="true"><use href="#i-${n}"/></svg>`;

// [icon, title, mega one-liner, full description]
const S=[
['ac','AC & HVAC Services','Repair, servicing, gas refill','Repair, servicing, gas refilling, installation, and full maintenance of split, central, and HVAC systems for optimal cooling and energy efficiency.','./assets/images/services/ac-and-hvac-services.webp'],
['elec','Electrical Works','Wiring, lights, power systems','Safe installation, repair, and maintenance of wiring, switches, lights, sockets, power systems, and general electrical solutions.','./assets/images/services/electrical-works.webp'],
['plumb','Plumbing Services','Leaks, drains, emergencies','Pipe repairs, drain cleaning, leak fixes, bathroom/kitchen plumbing, and emergency plumbing solutions.','./assets/images/services/plumbing-works.webp'],
['floor','Flooring & Tiling Works','Tiles, hardwood, vinyl','Professional installation and repair of floor and wall tiles, hardwood, vinyl, carpets, and other quality flooring.','./assets/images/services/flooring-and-tiling-works.webp'],
['paint','Painting & Wall Finishing','Painting, plaster, wallpaper','Interior and exterior painting, plastering, cladding, and wallpaper with premium, durable finishes.','./assets/images/services/painting-and-wall-finishing.webp'],
['carp','Carpentry & Joinery','Cabinets, doors, furniture','Custom cabinetry, furniture, doors, shelves, wooden partitions, and quality woodwork tailored to your space.','./assets/images/services/carpentry-and-joinery.webp'],
['gyp','Gypsum, Ceiling & Partition Works','False ceilings & partitions','Gypsum false ceilings, wall partitions, and related works that combine aesthetics, privacy, and functionality.','./assets/images/services/gypsum-ceiling-and-partition-works.webp'],
['fit','Interior Fit-out & Design','Turnkey concept to handover','Complete turnkey fit-out including space planning, 3D drawings, approvals, layout design, and full execution.','./assets/images/services/interior-fit-out-and-design.webp'],
['glass','Glass & Aluminium Partition Works','Open, elegant workspaces','Modern glass and aluminium partitions for offices, retail, and commercial environments.','./assets/images/services/glass-and-aluminium-partition-works.webp'],
['clean','Cleaning Services','Deep, regular, move-in/out','Deep cleaning, regular maintenance cleaning, and move-in/move-out cleaning using safe, effective methods.','./assets/images/services/cleaning-services.webp'],
['fire','Fire Alarm & Safety Systems','Compliant alarm & fire-fighting','Supply, installation, and maintenance of compliant fire alarm and fire-fighting systems.','./assets/images/services/fire-alarm-and-safety-systems.webp'],
['demo','Demolition Works','Safe site preparation','Safe and efficient demolition and site preparation that protects the surrounding area.','./assets/images/services/demolition-works.webp']];
const H=[['fit','Residential & Commercial clients'],['chk','Free, no-obligation quotes'],['phone','Clear communication and scheduled updates'],['carp','Quality materials and skilled workmanship'],['elec','Same-day response for many urgent jobs'],['paint','Transparent pricing — no surprise charges']];
const W=['Same-day response on many requests','Client-specific solutions, not one-size-fits-all packages','Experienced, skilled technicians','High-quality craftsmanship and materials','Full customer satisfaction focus','Fair, transparent pricing with no hidden charges','Clean, tidy work sites','One accountable team for multiple trades'];
const G=[['Fit-out','Office fit-out','#1B3A4B'],['AC & MEP','AC installation','#4A7C7C'],['Painting','Villa repaint','#C17A5A'],['Fit-out','Gypsum ceiling','#2D3436'],['AC & MEP','Electrical panel','#5B8A72'],['Painting','Feature wall','#D4A574'],['Fit-out','Glass partitions','#1B3A4B'],['AC & MEP','Plumbing works','#4A7C7C']];

$('#mega-list').innerHTML=S.map(s=>`<a href="#services">${ic(s[0])}<span><b>${s[1]}</b><small>${s[2]}</small></span></a>`).join('');
$('#svc-grid').innerHTML=S.map(s=>`<article class="card svc"><img src="${s[4]}" alt="${s[1]}"/><div class="b">${ic(s[0])}<h3>${s[1]}</h3><p>${s[3]}</p><a href="#contact">Learn more →</a></div></article>`).join('');
$('#highlights').innerHTML=H.map(h=>`<div class="card">${ic(h[0])}<p>${h[1]}</p></div>`).join('');
$('#why-grid').innerHTML=W.map(w=>`<div class="card row">${ic('chk')}<p>${w}</p></div>`).join('');
$('#form select').insertAdjacentHTML('beforeend',S.map(s=>`<option>${s[1]}</option>`).join(''));
$('#yr').textContent=new Date().getFullYear();

// Gallery + filters + lightbox
const cats=['All',...new Set(G.map(g=>g[0]))],gal=$('#gal'),lb=$('#lb');
gal.innerHTML=G.map((g,i)=>`<button data-c="${g[0]}" data-i="${i}" style="background:${g[2]}" aria-label="Open ${g[1]}">${g[1]}</button>`).join('');
$('#filters').innerHTML=cats.map((c,i)=>`<button aria-pressed="${!i}" data-f="${c}">${c}</button>`).join('');
$('#filters').onclick=e=>{const f=e.target.dataset.f;if(!f)return;$$('#filters button').forEach(b=>b.setAttribute('aria-pressed',b===e.target));$$('button',gal).forEach(b=>b.hidden=f!=='All'&&b.dataset.c!==f)};
gal.onclick=e=>{const b=e.target.closest('button');if(!b)return;const g=G[b.dataset.i];$('#lb-img').style.background=g[2];$('#lb-img').textContent='Placeholder: '+g[1];$('#lb-cap').textContent=g[0]+' — '+g[1];lb.showModal()};
$('#lb-x').onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};

// Nav: mobile toggle, mega accordion, scroll effects
const nav=$('#nav'),burger=$('#burger'),mega=$('.has-mega');
burger.onclick=()=>burger.setAttribute('aria-expanded',nav.classList.toggle('open'));
$('#svc-link').onclick=e=>{if(innerWidth<=860){e.preventDefault();mega.classList.toggle('open');e.target.setAttribute('aria-expanded',mega.classList.contains('open'))}};
$$('a[href^="#"]',nav).forEach(a=>a.addEventListener('click',e=>{if(a.id!=='svc-link'||innerWidth>860){nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}}));
$$('#mega a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');mega.classList.remove('open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');mega.classList.remove('open')}});
const top=$('#top');
addEventListener('scroll',()=>{$('#hdr').classList.toggle('scrolled',scrollY>10);top.classList.toggle('show',scrollY>600)},{passive:true});
top.onclick=()=>scrollTo({top:0,behavior:'smooth'});

// Form: validate then open WhatsApp
$('#form').onsubmit=e=>{
  e.preventDefault();const f=e.target,n=$('#note');n.className='note';
  if(!f.checkValidity()){n.classList.add('err');n.textContent='Please fill in all required fields correctly.';f.reportValidity();return}
  const d=Object.fromEntries(new FormData(f));
  const t=`Hello YMR, I'm ${d.name}.${d.service?'\nService: '+d.service:''}\nMobile: ${d.mobile}\nEmail: ${d.email}\n${d.message}`;
  n.textContent='Opening WhatsApp…';
  open(`https://wa.me/${WA}?text=${encodeURIComponent(t)}`,'_blank','noopener');
};
})();
