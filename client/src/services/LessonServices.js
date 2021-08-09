const baseURL = "http://localhost:5000/api/placeholdername/"

export const getLessons = () => {
    return fetch(baseURL)
    .then(res => res.json())
};