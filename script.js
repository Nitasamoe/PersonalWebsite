(function IIFE(window){
var properties = {
  doms : [ ".aboutClick",".projectsClick",".designClick" ],
  doms2: [ ".aboutText",".projectsText",".designText" ],
  ftns : [ function(dom,state){t(dom).style.opacity = state;},
          function(dom,state){
            t(dom).style.webkitTransform = "scale("+state+")";
            t(dom).style.mozTransform = "scale("+state+")";
            t(dom).style.msTransform = "scale("+state+")";
            t(dom).style.transform = "scale("+state+")";}
        ],
  active : "none"
}


for(var i = 0; i<properties.doms.length ; i++){
  t( properties.doms[i] ).addEventListener( "click", function( e ){
    t( ".blackBack" ).style.display = "block";
    step( ".blackBack",.9,0,properties.ftns[0],5 );
    step( ".persp",0.5,1,properties.ftns[1],5 );

    switch(e.toElement || e.target) { // e.targer for moz
      case t(".aboutClick"):
          step( properties.doms2[0],1,2,properties.ftns[1],1 );
          step( properties.doms2[0],1,0,properties.ftns[0],1 );
          t(properties.doms2[0]).style.display= "block";
          properties.active = properties.doms2[0];
          break
      case t(".projectsClick"):
          step( properties.doms2[1],1,2,properties.ftns[1],1 );
          step( properties.doms2[1],1,0,properties.ftns[0],1 );
          t(properties.doms2[1]).style.display= "block";
          properties.active = properties.doms2[1];
          break
      case t(".designClick"):
          step( properties.doms2[2],1,2,properties.ftns[1],1 );
          step( properties.doms2[2],1,0,properties.ftns[0],1 );
          t(properties.doms2[2]).style.display= "block";
          properties.active = properties.doms2[2];
          break
    }
  });
}

  t( ".blackBack" ).addEventListener( "click", function(e){

    step(".blackBack",0,.9,properties.ftns[0],5 );
    step( ".persp",1,0.5,properties.ftns[1],5 );

    switch(properties.active) {
      case ".aboutText":
          step( properties.doms2[0],2,1,properties.ftns[1],1 );
          step( properties.doms2[0],0,1,properties.ftns[0],1 );
          break
      case ".projectsText":
          step( properties.doms2[1],2,1,properties.ftns[1],1 );
          step( properties.doms2[1],0,1,properties.ftns[0],1 );
          break
      case ".designText":
          step( properties.doms2[2],2,1,properties.ftns[1],1 );
          step( properties.doms2[2],0,1,properties.ftns[0],1 );
          break
    }
  });

  t( "body" ).addEventListener( "mousemove", function(e){
    transformShape( ".move1",4,3,e );
    transformShape( ".move2",2,1,e );
    makeVisible( ".makeVis",".makeInvis",e );
  });






  function step( dom,dir,state,css,speed ){
    if(state<dir){
      var ftn = function fadeMore(dom){
                if(state < end){
                  setTimeout(function(){
                    state += 0.01;
                    css(dom,state);
                    fadeMore(dom);
                  },speed)
                }
            }
    } else {
      var ftn = function fadeMore(dom){
                if(state > end){
                  setTimeout(function(){
                    state -= 0.01;
                    css(dom,state);
                    fadeMore(dom);
                  },speed)
                } else if(dom === ".blackBack") {
                  t(dom).style.display = "none";
                  t(properties.active).style.display = "none";
                  properties.active ="none";
                }
          }
    }
    var state = state;
    var end = dir;
    ftn(dom);
  }
  function makeVisible( dom,dom2,e ){
    var doms = ta( dom );
    var domVis = t( dom2 );
    var midY = window.innerHeight/2;
    var posY = e.clientY - midY;
    var per = 1/midY;

    if(posY > 0){
      doms.forEach(function(dom){
        dom.style.opacity = (1/midY)*posY;
        domVis.style.opacity = 1-(1/midY)*posY*2;
      });
    }
  }
  function transformShape( dom,speed,rotation,e ){
      var el = t(dom);
      var midX = window.innerWidth/2;
      var midY = window.innerHeight/2;
      var posX = e.clientX - midX;
      var posY = e.clientY - midY;

      var valueX = rotation/midX*posX;
      var valueY = rotation/midY*posY;

      el.style.transform = "rotateY("+ valueX*2 +"Deg) rotateX("+ valueY*2 +"Deg) translateX("+ -valueX*speed +"px) translateY("+ -valueY*speed +"px)"
  }
  function t(dom){
      return document.getElementById(dom) || document.querySelector(dom);
  }
  function ta(dom){
      return document.querySelectorAll(dom);
  }
})(window);
