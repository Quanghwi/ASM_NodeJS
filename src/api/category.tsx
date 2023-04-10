import { ICategory } from "../interface/interface"
import { instance } from "./instance"

const getAllCategory = () => {
    return instance.get('/categories')
}
const getOneCategory = (id: number) => {
    return instance.get('/categories' + id)
}
const addCategory = (category: ICategory) => {
    return instance.post('/categories', category)
}
const deleteCategory = (id: number) => {
    return instance.delete('/categories/' + id)
}
const updateCategory = (category: ICategory) => {
    return instance.patch('/categories/' + category.id, category)
}

export { getAllCategory, getOneCategory, addCategory, deleteCategory, updateCategory }