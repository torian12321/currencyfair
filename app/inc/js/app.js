var _doc=document,_win=window,_btnNext=_doc.getElementById("btnNext"),init=function(){smoothScrolling(),_btnNext&&_btnNext.addEventListener("click",modal.open)},resize=function(){};_doc.addEventListener("DOMContentLoaded",init),_win.addEventListener("resize",resize);var modal=function(t){var n=t.querySelector(".modal"),e=t.querySelector(".modal-bg"),o=function(){n.classList.add("active")},i=function(){n.classList.remove("active")};return e&&e.addEventListener("click",i),{open:o,close:i}}(document),smoothScrolling=function(){function t(){function t(t){t.stopPropagation(),t.preventDefault(),i(t.target.hash,{duration:c})}[].slice.call(_doc.querySelectorAll("a")).filter(n).forEach(function(n){n.addEventListener("click",t,!1)})}function n(t){return"a"===t.tagName.toLowerCase()&&t.hash.length>0&&e(t.href)===a}function e(t){return t.slice(0,t.lastIndexOf("#"))}function o(){return"scrollBehavior"in _doc.documentElement.style}var i=function(t,n){function e(t){a=t-c,_win.scrollTo(0,r.easing(a,u,l,s)),a<s?requestAnimationFrame(e):o()}function o(){_win.scrollTo(0,u+l),"function"==typeof r.callback&&r.callback()}function i(t,n,e,o){return t/=o/2,t<1?e/2*t*t+n:(t--,-e/2*(t*(t-2)-1)+n)}var c,a,r={duration:n.duration,offset:n.offset||0,callback:n.callback,easing:n.easing||i},l="string"==typeof t?r.offset+_doc.querySelector(t).getBoundingClientRect().top:t,s="function"==typeof r.duration?r.duration(l):r.duration,u=_win.pageYOffset;requestAnimationFrame(function(t){c=t,e(t)})};if(o())return void(_doc.getElementById("css-support-msg").className="supported");var c=400,a=location.hash?e(location.href):location.href;t()};