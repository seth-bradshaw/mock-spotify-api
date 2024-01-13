module.exports = (controller) => async (req, res, next) => {
    try {
        console.log('inside middle')
        await controller(req, res);
    } catch (error) {
        return next(error);
    }
}