import { IProduct } from "../interface/interface"
import { instance } from "./instance"

const getAll = () => {
    return instance.get('/products')
}
const getOne = (id: number) => {
    return instance.get('/products' + id)
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id)
}
const updateProduct = (product: IProduct) => {
    return instance.patch('/products/' + product.id, product)
}

export { getAll, getOne, addProduct, deleteProduct, updateProduct }