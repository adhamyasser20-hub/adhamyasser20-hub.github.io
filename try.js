/* Try-it-live sheets. Sample data only. Everything lives in the page, nothing is saved, and a reload resets it. */
(function(){if(!window.__t)window.__t=function(s){return s};
var root=document.getElementById('trylab');if(!root)return;
function iso(d){return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2)}
function today(){var d=new Date();return new Date(d.getFullYear(),d.getMonth(),d.getDate())}
function off(n){var d=today();d.setDate(d.getDate()+n);return iso(d)}
function pd(s){var p=String(s).split('-');return new Date(+p[0],+p[1]-1,+p[2])}
function dd(s){if(!s)return 0;return Math.round((pd(s)-today())/864e5)}
function addM(s,n){var d=pd(s),day=d.getDate();d.setDate(1);d.setMonth(d.getMonth()+n);var last=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();d.setDate(Math.min(day,last));return iso(d)}
var S={
 inv:{sec:[1,4],step:1,tab:'Inventory',hint:'Change the current stock or the reorder point and watch the alert and the suggested order update.',
  cols:[['الصنف','t'],['الوحدة','t'],['الرصيد الحالي','n'],['حد إعادة الطلب','n'],['كمية الطلب المقترحة','c'],['الحالة','c']],
  rows:[['أرز بسمتي','كيلو',18,10],['سكر','كيلو',6,8],['زيت عباد الشمس','زجاجة',14,6],['شاي ليبتون','علبة',3,5],['مياه معدنية','زجاجة',40,24],['عصير برتقال','علبة',9,12],['مكرونة','كيس',25,15],['لبن','علبة',4,10]],
  calc:function(r){var o=r[3]*2-r[2];var low=r[2]<=r[3];return [low?o:0,low?'اطلب الآن':'كافي']},
  flag:function(c){return c[1]==='اطلب الآن'},
  sum:function(R,C){var n=0;C.forEach(function(c){if(c[1]==='اطلب الآن')n++});return [['Items','إجمالي الأصناف',R.length],['Need reorder','أصناف تحتاج إعادة طلب',n]]}},
 rent:{sec:[2],step:100,tab:'Rent tracker',hint:'Set the due date. Days left or days late are counted for you. Press the paid button and the due date moves to next month.',
  cols:[['الوحدة','t'],['المستأجر','t'],['الإيجار الشهري (جنيه)','n'],['تاريخ الاستحقاق','d'],['المتبقي','c'],['الحالة','c'],['','b']],dcol:3,mon:function(){return 1},
  rows:[['شقة 1 - سموحة','محمد عبد الله',4500,off(-6)],['شقة 2 - سموحة','سارة أحمد',4200,off(4)],['شقة 3 - ميامي','كريم صلاح',5000,off(11)],['محل 1 - فيكتوريا','حسام الدين',8000,off(-2)],['شقة 4 - سيدي بشر','منى علي',3800,off(0)],['شقة 6 - رشدي','هاني فؤاد',4000,off(19)]],
  calc:function(r){var d=dd(r[3]);return [d<0?'متأخر '+(-d)+' يوم':(d===0?'اليوم':'باقي '+d+' يوم'),d<0?'متأخر':(d<=7?'يستحق قريباً':'منتظم')]},
  flag:function(c){return c[1]!=='منتظم'},
  sum:function(R,C){var n=0,m=0,w=0;R.forEach(function(r,i){var d=dd(r[3]);if(d<0){n++;m+=r[2]}else if(d<=7)w++});return [['Late tenants','عدد المتأخرين',n],['Rent overdue','إيجارات متأخرة',m.toLocaleString('en-US')],['Due in 7 days','تستحق خلال 7 أيام',w]]}},
 sub:{sec:[1,2,3,5,7],step:10,tab:'Subscriptions',hint:'Set the renewal date. The days left count down on their own. Press the paid button and the renewal date moves ahead by one billing cycle.',
  cols:[['الاشتراك','t'],['الفئة','t'],['التكلفة (جنيه)','n'],['دورة الدفع',['شهري','ربع سنوي','سنوي']],['تاريخ التجديد','d'],['الحالة',['فعال','متوقف']],['الأيام المتبقية','c'],['الشهري المعادل','c'],['تنبيه','c'],['','b']],dcol:4,mon:function(r){return {'شهري':1,'ربع سنوي':3,'سنوي':12}[r[3]]},
  rows:[['نتفليكس','ترفيه',240,'شهري',off(5),'فعال'],['سبوتيفاي','ترفيه',80,'شهري',off(2),'فعال'],['يوتيوب بريميوم','ترفيه',90,'شهري',off(17),'فعال'],['نت WE','نت واتصالات',450,'شهري',off(-1),'فعال'],['موبايل فودافون','نت واتصالات',250,'شهري',off(9),'فعال'],['دومين الموقع','عمل',1200,'سنوي',off(120),'فعال'],['تطبيق لياقة','صحة',300,'ربع سنوي',off(40),'متوقف']],
  calc:function(r){var dv={'شهري':1,'ربع سنوي':3,'سنوي':12}[r[3]];var m=Math.round(r[2]/dv*10)/10;var d=dd(r[4]),off=r[5]==='متوقف';var al=off?'⏸ متوقف':(d<0?'متأخر':(d<=7?'يجدد قريباً':'عادي'));return [off?'':(d<0?'متأخر '+(-d)+' يوم':(d===0?'اليوم':d+' يوم')),m,al]},
  flag:function(c){return c[2]==='يجدد قريباً'||c[2]==='متأخر'},
  rowOff:function(r){return r[5]==='متوقف'},
  sum:function(R,C){var m=0,n=0;R.forEach(function(r,i){if(r[5]==='فعال'){m+=C[i][1];n++}});return [['Monthly total (active)','إجمالي شهري',Math.round(m).toLocaleString('en-US')],['Yearly total','إجمالي سنوي',Math.round(m*12).toLocaleString('en-US')],['Active','اشتراكات فعالة',n]]}},
 fl:{sec:[1,4],step:100,tab:'Freelance',hint:'Change the agreed price, the collected money or the status. The remaining amount and the alert update.',
  cols:[['العميل','t'],['البيان','t'],['السعر المتفق عليه','n'],['المحصل','n'],['الحالة',['جاري','تم التسليم','مدفوع جزئي','مدفوع بالكامل']],['الباقي','c'],['تنبيه','c']],
  rows:[['مطاعم زعفران','حملة إعلانية',2000,2000,'مدفوع بالكامل'],['متجر كيان','مونتاج فيديو',8000,8000,'مدفوع بالكامل'],['متجر كيان','حملة إعلانية',2000,1000,'مدفوع جزئي'],['مطاعم زعفران','مونتاج فيديو',2000,0,'جاري'],['مطاعم زعفران','تصوير منتجات',2000,0,'تم التسليم'],['عيادة النور','تصميم منيو',3500,1500,'مدفوع جزئي']],
  calc:function(r){var rem=r[2]-r[3];var al=r[3]>r[2]?'محصل أكتر من المتفق':(rem===0?'':(r[4]==='تم التسليم'?'سلّمت ولم تحصّل':(r[4]==='مدفوع جزئي'?'باقي فلوس':'')));return [rem,al]},
  flag:function(c){return c[1]!==''},
  sum:function(R,C){var t=0,c=0,a=0;R.forEach(function(r,i){t+=r[2];c+=r[3];a+=C[i][0]});return [['Agreed','إجمالي المتفق',t.toLocaleString('en-US')],['Collected','المحصل',c.toLocaleString('en-US')],['Still to collect','الباقي',a.toLocaleString('en-US')]]}}
};
var order=['inv','rent','sub','fl'],cur='inv',data={},openMap={};
function fresh(){order.forEach(function(k){data[k]=S[k].rows.map(function(r){return r.slice()})})}
fresh();
var hk0=location.hash.replace('#','');if(S[hk0])cur=hk0;
var tabs=root.querySelector('.try-tabs'),hint=root.querySelector('.try-hint'),box=root.querySelector('.try-sheet'),sumEl=root.querySelector('.try-sum');
order.forEach(function(k){var b=document.createElement('button');b.type='button';b.textContent=__t(S[k].tab);b.dataset.k=k;b.addEventListener('click',function(){cur=k;draw();try{history.replaceState(null,'','#'+k)}catch(e){}});tabs.appendChild(b)});
root.querySelector('.try-reset').addEventListener('click',function(){fresh();draw()});
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function calcAll(){var s=S[cur];return data[cur].map(function(r){return s.calc(r)})}
function update(){var s=S[cur],C=calcAll();var trs=box.querySelectorAll('tbody tr');data[cur].forEach(function(r,i){var nIn=0;s.cols.forEach(function(c){if(c[1]==='c'){}});var cells=trs[i].querySelectorAll('td.calc');cells.forEach(function(td,j){td.textContent=(typeof C[i][j]==='number')?C[i][j].toLocaleString('en-US'):C[i][j]});trs[i].classList.toggle('flag',!!s.flag(C[i]));trs[i].classList.toggle('off',!!(s.rowOff&&s.rowOff(r)))});
 sumEl.innerHTML=s.sum(data[cur],C).map(function(x){return '<div><b>'+esc(x[2])+'</b><span>'+esc(__t(x[0]))+' <i dir="rtl" lang="ar">'+esc(x[1])+'</i></span></div>'}).join('')}
function draw(){var s=S[cur];window.__waKey=cur;if(window.waFix)waFix();tabs.querySelectorAll('button').forEach(function(b){b.classList.toggle('on',b.dataset.k===cur)});hint.textContent=__t(s.hint);
 var h='<table dir="rtl" lang="ar"><thead><tr>'+s.cols.map(function(c){return '<th>'+esc(c[0])+'</th>'}).join('')+'</tr></thead><tbody>';
 data[cur].forEach(function(r,i){h+='<tr'+(openMap[cur+i]?' class="open"':'')+'>';s.cols.forEach(function(c,j){var cl=[],lb=' data-label="'+esc(c[0])+'"';if((s.sec||[]).indexOf(j)>-1)cl.push('sec');if(c[1]==='c')cl.push('calc');if(c[1]==='b')cl.push('btn-td');if(c[1]==='n'||c[1]==='d'||Array.isArray(c[1]))cl.push('ctl');if(j===0)cl.push('ttl');var ta='<td'+(cl.length?' class="'+cl.join(' ')+'"':'')+lb+'>';
  if(c[1]==='c'){h+=ta+'</td>'}else if(c[1]==='t'){h+=ta+'<span>'+esc(r[j])+'</span>'+(j===0&&(s.sec||[]).length?'<button type="button" class="more" data-i="'+i+'"></button>':'')+'</td>'}else if(c[1]==='d'){h+=ta+'<input type="date" data-i="'+i+'" data-j="'+j+'" value="'+r[j]+'"></td>'}else if(c[1]==='b'){h+=ta+'<button type="button" class="paybtn" data-i="'+i+'">تم الدفع</button></td>'}else if(c[1]==='n'){h+=ta+'<div class="num"><button type="button" class="st" data-d="-1" aria-label="-">&minus;</button><input type="number" inputmode="decimal" data-i="'+i+'" data-j="'+j+'" value="'+r[j]+'"><button type="button" class="st" data-d="1" aria-label="+">+</button></div></td>'}else{h+=ta+'<select data-i="'+i+'" data-j="'+j+'">'+c[1].map(function(o){return '<option'+(o===r[j]?' selected':'')+'>'+o+'</option>'}).join('')+'</select></td>'}});h+='</tr>'});
 box.innerHTML=h+'</tbody></table>';
 box.querySelectorAll('input,select').forEach(function(el){el.addEventListener('input',function(){var v=el.value;data[cur][+el.dataset.i][+el.dataset.j]=el.type==='date'?v:(el.tagName==='INPUT'?(parseFloat(v)||0):v);update()})});
 box.querySelectorAll('.st').forEach(function(bt){bt.addEventListener('click',function(){var inp=bt.parentNode.querySelector('input'),st=S[cur].step||1,v=(parseFloat(inp.value)||0)+(+bt.dataset.d)*st;if(v<0)v=0;inp.value=v;inp.dispatchEvent(new Event('input',{bubbles:true}))})});
 box.querySelectorAll('.more').forEach(function(bt){var tr=bt.closest('tr'),k=cur+bt.dataset.i;function lab(){bt.textContent=__t(tr.classList.contains('open')?'Fewer details':'More details');bt.setAttribute('aria-expanded',tr.classList.contains('open'))}lab();bt.addEventListener('click',function(){var o=tr.classList.toggle('open');openMap[k]=o;lab()})});
 box.querySelectorAll('.paybtn').forEach(function(bt){bt.addEventListener('click',function(){var r=data[cur][+bt.dataset.i],sx=S[cur];if(sx.rowOff&&sx.rowOff(r))return;r[sx.dcol]=addM(r[sx.dcol],sx.mon(r));draw()})});
 update()}
draw();
addEventListener('hashchange',function(){var k=location.hash.replace('#','');if(S[k]){cur=k;draw()}});
window.__t=window.__t||function(s){return s};
addEventListener('langchange',function(){tabs.querySelectorAll('button').forEach(function(b){b.textContent=__t(S[b.dataset.k].tab)});draw()});
/* no export or save in this widget: block copy and context menu inside the sheet */
['copy','cut','contextmenu','dragstart'].forEach(function(ev){box.addEventListener(ev,function(e){if(ev==='copy'||ev==='cut'||ev==='contextmenu'||ev==='dragstart')e.preventDefault()})});
})();
