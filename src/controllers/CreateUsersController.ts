import { Request, Response } from 'express'
import { CreateUsersService } from '../Services/CreateUsersService'

type Users = {
    id: string;
    name: string;
    email: string;
    password: string;
    create_at: string
}

class CreateUsersController{
   async handle(request:Request, response: Response){

         const users = request.body

        console.log(users)

        const service = new CreateUsersService()

        const result = service.execute(users)

        return response.json({result})
    }
}

export {CreateUsersController}