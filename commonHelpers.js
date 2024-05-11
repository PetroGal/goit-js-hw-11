import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=s=>s.map(({id:o,webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:n,downloads:p})=>`<li class="gallery-item">
   <a class="gallery-link" href="">
    <img
    id=${o}
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
        <p class="image-property-data">${n}</p>
      </div>
      <div class="property-item">
        <h3 class="image-property-title">Downloads</h3>
        <p class="image-property-data">${p}</p>
      </div>
    </div>
 </li>`).join(""),d="https://pixabay.com/api/",u="43776865-31502832095c6a436255fe0a5",h=s=>{const o=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${d}?key=${u}&q=${s}&${o}`).then(r=>{if(!r.ok)throw new Error;return r.json()})},y=document.querySelector(".search-form"),f=document.querySelector(".loader");let c=document.querySelector(".gallery");function g(s){s.preventDefault();const o=s.target.elements.search.value.trim();if(o===""){c.innerHTML="",s.target.reset(),l.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",f.classList.remove("is-hidden"),h(o).then(r=>{r.total===0&&l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=m(r.hits.slice(0,9))}).catch(function(r){console.log(r)})}y.addEventListener("submit",g);
//# sourceMappingURL=commonHelpers.js.map
