import { response } from "express"
import cities from "../cities.js"
import City from "../models/City.js"


const citiesController={
    getAllCities:(request,response,next)=>{
        response.json({
            response:cities,
            success:true,
            error:null
        })
    },
    getOneCities:(request,response,next)=>{
        //console.log(request.params);
        const city=cities.find(city=>city.City==request.params.City)
        response.json({
            response:city,
            success:true,
            error:null
        })
    },

    createOneCity:async (request,response,next)=>{
        // console.log(request.body);
        try {
           await City.create(request.body)
            console.log(City);
            
        } catch (error) {
            console.log(error);
        }
         

        response.json({
            // response:city,
            success:true,
            error:null
        })
    },

}

export default citiesController