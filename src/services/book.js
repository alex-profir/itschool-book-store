import { BASE_URL, fetchAndParse, headers } from "./utils";


export function myBooks() {
    return fetchAndParse(`${BASE_URL}/book/my-books`, {
        headers
    })
}

export function getAllBooks() {
    return fetchAndParse(`${BASE_URL}/book/`, {
        headers
    });
}