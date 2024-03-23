import React,{useState} from 'react'

function Amount() {
    const [amount, setamount] = useState('')
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(amount===''){
            alert("please enter amount")
        }else{
            var options ={
                key:"",
                key_secret:"",
                amount:amount*100,
                currency:"INR",
                name:"startup projects",
                description:"testing purpose",
                handler:function(response){
                    alert(response.razorpay_payment_id)
                },
                prefill:{
                    name:"chris",
                    email:"christolawrencee@gmail.com",
                    contact:"8056536704"
                },
                notes:{
                    address:"razorpay corporate office"
                },
                theme:{
                    color:"#3399cc"
                }
            };
            var pay = new window.Razorpay(options)
            pay.open();
        }
    }
  return (
    <div>
        <h2>razorpay</h2>
        <input type='text' placeholder='enter amount' value={amount} onChange={(e)=>setamount(e.target.value)}/>
        <br></br>
        <button onClick={handlesubmit}>submit</button>
    </div>
  )
}

export default Amount