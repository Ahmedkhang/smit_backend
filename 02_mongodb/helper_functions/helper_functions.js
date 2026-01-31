const ResponseObj = (isSuccess,message,data=null,error=null) => {
    return {
        isSuccess,message,data,error
    }
}

const ResponseError = (message="Internal Server Error",error=null) => {
    return ResponseObj(false,message,null,error)
}
const ResponseSuccess = (message = "Success", data=null) => {
    return ResponseObj(true,message,data,null)
}

module.exports = { ResponseError,ResponseSuccess}