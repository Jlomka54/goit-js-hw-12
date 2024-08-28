import{a as m,S as L,i}from"./assets/vendor-KI8m5ffe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();m.defaults.baseURL="https://pixabay.com/api/";const f=async(t,e)=>{const o={params:{q:t,per_page:15,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"45535880-f63e8525243c88ed6c06e2baa"}};return await m.get("",o)},g=t=>`<li class="galerry-item">
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
</li>`,u=document.querySelector(".search-form"),l=document.querySelector(".gallery-list"),p=document.querySelector(".loader-js"),d=document.querySelector(".load-more-bt");let c=1,n="";const y=new L(".gallery-list a",{captionsData:"alt",captionDelay:250}),b=async t=>{try{t.preventDefault(),n=u.elements.search.value,c=1,l.innerHTML="";const{data:e}=await f(n,c);if(n.trim()===""){i.error({message:"Search value"});return}if(p.classList.add("loader"),e.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML="",u.reset(),p.classList.remove("loader");return}const o=e.hits.map(a=>g(a)).join("");p.classList.remove("loader"),l.innerHTML=o,y.refresh(),d.classList.remove("is-hidden"),e.total<=15&&d.classList.add("is-hidden")}catch(e){i.error({message:`${e}`})}},v=async t=>{try{c++;const{data:e}=await f(n,c),o=e.hits.map(a=>g(a)).join("");l.insertAdjacentHTML("beforeend",o),y.refresh(),c===Math.ceil(e.total/15)&&(d.classList.add("is-hidden"),i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),w()}catch(e){i.error({message:`${e}`})}},w=()=>{const t=l.firstElementChild,{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};u.addEventListener("submit",b);d.addEventListener("click",v);
//# sourceMappingURL=index.js.map
