import cities from "../cities.js"

const citiesController={
    getAllCities:(request,response,next)=>{
        response.json({
            response:cities,
            success:true,
            error:null
        })
    },
    getOneCities:(request,response,next)=>{
        console.log(request.params);
        const city=cities.find(city=>city.Country==request.params.Country)
        response.json({
            response:city,
            success:true,
            error:null
        })
    },

}

export default citiesController