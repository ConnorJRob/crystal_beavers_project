const baseURL = "http://localhost:5000/api/lessons/"

export const getLessons = () => { // activate a get request on the baseURL
    return fetch(baseURL)
    .then(res => res.json()) // returns all the data as json
};