import express, { json } from 'express'
import { CreateUsersController } from './controllers/CreateUsersController'

const route = express.Router()

 const createUser = new CreateUsersController()

route.post('/users', createUser.handle )

export {route}