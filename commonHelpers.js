import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=o=>o.map(({id:s,webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:d})=>`<li class="gallery-item">
   <a class="gallery-link" href="">
    <img
    id=${s}
      class="gallery-image"
      src=${r}
      data-source=${a}
      alt=${e}
    />
   
    </a>
    <div class="image-properties">
      <div class="property-item">
        <h3 class="image-property-title">Likes</h3>
        <p class="image-property-data">${t}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Views</h3>
        <p class="image-property-data">${i}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Comments</h3>
        <p class="image-property-data">${p}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Downloads</h3>
        <p class="image-property-data">${d}</p>
      </div>
    </div>
 </li>`).join(""),u="https://pixabay.com/api/",h="43776865-31502832095c6a436255fe0a5",y=o=>{const s=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?key=${h}&q=${o}&${s}`).then(r=>{if(!r.ok)throw new Error;return r.json()})},f=document.querySelector(".search-form"),n=document.querySelector(".loader");let c=document.querySelector(".gallery");function g(o){o.preventDefault();const s=o.target.elements.search.value.trim();if(s===""){c.innerHTML="",o.target.reset(),l.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",n.classList.remove("is-hidden"),y(s).then(r=>{r.total===0&&l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=m(r.hits.slice(0,9))}).catch(function(r){console.log(r)}).finally(()=>{o.target.reset(),n.classList.add("is-hidden")})}f.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
