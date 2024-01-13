module.exports = (error, req, res, next) => {
    console.log(error)
    // TODO add logging service call here
    res.status(error.status).send({ error })
}