let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let subtract = document.getElementById("subtract")
let add = document.getElementById("add")
let value = document.getElementById("equal")
let res = document.getElementById("result")

one.addEventListener("click",function(){
  console.log(res.value+=one.value)
})

add.addEventListener("click",function(){
  console.log(res.value+=add.value)
})

two.addEventListener("click",function(){
  console.log(res.value+=two.value)
})

three.addEventListener("click",function(){
  console.log(res.value+=three.value)
})

subtract.addEventListener("click",function(){
  console.log(res.value+=subtract.value)
})

document.getElementById("equal").addEventListener("click",function(){
  res.value = eval(res.value)
})

var clear = document.querySelector("#clear")
clear.addEventListener("click",function(){
  res.value='';
})


