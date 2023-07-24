let text = document.getElementById("main")
let move = document.getElementById("marquee")

setTimeout(() => {
    text.innerText="10"
    text.style.color="brown"

    setTimeout(() =>{
        text.innerText = "9"
        text.style.color="orange"


        setTimeout(() =>{
            text.innerText = "8"
            text.style.color="green"

            setTimeout(() =>{
              text.innerText="7"
              text.style.color="brown"

              setTimeout(() =>{
                text.innerText="6"
                text.style.color="orange"

                setTimeout(()=>{
                    text.innerText="5"
                    text.style.color="green"

                    setTimeout(()=>{
                        text.innerText="4"
                        text.style.color="brown"

                        setTimeout(() =>{
                            text.innerText="3"
                            text.style.color="orange"

                            setTimeout(() =>{
                                text.innerText="2"
                                text.style.color="green"

                                setTimeout(() =>{
                                    text.innerText="1"
                                    text.style.color="red"

                                    setTimeout(() =>{
                                        text.innerText="HAPPY INDEPENDENCE DAY"
                                        text.style.color = "brown"
                                        text.style.background="antiquewhite"
                                        move.innerHTML=`<marquee> <span class="text1">HAPPY</span>  <span class="text2">INDEPENDENCE</span>  <span class="text3">DAY</span> </marquee>`
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
              },1000)
            },1000)
        },1000)
    },1000)
},0)