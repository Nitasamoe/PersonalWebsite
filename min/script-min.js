!function t(e){function s(t,e,s,n,o){if(e>s)var a=function r(t){l>s&&setTimeout(function(){s+=.01,n(t,s),r(t)},o)};else var a=function d(t){s>l?setTimeout(function(){s-=.01,n(t,s),d(t)},o):".blackBack"===t&&(c(t).style.display="none",c(i.active).style.display="none",i.active="none")};var s=s,l=e;a(t)}function n(t,s,n){var o=a(t),i=c(s),l=e.innerHeight/2,r=n.clientY-l,d=1/l;r>0&&o.forEach(function(t){t.style.opacity=1/l*r,i.style.opacity=1-1/l*r*2})}function o(t,s,n,o){var a=c(t),i=e.innerWidth/2,l=e.innerHeight/2,r=o.clientX-i,d=o.clientY-l,m=n/i*r,f=n/l*d;a.style.transform="rotateY("+2*m+"Deg) rotateX("+2*f+"Deg) translateX("+-m*s+"px) translateY("+-f*s+"px)"}function c(t){return document.getElementById(t)||document.querySelector(t)}function a(t){return document.querySelectorAll(t)}for(var i={doms:[".aboutClick",".projectsClick",".designClick"],doms2:[".aboutText",".projectsText",".designText"],ftns:[function(t,e){c(t).style.opacity=e},function(t,e){c(t).style.webkitTransform="scale("+e+")",c(t).style.mozTransform="scale("+e+")",c(t).style.msTransform="scale("+e+")",c(t).style.transform="scale("+e+")"}],active:"none"},l=0;l<i.doms.length;l++)c(i.doms[l]).addEventListener("click",function(t){switch(c(".blackBack").style.display="block",s(".blackBack",.9,0,i.ftns[0],5),s(".persp",.5,1,i.ftns[1],5),t.toElement||t.target){case c(".aboutClick"):s(i.doms2[0],1,2,i.ftns[1],1),s(i.doms2[0],1,0,i.ftns[0],1),c(i.doms2[0]).style.display="block",i.active=i.doms2[0];break;case c(".projectsClick"):s(i.doms2[1],1,2,i.ftns[1],1),s(i.doms2[1],1,0,i.ftns[0],1),c(i.doms2[1]).style.display="block",i.active=i.doms2[1];break;case c(".designClick"):s(i.doms2[2],1,2,i.ftns[1],1),s(i.doms2[2],1,0,i.ftns[0],1),c(i.doms2[2]).style.display="block",i.active=i.doms2[2]}});c(".blackBack").addEventListener("click",function(t){switch(s(".blackBack",0,.9,i.ftns[0],5),s(".persp",1,.5,i.ftns[1],5),i.active){case".aboutText":s(i.doms2[0],2,1,i.ftns[1],1),s(i.doms2[0],0,1,i.ftns[0],1);break;case".projectsText":s(i.doms2[1],2,1,i.ftns[1],1),s(i.doms2[1],0,1,i.ftns[0],1);break;case".designText":s(i.doms2[2],2,1,i.ftns[1],1),s(i.doms2[2],0,1,i.ftns[0],1)}}),c("body").addEventListener("mousemove",function(t){o(".move1",4,3,t),o(".move2",2,1,t),n(".makeVis",".makeInvis",t)})}(window);