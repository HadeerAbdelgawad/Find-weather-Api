const request=require("request")

const forecast= (longtitude , latitude , callback)=>{
    //خط الطول, خط العرض , callback function 
    //callabck=> يا نديلك ايرور يا تديلك الداتا بتاعتك
    
    
    const url="http://api.weatherapi.com/v1/current.json?key=a4f9f4b855b945ffaf7215028241607&q="+longtitude + " , " +latitude
    
    request({url , json : true}, (error, response)=>{
        // console.log(response.body)
        // const responseObject= JSON.parse(response.body)
    
        if(error){
            // console.log("ERROR OCCURED")
            callback("ERROR OCCURED", undefined)
            // callback("error", data  )
        }else if(response.body.error){
            callback(response.body.error.message, undefined)
            // console.log(response.body.error.message)
        }else{
            callback(undefined,response.body.location.name + " is " +response.body.current.condition.text)
        // console.log(response.body.location.name)
        // console.log(response.body.current.condition.text)
        }
    })
    }

    module.exports= forecast