

let ipRangedom = document.querySelector('input[type=range]');
let ipValueDisplay= document.querySelector('.ip_value_display');
let BoxContainerDom = document.querySelector('.container');
let Btn = document.querySelector('button');
let ContainerParent = document.querySelector('.container-p')
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
    
    let dimensionOfGridElement = parseInt(BoxContainerDom.clientWidth/no) ;
    if(ContainerParent.hasChildNodes())
    ContainerParent.removeChild(BoxContainerDom);
   
    BoxContainerDom= document.createElement('div');
    BoxContainerDom.classList.add('container');
    BoxContainerDom.classList.add('flex-r');
let NoOFGridElements = no*no;
for(let i = 0 ; i<NoOFGridElements ;i++) {
    let  child=document.createElement('div');
    child.classList.add('child');
    child.style.setProperty("width",`${dimensionOfGridElement}px`);
    child.style.setProperty("height",`${dimensionOfGridElement}px`);
    child.style.setProperty("background-color", `rgb(255,255,255)`);
    
    BoxContainerDom.appendChild(child);
    
}
BoxContainerDom.style.width=`${dimensionOfGridElement*no}px`
BoxContainerDom.style.height=`${dimensionOfGridElement*no}px`
ContainerParent.appendChild(BoxContainerDom);
BoxContainerDom.addEventListener('mouseover',(e)=>{
  
    if(e.target !==BoxContainerDom){
        if(Btn.classList.contains('rainbow'))changeColorRandomly(e.target);
        else IncreaseDarkShade(e.target);
          
    }
   
})
}
Btn.addEventListener('click',(e)=>{
    if(Btn.textContent==="Rainbow")
    Btn.textContent ="Dark"
else  Btn.textContent ="Rainbow"
    Btn.classList.toggle('rainbow')
})
ipRangedom.addEventListener('input',(e)=>{
    
    ipValueDisplay.textContent = `Pixel size ${ipRangedom.value}`;
    generateContainerChild(parseInt(ipRangedom.value));
})
// document.querySelector('body').addEventListener('scroll',(e)=>{
//     console.log(e)
// })
generateContainerChild(1);
ipRangedom.value=1;