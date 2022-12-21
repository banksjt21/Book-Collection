import sendRequest from "./send-request";

const BASE_URL = '/api/books'; // express router will pass this to the controller

export function addBook(bookInfo) {
    console.log(bookInfo);
    return sendRequest(BASE_URL, 'POST', bookInfo);
}

export function getBooks() {
    return sendRequest(BASE_URL);
}

export function showBook(id) {
    // console.log(id)
    return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteBook(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}