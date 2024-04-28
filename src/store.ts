import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'

type State = {
    token: string | null;
}

type Actions = {
    setToken: (token: string | null) => void;
    clearToken: () => void;
}

export const useTokenStore = create<State & Actions>()(devtools(persist(
    (set) => ({
        token: null,
        setToken: (token) => set({ token }),
        clearToken: () => set({ token: null })
    }), { name: 'jwtToken' }
)))