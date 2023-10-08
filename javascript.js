let ipRangedom = document.querySelector('input[type=range]');
let ipValueDisplay= document.querySelector('.ip_value_display');



ipRangedom.addEventListener('input',(e)=>{
    console.log(ipValueDisplay.value);
    ipValueDisplay.textContent = `Pixel size ${ipRangedom.value}`;
})