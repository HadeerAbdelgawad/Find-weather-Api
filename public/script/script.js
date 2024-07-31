const result= document.getElementById("result")
let form=document.getElementById("form1")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(document.getElementById("address").value)
    weatherFun()
    form.reset()
})

const errorW = document.getElementById("error")
const locationW =document.getElementById("location")
const forecast= document.getElementById("forecast")



let weatherFun = async()=>{

    try{
        const address= document.getElementById("address").value
        const res= await fetch("http://localhost:4000/weather?address="+address)
        const data= await res.json()
        console.log(data)
        if(data.error){
            errorW.innerHTML="ERROR : "+data.error
            locationW.innerHTML=""
            forecast.innerHTML=""
            errorW.style.visibility="visible"
            locationW.style.visibility="hidden"
            forecast.style.visibility="hidden"
        }
        else{
            locationW.innerHTML="Location : " + data.location
            forecast.innerHTML="Weather : "+data.forecast
            errorW.innerHTML=""
            errorW.style.visibility="hidden"
            locationW.style.visibility="visible"
            forecast.style.visibility="visible"
        }
        }
    catch(e){
        console.log(e)
    }
}

const timeOut= setTimeout(weatherFun, 3000)

