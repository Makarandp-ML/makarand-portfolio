const body=document.body;
const cursorFollower=document.querySelector('.cursor-follower');
window.addEventListener('pointermove',e=>{body.style.setProperty('--cursor-x',e.clientX+'px');body.style.setProperty('--cursor-y',e.clientY+'px');if(cursorFollower){cursorFollower.style.left=e.clientX+'px';cursorFollower.style.top=e.clientY+'px';cursorFollower.classList.add('is-active');}},{passive:true});
window.addEventListener('pointerout',e=>{if(!e.relatedTarget&&cursorFollower)cursorFollower.classList.remove('is-active');});
document.querySelectorAll('a,button').forEach(el=>{el.addEventListener('pointerenter',()=>cursorFollower?.classList.add('is-hovering'));el.addEventListener('pointerleave',()=>cursorFollower?.classList.remove('is-hovering'));});
const heroSection=document.querySelector('.hero');
const updateHeroScroll=()=>{if(!heroSection)return;const rect=heroSection.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(window.innerHeight-rect.top)/(window.innerHeight+rect.height)));heroSection.style.setProperty('--hero-scroll-progress',progress.toFixed(3));heroSection.classList.toggle('is-scroll-expanding',window.scrollY<rect.height);};
window.addEventListener('scroll',updateHeroScroll,{passive:true});updateHeroScroll();
const theme=document.getElementById('themeToggle');
theme.addEventListener('click',()=>{body.classList.toggle('light');theme.textContent=body.classList.contains('light')?'☾':'☼';});
const menu=document.getElementById('menuToggle');
const nav=document.getElementById('navLinks');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
const details={
n100:{eyebrow:'PROJECT 01 · FINANCIAL ANALYTICS',title:'N100 Financial Intelligence Platform',body:'<p>A financial analytics project for exploring company fundamentals and historical performance across Nifty 100 companies.</p><h3>Project areas</h3><ul><li>Company analysis and financial KPI exploration</li><li>Company screener and peer comparisons</li><li>Historical trends, including ROE exploration</li><li>ETL and data preparation with Python, Pandas, and SQLite</li></ul><p><strong>Tools:</strong> Python · Streamlit · SQLite · Pandas · Power BI.</p><p><a class="text-link" href="https://github.com/Makarandp-ML/N100-Financial-Intelligence-Platform" target="_blank" rel="noreferrer">View project repository ↗</a></p>'},
mutual:{eyebrow:'PROJECT 02 · CAPSTONE',title:'Mutual Fund Analytics Platform',body:'<p>This capstone focuses on analyzing mutual fund performance data and presenting financial patterns in an accessible way.</p><h3>Work described in your resume</h3><ul><li>Analysis of SIP inflows, NAV trends, and AUM using Python and SQL</li><li>Interactive Power BI dashboards for financial data</li><li>ETL workflows to clean, validate, and transform financial datasets</li></ul><p><strong>Tools:</strong> Python · SQL · Power BI.</p><p><a class="text-link" href="https://github.com/Makarandp-ML/Bluestock_MF_Capstone" target="_blank" rel="noreferrer">View capstone repository ↗</a></p>'},
ecommerce:{eyebrow:'PROJECT 03 · PLANNED BUILD',title:'AI-Powered E-commerce Sales & Profit Analysis',body:'<p><strong>Status: planned / upcoming — not yet completed.</strong> This project will explore sales, profit, product/category performance, regional trends, and discount patterns using an interactive analytics workflow.</p><h3>Planned build roadmap</h3><ol><li>Choose a documented public dataset and define business questions.</li><li>Clean and validate data using Python and Pandas.</li><li>Use SQL for aggregation and analytical queries.</li><li>Build a Power BI or Streamlit dashboard with filters and clear KPIs.</li><li>Add AI-assisted summaries only after grounding them in calculated metrics.</li><li>Document limitations, test calculations, and publish the code.</li></ol><p><strong>Planned stack:</strong> Python · Pandas · SQL · Streamlit/Power BI · optional Generative AI.</p><p>No business results or model accuracy are claimed yet.</p>'}
};
const modal=document.getElementById('projectModal');
if(modal){
 document.querySelectorAll('[data-project]').forEach(btn=>btn.addEventListener('click',()=>{const d=details[btn.dataset.project];if(!d)return;document.getElementById('modalEyebrow').textContent=d.eyebrow;document.getElementById('modalTitle').textContent=d.title;document.getElementById('modalBody').innerHTML=d.body;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.querySelector('.modal-close')?.focus();}));
 function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');}
 document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
}
const copyButton=document.getElementById('copyEmail');
if(copyButton)copyButton.addEventListener('click',async()=>{const feedback=document.getElementById('copyFeedback');try{await navigator.clipboard.writeText('makarandr.workin7@gmail.com');feedback.textContent='Email copied to clipboard.';}catch{feedback.textContent='Please copy: makarandr.workin7@gmail.com';}});
const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.appendChild(progress);
window.addEventListener('scroll',()=>{const total=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(total>0?(window.scrollY/total)*100:0)+'%';},{passive:true});
const revealTargets=document.querySelectorAll('.reveal, .principle-card, .skill-group, .project-card, .education-item, .experience-card, .contact-card');
revealTargets.forEach((el,index)=>{el.classList.add('scroll-reveal');el.style.setProperty('--reveal-delay',`${Math.min(index%4,3)*85}ms`);});
const revealObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px -15px 0px'}):null;
if(revealObserver)document.querySelectorAll('.scroll-reveal').forEach(el=>revealObserver.observe(el));
else document.querySelectorAll('.scroll-reveal').forEach(el=>el.classList.add('is-visible'));