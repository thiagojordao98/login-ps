import axios from 'axios';

const api = axios.create({
    baseURL : 'https://frontendproject.b2bit.company/account',
});


export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'Miguel', email: 'miguel@gmail.com' }
        };
        const response = await api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'Miguel', email: 'miguel@gmail.com' },
            token: '123456789'
        };
        const response = await api.post('/tokens/', { email, password });
        console.log(response.data)
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    }
});