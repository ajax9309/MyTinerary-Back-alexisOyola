import City from "../models/City.js"


const citiesController={
    getAllCities: async(request,response,next)=>{
        let cities;
        let error=null;
        let success=true;
        try {
            cities=await City.find()
            console.log(cities);
        } catch (err) {
            console.log(err);
            success=false
            next(err)
        }
        
        response.json({
            response:cities,
            success,
            error
        })
    },
    getOneCities:async(request,response,next)=>{
        //console.log(request.params);
        const {id} = request.params

        let cities;
        let error=null;
        let success=true;
        try {
            cities=await City.findOne({_id:id})
            console.log(cities);
        } catch (err) {
            console.log(err);
            success=false
            next(err)
        }
        
        response.json({
            response:cities,
            success,
            error
        })
    },

    createOneCity:async (request,response,next)=>{
        // console.log(request.body);
        let city;
        let error=null;
        let success=true;
        try {

           city= await City.create(request.body)
            //console.log(city);
            
        } catch (err) {
            console.log(err);
            success=false
            next(err)
        }
         

        response.json({
            // response:city,
            response:city,
            success,
            error
        })
    },

    updateOneCity:async(request,response,next)=>{
        const {id} = request.params
        let city;
        let error=null;
        let success=true;
        // console.log(request.body);
        try {
           city= await City.findOneAndUpdate({_id:id},request.body,{new:true})
        } catch (err) {
            console.log(err);
            success=false
            next(err)
        }
        
        
        response.json({
    
            response:city,
            success,
            error
        })
    },

    deleteOneCity:async(request,response,next)=>{
        const {id} = request.params
        let city;
        let error=null;
        let success=true;
        // console.log(request.body);
        try {
           city= await City.findOneAndDelete({_id:id})
        } catch (err) {
            console.log(err);
            success=false
            next(err)
        }
        
        
        response.json({
    
            response:city,
            success,
            error
        })
    }

}

export default citiesController