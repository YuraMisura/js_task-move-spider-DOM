const t=document.querySelector(".wall"),e=document.querySelector("img");function i(t,i){return Math.min(Math.max(t-e.clientHeight/2,0),i)}//# sourceMappingURL=index.78165713.js.map
t.addEventListener("click",l=>{let{offsetX:n,offsetY:c}=l,h=t.clientWidth-e.clientWidth,o=t.clientHeight-e.clientHeight;e.style.left=i(n,h)+"px",e.style.top=i(c,o)+"px"});
//# sourceMappingURL=index.78165713.js.map
