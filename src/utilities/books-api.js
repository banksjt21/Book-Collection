import sendRequest from "./send-request";

const BASE_URL = '/api/books'; // express router will pass this to the controller

export function addBook(bookInfo) {
    console.log(bookInfo);
    return sendRequest(BASE_URL, 'POST', bookInfo);
}

export function getBooks() {
    return sendRequest(BASE_URL);
}

export function showBook() {
    return sendRequest(BASE_URL);
}