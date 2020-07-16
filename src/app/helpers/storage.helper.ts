export const setUser = (appService, data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    appService.user = data
};

export const getUser = () => JSON.parse(sessionStorage.getItem("user"));

export const removeUser = (appService) => {
    sessionStorage.removeItem("user")
    appService.user = undefined
};

export const setEmail = (email) => localStorage.setItem('Email', email);

export const getEmail = () => localStorage.getItem('Email');

export const sessionSetItem = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
}

export const sessionGetItem = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

export const sessionRemoveItem = (key) => {
    sessionStorage.removeItem(key)
}