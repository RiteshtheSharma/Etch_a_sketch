
const INITIAL_CONTAINER_DIMENSION= 600;
let ipRangedom = document.querySelector('input[type=range]');
let ipValueDisplay= document.querySelector('.ip_value_display');
let BoxContainerDom = document.querySelector('.container');
let Btn = document.querySelector('button');
let ContainerParent = document.querySelector('.container-p');

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


// to adjust all grid elements in a container with fixed dimensions
const calculateGridElementSides=(no_of_elements,containerSideLength)=>{

return  Math.floor( containerSideLength/no_of_elements) ;
}

const generateContainerChild = (no)=>{
    
    let dimensionOfGridElement =calculateGridElementSides(no,INITIAL_CONTAINER_DIMENSION) ;
    let NoOFGridElements = no*no;
    if(ContainerParent.hasChildNodes())
    ContainerParent.removeChild(BoxContainerDom);
   
    BoxContainerDom= document.createElement('div');
    BoxContainerDom.classList.add('container');
    BoxContainerDom.classList.add('flex-r');

for(let i = 0 ; i<NoOFGridElements ;i++) {
    let  child=document.createElement('div');
    child.classList.add('child');
    child.style.setProperty("width",`${dimensionOfGridElement}px`);
    child.style.setProperty("height",`${dimensionOfGridElement}px`);
    child.style.setProperty("background-color", `rgb(255,255,255)`);
    
    BoxContainerDom.appendChild(child);
    
}

BoxContainerDom.style.width=`${INITIAL_CONTAINER_DIMENSION}px`
BoxContainerDom.style.height=`${INITIAL_CONTAINER_DIMENSION}px`
ContainerParent.appendChild(BoxContainerDom);
BoxContainerDom.addEventListener('mouseover',(e)=>{
  console.log(e)
    if(!e.target.classList.contains('container')){
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
document.querySelector('body').addEventListener('wheel',(e)=>{ let ipEventobject = new InputEvent('input');
    if(e.deltaY>0  && ipRangedom.value<100){ipRangedom.value++;ipRangedom.dispatchEvent(ipEventobject);  }
    else if (e.deltaY<=0  && ipRangedom.value>1){ipRangedom.value--;ipRangedom.dispatchEvent(ipEventobject);  }
  
    
    
})
generateContainerChild(16);
ipRangedom.value=16;