const wrapper = (contoller) => async (req, res, next)  =>  {
    try {
        await contoller(req, res);
    } catch (error) {
        next(error)
    }
}

module.exports = wrapper;