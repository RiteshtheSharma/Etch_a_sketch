
document.querySelector('.container .child').style.setProperty("background-color", `rgb(255,255,255)`);
let ipRangedom = document.querySelector('input[type=range]');
let ipValueDisplay= document.querySelector('.ip_value_display');
let BoxContainerDom = document.querySelector('.container');
let Btn = document.querySelector('button');
const changeColorRandomly = (element)=>{
    let redValue = parseInt(Math.random()*255)+1;
        let greenVal = parseInt(Math.random()*255)+1; 
        let BlueVal = parseInt(Math.random()*255)+1; 
        element.style.setProperty("background-color", `rgb(${redValue},${greenVal},${BlueVal})`);
       
}
const IncreaseDarkShade =(element)=>{
   let r,g,b ;
   [r,g,b]= (element.style.getPropertyValue('background-color')).slice(4,-1).split(',');
   console.log(r,g,b,element.style.backgroundColor);
     element.style.setProperty("background-color", `rgb(${parseInt(r*0.9)},${parseInt(g*0.9)},${parseInt(b*.9)})`);
}
const generateContainerChild = (no)=>{
BoxContainerDom.innerHTML='';
let dimensionOfGridElement = parseInt(600/no) ;

let NoOFGridElements = no*no;
for(let i = 0 ; i<NoOFGridElements ;i++) {
    let  child=document.createElement('div');
    child.classList.add('child');
    child.style.setProperty("width",`${dimensionOfGridElement}px`);
    child.style.setProperty("height",`${dimensionOfGridElement}px`);
    child.style.setProperty("background-color", `rgb(255,255,255)`);
    
    BoxContainerDom.appendChild(child);
    
}
}
Btn.addEventListener('click',(e)=>{
    if(Btn.textContent==="Rainbow")
    Btn.textContent ="Dark"
else  Btn.textContent ="Rainbow"
    Btn.classList.toggle('rainbow')
})
BoxContainerDom.addEventListener('mouseover',(e)=>{
    
    if(e.target !==BoxContainerDom){
        if(Btn.classList.contains('rainbow'))changeColorRandomly(e.target);
        else IncreaseDarkShade(e.target);
          
    }
   
})
ipRangedom.addEventListener('input',(e)=>{
    
    ipValueDisplay.textContent = `Pixel size ${ipRangedom.value}`;
    generateContainerChild(parseInt(ipRangedom.value));
})