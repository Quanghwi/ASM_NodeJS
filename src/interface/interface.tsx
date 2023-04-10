export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    idCate: number
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