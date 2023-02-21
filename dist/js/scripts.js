let pokemonRepository=function(){let e=[];function t(t){e.push(t)}function n(){return e}function o(e){return fetch(e.detailsUrl).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.types=t.types}).catch(function(e){console.error(e)})}let i=document.querySelector("form");return i.addEventListener("submit",function(e){e.preventDefault();let t=i.querySelector("input").value.toLowerCase(),n=pokemonRepository.getAll().filter(function(e){return e.name.toLowerCase().includes(t)});document.querySelector(".pokemon-list").innerHTML="",n.forEach(function(e){pokemonRepository.addListItem(e)})}),{add:t,getAll:n,addListItem:function e(t){let n=document.querySelector(".pokemon-list"),o=document.createElement("li"),i=document.createElement("button");i.innerText=t.name,i.classList.add("button-class"),o.appendChild(i),n.appendChild(o),i.addEventListener("click",function(e){l(t)})},loadList:function e(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){t({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:o,showDetails:l};function l(e){o(e).then(function(){console.log(e);let t=document.getElementById("myModal"),n=document.getElementById("modal-title"),o=document.getElementById("modal-image"),i=document.getElementById("modal-height"),l=document.getElementById("modal-types"),r=document.getElementById("close-button");n.innerText=e.name,o.src=e.imageUrl,i.innerText="Height: "+e.height+"m",l.innerText="Types: "+e.types.map(e=>e.type.name).join(", "),t.style.display="block",r.addEventListener("click",function(){t.style.display="none"}),window.addEventListener("click",function(e){e.target===t&&(t.style.display="none")})})}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});