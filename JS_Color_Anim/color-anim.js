let container = document.querySelector(".container");
createBox(240);

function createBox(num)
{
  for(let i  = 0 ; i<num ; i++)
  {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  } 
}

let boxes = document.querySelectorAll(".box");
boxes.forEach(element => 
  {
  element.addEventListener('mouseover',function(){
    x=  Math.floor(Math.random()*255);
    y=  Math.floor(Math.random()*255);
    z=  Math.floor(Math.random()*255);
    element.style.background= `rgb(${x},${y},${z})`
  })
  
  element.addEventListener('mouseout',function()
  {
    setInterval(function(){
      element.style.backgroundColor="#444";
    }, 1000);
  })
});
