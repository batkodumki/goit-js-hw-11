import{a as f,S as h,i as a}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="51422808-09cfa7462dc66736a72b15f6d",y="https://pixabay.com/api/",g=i=>f.get(y,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits),n=document.querySelector(".gallery"),d=document.querySelector(".loader-box"),L=new h(".gallery-item a",{captionsData:"alt",captionDelay:250}),b=i=>{const r=i.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:o,comments:p,downloads:u})=>`
         <li class="gallery-item">
        <a class="gallery-link" href="${l}">
            <img
                class="gallery-img"
                src="${s}"
                alt="${e}"
            />
        </a>
        <ul class="list-description">
            <li class="description">
                <h3 class="title">Likes</h3>
                <p class="text">${t}</p>
            </li>
            <li class="description">
                <h3 class="title">Views</h3>
                <p class="text">${o}</p>
            </li>
            <li class="description">
                <h3 class="title">Comments</h3>
                <p class="text">${p}</p>
            </li>
            <li class="description">
                <h3 class="title">Downloads</h3>
                <p class="text">${u}</p>
            </li>
        </ul>
    </li>
        `).join("");n.insertAdjacentHTML("beforeend",r),L.refresh()},x=()=>{n.innerHTML=""},$=()=>{d.classList.remove("hidden")},S=()=>{d.classList.add("hidden")},c=document.querySelector(".form");c.addEventListener("submit",i=>{i.preventDefault(),x();const r=i.target.elements.searchText.value.trim();if(!r)return a.error({title:"Please enter text",position:"topRight"});$(),g(r).then(s=>{s.length===0?a.error({title:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"topRight"}):b(s)}).catch(s=>{a.error({title:s.message})}).finally(()=>{S()}),c.reset()});
//# sourceMappingURL=index.js.map
