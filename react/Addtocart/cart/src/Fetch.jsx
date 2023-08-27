import React from 'react'

function fetch() {

  const[data,setdata]=useState([])
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState(null)

    useEffect(() =>{
        async function async(){
            const api = 'https://restcountries.com/v3.1/all';
            try{
                const response = await fetch (api);
                const data = await response.json();
                for(var i=0; i<data.length; i++){
                    if(data[i].name.common == 'peru'){
                        setdata(data[i].flag)
                    }
                }
            }
            catch (err){
                seterror(err)
            }finally{
                setloading(false)
            }
        }

        async()
    },[]);

    if(loading){
        return<div>loading...</div>
    }
    if(error){
        return<div>error:{error.message}</div>
    }
  return (
    <div>
        <h1>fetch</h1>
        <p>{data}</p>
    </div>
  )
}

export default fetch