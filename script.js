

let b1 = document.querySelector("#sq1");

 b1.addEventListener("mouseenter",function(){
  let r = Math.floor(Math.random()*100);                 // b/w 0 to 100
  b1.innerHTML =  `<h1>${r}</h1> `;

 })
 b1.addEventListener("mouseleave",function(){
     b1.innerHTML = "<h1>1</h1> " ;
 

  }) 

  let b2 = document.querySelector("#sq2");
  let clr = "red";
   b2.addEventListener("mouseenter",function(){
     if(clr=="red"){
          b2.style.backgroundColor = "red";
          clr = "green";
     }
     else if(clr=="green"){
         b2.style.backgroundColor = "green";
          clr = "blue";
     }
     else{
        b2.style.backgroundColor = "blue";
          clr = "red";
     }
   })
  b2.addEventListener("mouseleave",function(){
    b2.style.backgroundColor = "white" ;
})  
   // rgb (a,b,c) where a,b,c lies b/w 0 to 255

let b3 = document.querySelector("#sq3");
b3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
      let r2 = Math.floor(Math.random()*256);
        let r3 = Math.floor(Math.random()*256);
         b3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;  

})
 b3.addEventListener("mouseleave",function(){
   b3.style.backgroundColor = "white" ;
  }) 

let b4 = document.querySelector("#sq4");
 b4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
     let r2 = Math.floor(Math.random()*256);
      let r3 = Math.floor(Math.random()*256);
     b1.style.backgroundColor = `rgb(${r2},${r1},${r3})`;  
      b2.style.backgroundColor = `rgb(${r3},${r2},${r1})`; 
       b3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;  
  }) 

 b4.addEventListener("mouseleave",function(){
   b1.style.backgroundColor = "white" ;
    b2.style.backgroundColor = "white" ;
     b3.style.backgroundColor = "white" ;
  }) 
  