const request= require("request")

const geoCode= (address, callback)=>{
    const geoCodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?proximity=ip&access_token=pk.eyJ1IjoiaGFkZWVyNjUiLCJhIjoiY2x5c295bjh2MDB2dDJxczA0dG01cXZlbiJ9.MEIWUgiF99yTNwOM4iXaIA"
    
    request({url: geoCodeUrl , json : true}, (error, response)=>{
        
        if(error){
            // console.log("unable to handel geocode service")
            callback("unable to handel geocode service",undefined)
        }
       else if(response.body.message){
            // console.log(response.body.message)
            callback(response.body.message, undefined)
       }
       else if(response.body.features.length==0){
            // console.log("Unable to find location")
            callback("Unable to find location",undefined)
       }else {
        // const longtitude= response.body.features[0].center[0]
        // const latitude =response.body.features[0].center[1]
        // console.log(longtitude, latitude)
        callback(undefined, { //object
             longtitude: response.body.features[0].center[0],
             latitude :response.body.features[0].center[1]
    
        })
       }
    })
    }

    module.exports=geoCode