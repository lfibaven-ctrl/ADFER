const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const header=$("#header"), menu=$(".mobile-menu"), menuButton=$(".menu-button");
addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30),{passive:true});
function toggleMenu(open){menu.classList.toggle("open",open);menu.setAttribute("aria-hidden",String(!open));menuButton.setAttribute("aria-expanded",String(open));document.body.style.overflow=open?"hidden":""}
menuButton.onclick=()=>toggleMenu(true); $(".menu-close").onclick=()=>toggleMenu(false); $$(".mobile-menu a").forEach(a=>a.onclick=()=>toggleMenu(false)); addEventListener("keydown",e=>e.key==="Escape"&&toggleMenu(false));
$("#year").textContent=new Date().getFullYear();
$$('.select-package').forEach(button=>button.onclick=()=>{const name=button.closest('[data-package]').dataset.package;$("#package-field").value=name;$("#contacto").scrollIntoView({behavior:"smooth"})});
const form=$("#lead-form"), status=$(".form-status");
form.addEventListener("submit",async e=>{e.preventDefault();if(form.website.value)return;const button=$("button[type=submit]",form);button.disabled=true;status.textContent="Enviando…";const data=Object.fromEntries(new FormData(form));delete data.website;const cfg=window.ADFER_CONFIG||{};
  if(!cfg.SUPABASE_URL?.startsWith("https://")||cfg.SUPABASE_ANON_KEY?.startsWith("PEGA_")){status.textContent="Falta conectar Supabase en config.js.";button.disabled=false;return}
  try{const response=await fetch(`${cfg.SUPABASE_URL}/rest/v1/prospectos`,{method:"POST",headers:{apikey:cfg.SUPABASE_ANON_KEY,Authorization:`Bearer ${cfg.SUPABASE_ANON_KEY}`,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(data)});if(!response.ok)throw new Error(await response.text());form.reset();status.textContent="Gracias. Recibimos tus datos y nos pondremos en contacto."}catch(err){console.error(err);status.textContent="No pudimos enviar tus datos. Escríbenos por WhatsApp o inténtalo nuevamente."}finally{button.disabled=false}
});
const observer=new IntersectionObserver(entries=>entries.forEach(x=>x.isIntersecting&&x.target.classList.add("visible")),{threshold:.12});$$('section article,.intro,.steps').forEach(x=>observer.observe(x));
