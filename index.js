


var isScrolled=false

window.onscroll=()=>{
    isScrolled= window.pageYOffset===0?false:true
    console.log(isScrolled);
    
   }