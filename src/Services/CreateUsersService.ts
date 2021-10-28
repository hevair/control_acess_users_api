

type Users = {
    id: string;
    name: string;
    email: string;
    password: string;
    create_at: string
}

class CreateUsersService{
     execute(user: Users){
        console.log(user)
    }
}

export {CreateUsersService}