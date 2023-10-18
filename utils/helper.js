const sendSuccess = ((data, message) => {
    return ({
        success: true,
        message,
        data 
    })
})

const sendError = ((error) => {
    return ({
        success: false,
        message: error,
         
    })
})

module.exports = {
    sendSuccess,
    sendError
}