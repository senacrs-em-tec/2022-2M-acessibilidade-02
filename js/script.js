function fonteh(type){
   let ids = ["#h1","#h2","#h3","#h4","#h5"];
   ids.forEach(id => {
      let el = document.querySelector(id);
      let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");
      fontSize = parseFloat(fontSize);
      if (type === "increase"){
         el.style.fontSize = (fontSize + 5) + "px";
      }else{
         el.style.fontSize = (fontSize - 5) + "px";
      }
   })
}
function fontet(type){
   let ids = ["#t1","#t2","#t3","#t4","#t5","#t6","#t7","#t8","#t9","t10","#11","#t12","#t13",
   "#t14","#t15","#t16","#t17","#t18","#t19","#t20"];
   ids.forEach(id => {
      let el = document.querySelector(id);
      let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size");
      fontSize = parseFloat(fontSize);
      if (type === "increase"){
         el.style.fontSize = (fontSize + 5) + "px";
      }else{
         el.style.fontSize = (fontSize - 5) + "px";
      }
   })
}