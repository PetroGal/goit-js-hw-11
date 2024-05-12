import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>s.map(({id:o,webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:d})=>`<li class="gallery-item">
   <a class="gallery-link" href="${a}">
    <img
    id=${o}
      class="gallery-image"
      src="${r}"
      alt="${e}"
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
 </li>`).join(""),h="https://pixabay.com/api/",y="43776865-31502832095c6a436255fe0a5",f=s=>{const o=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${h}?key=${y}&q=${s}&${o}`).then(r=>{if(!r.ok)throw new Error;return r.json()})},g=document.querySelector(".search-form"),n=document.querySelector(".loader");let l=document.querySelector(".gallery");const L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){s.preventDefault();const o=s.target.elements.search.value.trim();if(o===""){l.innerHTML="",s.target.reset(),c.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}l.innerHTML="",n.classList.remove("is-hidden"),f(o).then(r=>{r.total===0&&c.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),l.innerHTML=u(r.hits.slice(0,9)),L.refresh()}).catch(function(r){console.log(r)}).finally(()=>{s.target.reset(),n.classList.add("is-hidden")})}g.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
