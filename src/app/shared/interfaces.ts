export class FbResponse {
    name: string
}

export class fbResImg {
    name: string
}

export class fbServ {
    name: string
}

export class fbBlog {
    name: string
}

export interface Product {
    id?: string,
    title?: string,
    photo?: string,
    info?: string,
    descShort?: string,
    price?: string,
    date?: Date
}

export interface Service {
    id?: string,
    desc?: string,
    img?: string,
    info?: string,
    date?: Date
}

export interface Article {
    id?: string,
    title?: string,
    photo?: string,
    info?: string,
    descShort?: string,
    date?: Date 
}