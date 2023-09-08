import Tinerary from "../models/Tinerary.js"
import City from "../models/City.js";

const tinerariesController={
    getAllTineraries: async(request,response,next)=>{
        let{tinerary, city}=request.query
        let query={}
        if(tinerary){
            query.tinerary={$regex: tinerary.trim(),$options:"i"}
        }
        try {
           const tineraries=await Tinerary.find(query).populate({
            path: "city",
            select:"name image country language -_id"
           })
            response.status(200).json({status:200,success:true,response:tineraries})
        } catch (err) {
            response.status(500).json({warning: console.log(err)})
        }
        
    },
    
    getOneTinerary:async(request,response,next)=>{
        const {id} = request.params

        let tineraries;
        let error=null;
        let success=true;
        try {
            tineraries=await Tinerary.findOne({_id:id}).populate({
                path: "city",
                select:"name image country language -_id"
            })
            // console.log(cities);
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

    createOneTinerary:async (request,response)=>{
        
        try {
            if(request.body.city){
                let cityQuery={name:{$regex: request.body.city.trim(),$options:"i"}}
                const city=await City.findOne(cityQuery)
                if(city){
                    let id={...request.body}
                    id.city=city._id
                    const newTinerary=await Tinerary.create(id)
                    await City.findOneAndUpdate({_id:city._id},{$push :{tinerary: newTinerary._id}})
                    response.status(201).json({newTinerary:newTinerary})
                }else{
                    response.json({warning: "Cant create Tinerary"})

                }
            }else{
                response.json({warning: "field City is required"})
            }
            
            
        } catch (err) {
            response.status(500).json({err})
            console.log(err);
        }
        
    },

    updateOneTinerary:async(request,response,next)=>{
        const {id} = request.params
        let tinerary;
        let error=null;
        let success=true;
        // console.log(request.body);
        try {
           tinerary= await Tinerary.findOneAndUpdate({_id:id},request.body,{new:true})
        } catch (err) {
            console.log(err);
            success=false
            next(err)
        }
        
        
        response.json({
    
            response:tinerary,
            success,
            error
        })
    },

    deleteOneTinerary:async(request,response,next)=>{
        const {id} = request.params
        let tinerary;
        let error=null;
        let success=true;
        // console.log(request.body);
        try {
           tinerary= await Tinerary.findOneAndDelete({_id:id})
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

export default tinerariesController