import { writable } from 'svelte/store';

const authStore = writable({
    isAuthenticated: false,
    user: null,
});

export const login = (user) => {
    authStore.set({
        isAuthenticated: true,
        user,
    });
};

export const logout = () => {
    authStore.set({
        isAuthenticated: false,
        user: null,
    });
};

export const subscribe = authStore.subscribe;