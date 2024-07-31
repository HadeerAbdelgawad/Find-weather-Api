const express = require("express")
const geocode=require('./Tools/geocode')
const forecast= require('./Tools/forecast')

const app= express()
const port =process.env.PORT || 4000

const path = require("path")

const pathDirectory = path.join(__dirname, '../public')
app.use(express.static(pathDirectory))

app.set('view engine', 'hbs');

const viewsDirectory= path.join(__dirname, '../temp1/views')
app.set("views", viewsDirectory)

var hbs = require('hbs')

const partialsPath = path.join(__dirname, '../temp1/partials')
hbs.registerPartials(partialsPath)


app.get('/',(req, res)=>{
    res.render('index',{
        title:"Home Page",
        describe:"This is the home page"
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"You must provide Address"
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.longtitude , data.latitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast : forecastData,
                location : req.query.address,
        })
        
        })
    })
})



app.listen( port, ()=>{
    console.log("App is listening on port "+port)
})