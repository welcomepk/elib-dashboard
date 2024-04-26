import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const login = (data: { email: string, password: string }) => {
    return api.post('/users/login', data)
}