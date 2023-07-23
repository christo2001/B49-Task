let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let zero = document.getElementById("0")
let subtract = document.getElementById("subtract")
let add = document.getElementById("add")
let multiply = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
let del = document.getElementById("delete")
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

multiply.addEventListener("click",function(){
    console.log(res.value+=multiply.value)
})

document.getElementById("equal").addEventListener("click",function(){
  res.value = eval(res.value)
})

var clear = document.querySelector("#clear")
clear.addEventListener("click",function(){
  res.value='';
})

four.addEventListener("click",function(){
  console.log(res.value+=four.value)
})

five.addEventListener("click",function(){
  console.log(res.value+=five.value)
})

six.addEventListener("click",function(){
  console.log(res.value+=six.value)
})

seven.addEventListener("click",function(){
  console.log(res.value+=seven.value)
})

eight.addEventListener("click",function(){
  console.log(res.value+=eight.value)
})

nine.addEventListener("click",function(){
  console.log(res.value+=nine.value)
})

zero.addEventListener("click",function(){
  console.log(res.value+=zero.value)
})

divide.addEventListener("click",function(){
  console.log(res.value+=divide.value)
})

modulus.addEventListener("click",function(){
  console.log(res.value+=modulus.value)
})

del.addEventListener("click",function(){
  res.value= (res.value.slice(0,-1))
})

dot.addEventListener("click",function(){
  console.log(res.value+=dot.value)
})
