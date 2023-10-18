const express = require("express")
const router = express.Router();
const { addUserController, getUserController, getUserControllerById, deleteUserControllerById } = require("../controller/user.controller")
const { validateCreateUser } = require("../validate/user.validate")
const validate = require("../middleware/validate")

// User API End Points

/**
 * @swagger
 * /v1/user:
 *  post:
 *    description: Use to add User in DB
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Add User
 *        description: Add User in DB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - mobile
 *          properties:
 *            name:
 *              type: string
 *            mobile:
 *              type: number
 *          example:
 *              name: Kamal
 *              mobile: 9876543210
 *    responses:
 *      '200':
 *        description: User added successfully.
 */

router.post('/user',validate(validateCreateUser), addUserController)


/**
 * @swagger
 * /v1/users:
 *  get:
 *    description: Get all the Users from DB
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: foods fetched successfully.
 */
router.get('/users', getUserController)


/**
 * @swagger
 * /v1/user/{userId}:
 *  get:
 *    description: Fetch a user from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: Fetch a user from DB.
 *        schema:
 *          type: string
 *          required:
 *            - userId
 *          properties:
 *            userId:
 *              type: string
 *          example:
 *              652fc47c6c416b889b900731
 *    responses:
 *      '200':
 *        description: User fetched successfully.
 */
router.get('/user/:userId', getUserControllerById)


/**
 * @swagger
 * /v1/user/{userId}:
 *  delete:
 *    description: Removes user from DB.
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: Remove user from DB.
 *        schema:
 *          type: string
 *          required:
 *            - userId
 *          properties:
 *            userId:
 *              type: string
 *    responses:
 *      '200':
 *        description: User removed successfully.
 */
router.delete('/user/:userId', deleteUserControllerById)

module.exports = router;