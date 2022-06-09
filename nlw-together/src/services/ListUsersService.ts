import { instanceToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


class ListUsersService {
    async execute () {
        const listUserService = await getCustomRepository(UsersRepositories)

        const users = await listUserService.find()

        return instanceToPlain(users)
    }
}

export { ListUsersService }