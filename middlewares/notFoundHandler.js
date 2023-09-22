import createError from "http-errors"

const notFoundHandler =(req,res,next)=>{
    next(createError(404,"Page not found"))
}

export default notFoundHandler
