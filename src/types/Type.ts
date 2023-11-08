export type ProductT = {
    name: string 
    route: string
    color: Array<string>
    price: number
    sizes: Array<number>
    images: Array<string>
    description: string 
}

export type CartT = {
    name: string 
    price: number 
    color: string 
    size: number 
    quantity: number
}

export type MessageT = {
    names: string
    email: string 
    message: string
}