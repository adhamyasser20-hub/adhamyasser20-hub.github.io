// Editable bits: rotating hero words ("words"), everything else is plain HTML in index.html.
const $=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches, fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
const lerp=(a,b,t)=>a+(b-a)*t, clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
// loader
addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('done'),450));
// split text into masked words
$('[data-split]').forEach(el=>{
  const t=el.textContent.trim().split(/\s+/);el.setAttribute('aria-label',el.textContent.trim());el.textContent='';
  t.forEach((w,i)=>{const o=document.createElement('span');o.className='w';o.setAttribute('aria-hidden','true');const s=document.createElement('span');s.textContent=w;s.style.transitionDelay=(i*0.09)+'s';o.appendChild(s);el.appendChild(o)});
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$('.reveal,.reveal-left,.reveal-right,[data-split]').forEach(el=>io.observe(el));
// counters
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
  const n=+e.target.dataset.count,t0=performance.now();
  (function step(t){const p=clamp((t-t0)/1600);e.target.textContent=Math.round(n*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(step)})(t0);
}),{threshold:.6});
$('[data-count]').forEach(el=>cio.observe(el));
// rotating words
const words=['books','Excel tools','story videos','side projects'];let wi=0;
const rot=document.getElementById('rotator'),rs=rot.firstElementChild;
const subEl=rot.closest('.sub');
function reserveSub(){if(!subEl)return;var ws=window.__rotWords||words,cur=rs.textContent,mx=0;subEl.style.minHeight='';ws.forEach(function(w){rs.textContent=w;mx=Math.max(mx,subEl.getBoundingClientRect().height)});rs.textContent=cur;subEl.style.minHeight=Math.ceil(mx)+'px'}
reserveSub();addEventListener('resize',reserveSub);addEventListener('langchange',function(){setTimeout(reserveSub,0)});addEventListener('load',reserveSub);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(reserveSub);
setInterval(()=>{rot.classList.add('out');setTimeout(()=>{var ws=window.__rotWords||words;wi=(wi+1)%ws.length;rs.textContent=ws[wi];rot.classList.remove('out')},350)},2600);
// hero particle network
(function(){
  const c=document.getElementById('net'),x=c.getContext('2d');let W,H,P=[],m={x:-999,y:-999};
  function size(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;const n=Math.min(90,Math.floor(W*H/17000));P=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
  size();addEventListener('resize',size);
  addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();m.x=e.clientX-r.left;m.y=e.clientY-r.top});
  function draw(){x.clearRect(0,0,W,H);
    for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<140){p.x+=dx/d*1.6;p.y+=dy/d*1.6}
      x.fillStyle='rgba(255,255,255,.7)';x.beginPath();x.arc(p.x,p.y,1.5,0,7);x.fill()}
    for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<130){x.strokeStyle=`rgba(150,130,255,${(1-d/130)*.35})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
    for(const p of P){const d=Math.hypot(p.x-m.x,p.y-m.y);if(d<170){x.strokeStyle=`rgba(255,176,32,${(1-d/170)*.6})`;x.beginPath();x.moveTo(p.x,p.y);x.lineTo(m.x,m.y);x.stroke()}}
    if(!document.hidden)requestAnimationFrame(draw);else setTimeout(draw,300)}
  if(!rm)draw();
})();
// cursor glow, magnetic buttons, tilt + glare, hero parallax
const cur=document.getElementById('cursor');
if(fine&&!rm){
  addEventListener('mousemove',e=>{cur.style.opacity=1;cur.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
  $('.magnet').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
  $('.tilt').forEach(c=>{
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
      c.style.transform=`perspective(900px) rotateY(${(px-.5)*9}deg) rotateX(${(.5-py)*9}deg) translateY(-4px)`;c.style.setProperty('--gx',px*100+'%');c.style.setProperty('--gy',py*100+'%')});
    c.addEventListener('mouseleave',()=>c.style.transform='');
  });
  const ph=document.getElementById('photoWrap');
  addEventListener('mousemove',e=>{const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;
    ph.querySelectorAll('.chip').forEach((c,i)=>{const k=(i%2?-1:1)*(14+i*6);c.style.transform=`translate(${nx*k}px,${ny*k}px)`});
    ph.querySelector('.frame').style.transform=`perspective(900px) rotateY(${nx*8}deg) rotateX(${-ny*8}deg)`});
}
// video cards: flip on hover (desktop) or tap (touch)
$('.flipbtn').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();b.closest('.vid').classList.toggle('flipped')}));
// video cards: play on hover/tap
$('.vid video').forEach(v=>{
  const vid=v.closest('.vid');
  if(fine){vid.addEventListener('mouseenter',()=>v.play().catch(()=>{}));vid.addEventListener('mouseleave',()=>{v.pause()})}
  else if('IntersectionObserver' in window){new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting&&!vid.classList.contains('flipped'))v.play().catch(()=>{});else v.pause()}),{threshold:.6}).observe(v)}
  v.addEventListener('click',()=>v.paused?v.play().catch(()=>{}):v.pause());
});
// scroll-driven: progress, nav, horizontal pin, timeline, parallax
const nav=document.getElementById('nav'),bar=document.getElementById('progress'),hs=document.querySelector('[data-hscroll]'),track=hs.querySelector('.htrack'),hbar=document.getElementById('hbar');
const tl=document.getElementById('timeline'),fill=document.getElementById('lineFill'),par=$('[data-parallax]');
const links=$('#menu a'),secs=links.map(a=>document.querySelector(a.getAttribute('href')));
let cur_x=0,tgt_x=0;
function onScroll(){
  const y=scrollY,h=document.documentElement;
  bar.style.width=(y/(h.scrollHeight-innerHeight)*100)+'%';
  nav.style.background=y>40?'rgba(10,12,24,.8)':'rgba(10,12,24,.55)';
  if(innerWidth>860){const r=hs.getBoundingClientRect(),p=clamp(-r.top/(hs.offsetHeight-innerHeight));tgt_x=-p*(track.scrollWidth-innerWidth+innerWidth*.14);hbar.style.width=(p*100)+'%'}
  const tr=tl.getBoundingClientRect();fill.style.height=clamp((innerHeight*.6-tr.top)/tr.height)*100+'%';
  par.forEach(p=>{const r=p.parentElement.getBoundingClientRect();p.style.transform=`translateY(${(r.top-innerHeight/2)*-.08}px)`});
  let on=-1;secs.forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top<innerHeight*.4&&r.bottom>innerHeight*.4)on=i});links.forEach((a,i)=>a.classList.toggle('on',i===on));
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
(function loop(){cur_x=lerp(cur_x,tgt_x,.09);if(innerWidth>860)track.style.transform=`translate3d(${cur_x}px,0,0)`;else track.style.transform='';requestAnimationFrame(loop)})();

;(function(){var b=document.getElementById('burger'),n=document.getElementById('nav');if(!b)return;b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded',false)})})})();

// failsafe: never leave split headings hidden
setTimeout(()=>$('[data-split]').forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight)el.classList.add('in')}),2500);

// payment details: blurred until the eye is pressed (mouse or touch)
document.querySelectorAll('.pay .eye').forEach(function(b){b.addEventListener('click',function(){var li=b.closest('li'),on=li.classList.toggle('show');b.setAttribute('aria-pressed',on)})});
