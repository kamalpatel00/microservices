const User = require("../model/user.model")
const { paginatedObj } = require("../utils/common")

const addUserService = (async (data) => {
    try {
        return await User.create(data);
    } catch (error) {
        return error
    }
})

const getUserService = (async (filter, option) => {
    try {   
        const { sort, page, limit } = await paginatedObj(option);
        console.log("sort, page, limit :",sort, page, limit );
        const data = await User.aggregate([
            {
              $match: filter,
            },
            {
              $project: { name: 1, createdAt: 1 },
            },
            {
              $sort: sort,
            },
            {
              $skip: Math.abs(page - 1) * limit,
            },
            {
              $limit: limit,
            },
          ])
         return data
    } catch (error) {
        return error
    }
})

const getUserByIdService = (async (userId) => {
    try {
        return await User.findOne({_id: userId});
    } catch (error) {
        return error
    }
})

const deleteUserByIdService = (async (userId) => {
    try {
        return await User.deleteOne({_id: userId});
    } catch (error) {
        return error
    }
})

module.exports = {
    addUserService,
    getUserService,
    getUserByIdService,
    deleteUserByIdService
}