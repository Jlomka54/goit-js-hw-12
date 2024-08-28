import{a as u,S as L,i as l}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();u.defaults.baseURL="https://pixabay.com/api/";const f=async(t,e)=>{const a={params:{q:t,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"45535880-f63e8525243c88ed6c06e2baa"}};return await u.get("",a)},g=t=>`<li class="galerry-item">
    <a href="${t.largeImageURL}" ><img class="gallery-item-img" alt='${t.tags}' src='${t.webformatURL}'></img></a>
     <ul class="photo-info-list">
    <li class="photo-info-item">
        <h4>Likes</h4>
        <p class="photo-paragraph">${t.likes}</p>
</li>
    <li class="photo-info-item">
         <h4>Views</h4>
        <p class="photo-paragraph">${t.views}</p>
    </li>
    <li class="photo-info-item">
         <h4>Commenst</h4>
        <p class="photo-paragraph">${t.comments}</p>
    </li>
    <li class="photo-info-item">
        <h4>Downloads</h4>
        <p class="photo-paragraph">${t.downloads}</p>
</li>
</ul> 
</li>`,m=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),i=document.querySelector(".loader-js"),h=document.querySelector(".load-more-bt");let n=1,d="";const y=new L(".gallery-list a",{captionsData:"alt",captionDelay:250}),b=async t=>{try{t.preventDefault(),d=m.elements.search.value,i.classList.add("loader"),n=1,c.innerHTML="";const{data:e}=await f(d,n);if(d.trim()===""){l.error({message:"Search value"});return}if(i.classList.add("loader"),e.hits.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="",m.reset(),i.classList.remove("loader");return}const a=e.hits.map(o=>g(o)).join("");i.classList.remove("loader"),c.innerHTML=a,y.refresh(),h.classList.remove("is-hidden"),e.total<=15&&h.classList.add("is-hidden")}catch(e){l.error({message:`${e}`})}},v=async t=>{try{i.classList.add("loader"),n++;const{data:e}=await f(d,n),a=e.hits.map(o=>g(o)).join("");c.insertAdjacentHTML("beforeend",a),i.classList.remove("loader"),y.refresh(),n===Math.ceil(e.total/15)&&(h.classList.add("is-hidden"),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),w()}catch(e){l.error({message:`${e}`})}},w=()=>{const t=c.firstElementChild,{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};m.addEventListener("submit",b);h.addEventListener("click",v);
//# sourceMappingURL=index.js.map
