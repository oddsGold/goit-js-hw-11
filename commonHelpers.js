import{a as g,S as m,i as f}from"./assets/vendor-da186403.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="42527051-ab9ea8069b5c425aa0269f2a2",h={image_type:"photo",orientation:"horizontal",safesearch:!0},v=g.create({baseURL:"https://pixabay.com/api",headers:{Accept:"application/json"}}),L={async getImages(s){return await v.get(`?key=${y}&q=${encodeURIComponent(s)}`,{params:h}).then(a=>{if(parseInt(a.data.totalHits)<=0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return a.data})}},b=s=>{const a=document.querySelector(".gallery"),o=new m(".gallery .gallery-link",{className:"gallery-link",closeText:['<i class="fa fa-times">&#10006;</i>'],navText:['<i class="fa fa-angle-left">&lt;</i>','<i class="fa fa-angle-right">&gt;</i>'],captionsData:"alt",captionDelay:250});a.innerHTML="";const r=s.reduce((e,{webformatURL:t,largeImageURL:n,tags:l,likes:c,views:p,comments:u,downloads:d})=>`${e}<a class="gallery-link" href="${n}">
                          <img
                            class="gallery-image"
                            src="${t}"
                            alt="${l}"
                          />
                          <figcaption class="gallery__figcaption">
                             <div class="gallery__caption">Likes: <span>${c}</span></div>
                             <div class="gallery__caption">Views: <span>${p}</span></div>
                             <div class="gallery__caption">Comments: <span>${u}</span></div>
                             <div class="gallery__caption">Downloads: <span>${d}</span></div>
                          </figcaption>
                        </a>`,"");a.insertAdjacentHTML("beforeend",r),o.refresh()},S=document.querySelector(".form");S.addEventListener("submit",s=>{s.preventDefault();let a='<span class="loader"></span>';document.querySelector(".gallery").innerHTML=a;const o=document.querySelector("[name='search']");o.value.trim()!==""?(document.querySelector(".gallery").innerHTML=a,L.getImages(o.value.trim()).then(r=>{b(r.hits)}).catch(r=>{document.querySelector(".gallery").innerHTML="",console.error(r.message),i(r.message)})):i("The field cannot be empty")});const i=s=>{f.error({message:s,position:"topRight",timeout:5e3})};
//# sourceMappingURL=commonHelpers.js.map
