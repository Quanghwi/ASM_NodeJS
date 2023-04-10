import { instance } from "./instance"

export const getAllUsers = () => {
    return instance.get('/users')
}