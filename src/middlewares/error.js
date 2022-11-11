const handlerError = (error, req, res, next) => {
    const {status, errorContent, message} = error;
    res.status(status).json({
        message: "no pudo leer",
        errorContent: error,
})
};

module.exports = handlerError;