const { sendSuccess, sendError } = require('../utils/helper')
const { addUserService, getUserService, getUserByIdService, deleteUserByIdService } = require("../services/user.service")

const addUserController = (async (req, res) => {
    try {
        const { name, mobile } = req.body
        const reqObj = { name, mobile }
        const data = await addUserService(reqObj)
        return res.send(sendSuccess(data, "User Added !"))
    } catch (error) {
        return res.send(sendError(error.message))
    }
})

const getUserController = (async (req, res) => {
    try {
        const { name, page, limit, sortBy } = req.query;
        const option = {page, limit, sortBy}
        let filter = {};
        if (name !== undefined) {
            filter = {
                name: {
                    $regex: name,
                    $options: 'i',
                },
            };
        }
        const data = await getUserService(filter, option)
        return res.send(sendSuccess(data, "User Fetched !"))
    } catch (error) {
        return res.send(sendError(error.message))
    }
})

const getUserControllerById = (async (req, res) => {
    try {
        const { userId } = req.params
        const data = await getUserByIdService(userId)
        console.log(data);
        let message = data === null ? 'User Not Found!': 'User Fetched!'
        return res.send(sendSuccess(data, message))
    } catch (error) {
        return res.send(sendError(error.message))
    }
})

const deleteUserControllerById = (async (req, res) => {
    try {
        const { userId } = req.params
        const data = await deleteUserByIdService(userId)
        return res.send(sendSuccess(null, "User Deleted !"))
    } catch (error) {
        return res.send(sendError(error.message))
    }
})

module.exports = {
    addUserController,
    getUserController,
    getUserControllerById,
    deleteUserControllerById
}