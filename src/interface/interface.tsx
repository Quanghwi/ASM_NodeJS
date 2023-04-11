export interface IProduct {
    id: number
    _id: number | string,
    name: string,
    price: number,
    description: string,
    categoryId: number
}

export interface ICategory {
    _id: any
    id: number,
    name: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    phone: string,
    role: string
}