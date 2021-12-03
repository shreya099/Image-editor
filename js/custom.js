let myform= document.getElementById('myform');
let targetimage= document.getElementById('targetimage');
let inputrange= document.querySelectorAll('.slider');

myform.addEventListener('submit',function(e){
    let urlimage=document.getElementById('onlineurl');
    let imgval=urlimage.value;
    if(imgval.length){
    targetimage.setAttribute('src',imgval);
      urlimage.value='';
  }
    e.preventDefault();

});
for(let i=0;i<= inputrange.length-1;i++)
{
    inputrange[i].addEventListener('input',editimg);
}
function editimg() {
let gs= document.getElementById('gs');
let blur= document.getElementById('blur');
let br= document.getElementById('br');
let t= document.getElementById('t');
let huer= document.getElementById('huer');
let opacity= document.getElementById('opacity');
let invert= document.getElementById('invert');
let saturate= document.getElementById('saturate');
let sepia= document.getElementById('sepia');

let gsval=gs.value;
let blurval=blur.value;
let brval=br.value;
let tval=t.value;
let huerval=huer.value;
let opacityval=opacity.value;
let invertval=invert.value;
let saturateval=saturate.value;
let sepiaval=sepia.value;
targetimage.style.filter='grayscale('+gsval+'%) blur('+blurval+'px) brightness('+brval+') contrast('+tval+') hue-rotate('+huerval+'deg) opacity('+opacityval+')  invert('+invertval+') saturate('+saturateval+') sepia('+sepiaval+'%)'
}

let sliderform= document.getElementById('slider-form');
sliderform.addEventListener('reset',function(){
    sliderform.reset();
    setTimeout(function(){
        editimg();
    },0)
})




if (annyang) {
  // Let's define a command.
  const commands = {
    'reset pic':  function(){
 sliderform.reset();
    setTimeout(function(){
        editimg();
    },0)
    },
 
     'set grayscale to *tag':  function(variable){
var gs=document.getElementById('gs');
gs.value =variable;
editimg();
    },
     'set blur to *tag':  function(variable){
var blur=document.getElementById('blur');
blur.value =variable;
editimg();
    },
     'set brightness to *tag':  function(variable){
var br=document.getElementById('br');
br.value =variable;
editimg();
    },
    'set contrast to *tag':  function(variable){
        var t=document.getElementById('t');
t.value =variable;
editimg();
    },
     'set rotate to *tag':  function(variable){
       var huer=document.getElementById('huer');
huer.value =variable;
editimg();
    },
     'set opacity to *tag':  function(variable){
      var opacity=document.getElementById('opacity');
opacity.value =variable;
editimg();
    },
     'set invert to *tag':  function(variable){
      var invert=document.getElementById('invert');
invert.value =variable;
editimg();
    },
     'set saturate to *tag':  function(variable){
      var saturate=document.getElementById('saturate');
saturate.value =variable;
editimg();
    },
     'set sepia to *tag':  function(variable){
      var sepia=document.getElementById('sepia');
sepia.value =variable;
editimg();
    }





  };
  var showFlickr = function(tag) {
 
}


  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening.
  annyang.start();
}
