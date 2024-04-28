export interface Auther {
    _id: string;
    name: string;
    email: string;
}

export interface Book {
    _id: string;
    title: string;
    author: Auther;
    coverImage: string;
    file: string;
    genre: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}