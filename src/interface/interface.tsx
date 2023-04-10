export interface IProduct {
    _id: number,
    name: string,
    price: number,
    description: string,
    categoryId: number
}

export interface ICategory {
    id: number,
    cateName: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string,
    role: string
}