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
    type?: string,
    id?: string,
    title?: string,
    photo?: string,
    info?: string,
    descShort?: string,
    price?: string,
    date?: Date
}