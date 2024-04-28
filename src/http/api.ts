import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Book } from '@/types';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const login = (data: { email: string, password: string }) => {
    return api.post('/users/login', data)
}

export const register = (data: { name: string, email: string, password: string }) => {
    return api.post('/users/register', data)
}

// Define the return type of the getBooks function
export const getBooks = async (): Promise<Book[]> => {
    // Assuming `api.get('/books')` returns a Promise<AxiosResponse<Book[]>>
    const response: AxiosResponse<Book[]> = await api.get('/books');
    return response.data;
};